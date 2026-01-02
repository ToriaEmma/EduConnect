import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    School, PlusCircle, ChevronRight, LayoutDashboard,
    Users, MessageSquare, Settings, Bell, Briefcase
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { motion } from 'framer-motion';

export const SchoolSpace = () => {
    const navigate = useNavigate();
    const [activeView, setActiveView] = useState('dashboard');

    const navItems = [
        { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
        { id: 'recruitment', label: 'Recrutement', icon: Users },
        { id: 'offers', label: 'Offres', icon: Briefcase },
        { id: 'messages', label: 'Messagerie', icon: MessageSquare },
        { id: 'settings', label: 'Paramètres', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Top Navigation Bar - Corporate/Clean Style */}
            <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-slate-900 p-2 rounded-lg">
                            <School className="text-white w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-slate-900 leading-none">EduConnect</span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Entreprise</span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-xl">
                        {navItems.slice(0, 4).map(item => {
                            const Icon = item.icon;
                            const isActive = activeView === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveView(item.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive
                                            ? 'bg-white text-slate-900 shadow-sm'
                                            : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                                        }`}
                                >
                                    <Icon size={16} />
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 text-slate-400 hover:text-slate-600 relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        </button>
                        <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-sm cursor-pointer shadow-lg shadow-slate-900/20">
                            LE
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Lycée International Excellence</h1>
                        <p className="text-slate-500 mt-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            En ligne • Gestion et recrutement
                        </p>
                    </div>
                    <Button onClick={() => navigate('/')} variant="primary" className="shadow-xl shadow-primary/20">
                        <PlusCircle size={20} className="mr-2" />
                        Nouvelle offre d'emploi
                    </Button>
                </div>

                <motion.div
                    key={activeView}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {activeView === 'dashboard' ? (
                        <div className="space-y-8">
                            {/* KPI Metrics */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { label: "Équipe Active", value: "24", sub: "Enseignants", color: "bg-blue-500", icon: Users },
                                    { label: "Offres en cours", value: "3", sub: "12 Candidatures", color: "bg-indigo-500", icon: Briefcase },
                                    { label: "Rétention", value: "98%", sub: "+2% ce mois", color: "bg-emerald-500", icon: School },
                                    { label: "Messages", value: "5", sub: "Non lus", color: "bg-amber-500", icon: MessageSquare }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                                        <div className={`absolute top-0 right-0 w-24 h-24 ${stat.color} opacity-5 rounded-bl-full group-hover:scale-110 transition-transform`}></div>
                                        <div className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-xl flex items-center justify-center mb-4 text-${stat.color.split('-')[1]}-600`}>
                                            <stat.icon size={24} className={`text-${stat.color.split('-')[1]}-600`} />
                                        </div>
                                        <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                                        <h3 className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</h3>
                                        <p className="text-xs text-slate-400 mt-2 font-medium bg-slate-50 inline-block px-2 py-1 rounded-lg">{stat.sub}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <Card className="border-0 shadow-lg ring-1 ring-slate-100">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-bold text-slate-900">Derniers rapports</h3>
                                        <Button variant="ghost" size="sm">Voir tout</Button>
                                    </div>
                                    <div className="space-y-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="group p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors flex justify-between items-center cursor-pointer">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
                                                        MT
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900 group-hover:text-primary transition-colors">Rapport Hebdomadaire - Term S</p>
                                                        <p className="text-xs text-slate-500">Par M. Traoré • Hier à 14:00</p>
                                                    </div>
                                                </div>
                                                <ChevronRight className="text-slate-300 group-hover:text-primary transition-colors" />
                                            </div>
                                        ))}
                                    </div>
                                </Card>

                                <Card className="bg-slate-900 text-white border-0 shadow-xl overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold mb-6">Prochains paiements</h3>
                                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm mb-6">
                                            <p className="text-slate-400 text-sm mb-1">Total Prestations (Mai)</p>
                                            <p className="text-4xl font-bold">1.250.000 F</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center text-sm border-b border-white/10 pb-4">
                                                <span className="text-slate-300">Professeurs Titulaires</span>
                                                <span className="font-bold">850.000 F</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm pb-2">
                                                <span className="text-slate-300">Vacataires / Répétiteurs</span>
                                                <span className="font-bold">400.000 F</span>
                                            </div>
                                        </div>
                                        <Button className="w-full mt-8 bg-white text-slate-900 hover:bg-slate-100 border-0">
                                            Gérer la facturation
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-bold text-slate-900">Candidatures récentes</h3>
                                    <div className="flex gap-2">
                                        <select className="bg-white border-slate-200 rounded-lg text-sm"><option>Toutes les matières</option></select>
                                    </div>
                                </div>
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm hover:shadow-md transition-all group">
                                        <div className="flex items-center gap-5">
                                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-indigo-200">
                                                AS
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-slate-900">Amadou Sylla</h4>
                                                <p className="text-slate-500 text-sm mb-2">Professeur d'Espagnol • 5 ans d'exp.</p>
                                                <Badge color="blue">Score Jeu: 89/100</Badge>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 w-full md:w-auto">
                                            <Button variant="ghost" className="flex-1 md:flex-none justify-center">Décliner</Button>
                                            <Button variant="primary" className="flex-1 md:flex-none justify-center">Entretien</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <Card className="border-0 shadow-lg ring-1 ring-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-6">Mes Offres Actives</h3>
                                    <div className="space-y-4">
                                        {[1, 2].map(i => (
                                            <div key={i} className="p-4 bg-slate-50 rounded-xl border-l-4 border-green-500 hover:bg-slate-100 transition-colors cursor-pointer">
                                                <p className="font-bold text-slate-900">Professeur de SVT (Lycée)</p>
                                                <p className="text-xs text-slate-500 mt-2 flex justify-between">
                                                    <span>Publié il y a 3j</span>
                                                    <span className="font-bold text-green-600">8 candidatures</span>
                                                </p>
                                            </div>
                                        ))}
                                        <Button variant="outline" className="w-full border-dashed border-2">
                                            + Créer une offre
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    )}
                </motion.div>
            </main>
        </div>
    );
};
