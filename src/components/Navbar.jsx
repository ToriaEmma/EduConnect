import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen, User, Home, School, HelpCircle, GraduationCap } from 'lucide-react';
import { Button } from './ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/', icon: Home },
    { name: 'Tableau de bord', path: '/student', icon: User },
    { name: 'Jeux', path: '/student/games', icon: GraduationCap },
  ];


  return (
    <nav className="fixed top-0 w-full z-50 glass transition-all duration-300 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-xl">
              <School className="text-primary w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-slate-800 tracking-tight">Edu<span className="text-primary">Connect</span></span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                      }`}
                  >
                    <Icon size={16} />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost" size="sm">Connexion</Button>
              </Link>
              <Link to="/register">
                <Button variant="primary" size="sm">S'inscrire</Button>
              </Link>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-primary hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <link.icon size={18} />
                    {link.name}
                  </div>
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2 px-3">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Connexion</Button>
                </Link>
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  <Button variant="primary" className="w-full justify-start">S'inscrire</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
