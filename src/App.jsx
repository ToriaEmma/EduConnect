import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { StudentDashboard } from './pages/StudentDashboard';
import { TeacherProfile } from './pages/TeacherProfile';
import { SchoolSpace } from './pages/SchoolSpace';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher/:id" element={<TeacherProfile />} />
        <Route path="/school" element={<SchoolSpace />} />
      </Routes>
    </BrowserRouter>
  );
}
