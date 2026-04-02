import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AgentDetail from './pages/AgentDetail';
import Admin from './pages/Admin';

export default function App() {
  return (
    <BrowserRouter>
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <header className="flex justify-between items-center py-5 px-8 bg-white/70 backdrop-blur-xl rounded-full shadow-soft border border-white sticky top-4 z-50">
          <Link to="/" className="text-2xl font-black tracking-tight">
            <span className="text-primary">⚡</span> LowFast
          </Link>
          <nav className="hidden md:flex gap-8 font-semibold text-gray-600">
            <Link to="/" className="hover:text-black">Giao dịch viên</Link>
            <a href="#" className="hover:text-black">Check Scam</a>
            <Link to="/admin" className="text-red-500 hover:text-red-700">Admin</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gdv/:id" element={<AgentDetail />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
