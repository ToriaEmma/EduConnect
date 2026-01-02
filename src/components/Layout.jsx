import React from 'react';
import { Navbar } from './Navbar';
import { School, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Layout({ children }) {
    return (
        <div className="min-h-screen bg-slate-50 relative overflow-x-hidden">
            {/* Background Decorative Blobs */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-indigo-200/40 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <Navbar />
            <main className="relative z-10 pt-16 min-h-[calc(100vh-4rem)]">
                {children}
            </main>

            <footer className="relative z-10 bg-slate-900 text-white pt-20 pb-10 overflow-hidden">
                {/* Footer Decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-[500px] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* Brand Column */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <img src="/educo.png" alt="EduConnect" className="h-24 w-auto" />
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                La plateforme qui révolutionne la connexion entre élèves, enseignants et établissements scolaires grâce à la validation des compétences par le jeu.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300">
                                    <Twitter size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300">
                                    <Instagram size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300">
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Links Column 1 */}
                        <div>
                            <h4 className="font-bold text-lg mb-6">Plateforme</h4>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Accueil</a></li>
                                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Pour les Élèves</a></li>
                                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Pour les Enseignants</a></li>
                                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Établissements</a></li>
                            </ul>
                        </div>

                        {/* Links Column 2 */}
                        <div>
                            <h4 className="font-bold text-lg mb-6">Support & Légal</h4>
                            <ul className="space-y-4 text-slate-400 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Conditions Générales</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a></li>
                                <li><a href="/contact" className="hover:text-white transition-colors">Nous Contacter</a></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="font-bold text-lg mb-6">Restez informé</h4>
                            <p className="text-slate-400 text-sm mb-4">Recevez nos dernières actualités et conseils pédagogiques.</p>
                            <div className="flex flex-col gap-3">
                                <input type="email" placeholder="Votre email" className="bg-slate-800 border-none rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary" />
                                <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-colors">S'inscrire</button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
                        <p>&copy; {new Date().getFullYear()} EduConnect Inc. Tous droits réservés.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Plan du site</a>
                            <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
