import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { HomePage } from './pages/HomePage';
import { StudentDashboard } from './pages/StudentDashboard';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { MethodPage } from './pages/MethodPage';
import { ContactPage } from './pages/ContactPage';
import { QuestionDetail } from './pages/QuestionDetail';
import { GamesPage } from './pages/GamesPage';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/method" element={<MethodPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/games" element={<GamesPage />} />
          <Route path="/questions/:id" element={<QuestionDetail />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
