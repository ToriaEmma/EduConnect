import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs
} from 'firebase/firestore';

// Config Firebase - Chargé depuis le fichier .env
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'demo-api-key',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'demo.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'demo-project',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'demo.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '123456789',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || 'demo-app-id'
};

// Only initialize if we have real Firebase config (not demo values)
const hasRealConfig = import.meta.env.VITE_FIREBASE_API_KEY &&
  import.meta.env.VITE_FIREBASE_API_KEY !== 'demo-api-key';

let app, auth, db;

if (hasRealConfig) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} else {
  console.warn('Firebase not configured. Using demo mode. Add .env file with Firebase credentials for full functionality.');
  // Create mock exports to prevent import errors
  auth = null;
  db = null;
}

export { auth, db };


// REGISTER
export async function registerUser(email, password, userData) {
  try {
    // Créer compte
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Sauvegarder les données dans Firestore
    const usersRef = collection(db, 'users');
    await addDoc(usersRef, {
      uid: user.uid,
      email: email,
      name: userData.name,
      role: userData.role,
      grade: userData.grade || null,
      school: userData.school || null,
      schoolName: userData.schoolName || null,
      city: userData.city || null,
      subjects: userData.subjects || [],
      hourlyRate: userData.hourlyRate || null,
      createdAt: new Date()
    });

    return {
      uid: user.uid,
      userData: {
        uid: user.uid,
        email: email,
        name: userData.name,
        role: userData.role,
        grade: userData.grade,
        school: userData.school,
        schoolName: userData.schoolName,
        city: userData.city,
        subjects: userData.subjects,
        hourlyRate: userData.hourlyRate
      }
    };
  } catch (error) {
    throw new Error(error.message);
  }
}

// LOGIN
export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Récupérer les données de l'utilisateur
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('uid', '==', user.uid));
    const querySnapshot = await getDocs(q);

    let userData = null;
    querySnapshot.forEach((doc) => {
      userData = { id: doc.id, ...doc.data() };
    });

    return { success: true, user, userData };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// LOGOUT
export async function logoutUser() {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// GET CURRENT USER
export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}

// GET ALL TEACHERS
export async function getAllTeachers() {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('role', '==', 'teacher'));
    const querySnapshot = await getDocs(q);

    const teachers = [];
    querySnapshot.forEach((doc) => {
      teachers.push({ id: doc.id, ...doc.data() });
    });

    return teachers;
  } catch (error) {
    console.error('Error getting teachers:', error);
    return [];
  }
}

// GET ALL STUDENTS
export async function getAllStudents() {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('role', '==', 'student'));
    const querySnapshot = await getDocs(q);

    const students = [];
    querySnapshot.forEach((doc) => {
      students.push({ id: doc.id, ...doc.data() });
    });

    return students;
  } catch (error) {
    console.error('Error getting students:', error);
    return [];
  }
}
