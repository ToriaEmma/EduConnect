import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
    Users, BookOpen, MessageSquare, TrendingUp,
    Calendar, CreditCard, Bell, LogOut, CheckCircle,
    ChevronRight, Star, Crown, Search, ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { motion } from 'framer-motion';

export const ParentDashboard = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get('tab') || 'overview';

    const setActiveTab = (tab) => {
        setSearchParams({ tab });
    };

    const [activeChild, setActiveChild] = useState(0);

    const childrenData = [
        {
            id: 0,
            name: "Marc",
            level: "Terminale S",
            progress: 75,
            nextSession: "Maths - Demain 14h",
            budget: "45.000 F",
            reports: [
                { id: 1, subject: "Mathématiques", tutor: "Dr. Koné", date: "Hier", rating: 4, content: "Marc a bien compris les dérivés, mais doit revoir les limites." },
                { id: 2, subject: "Physique", tutor: "M. Traoré", date: "Lun. 24 Oct", rating: 5, content: "Excellente séance, très participatif sur la mécanique." }
            ]
        },
        {
            id: 1,
            name: "Sophie",
            level: "3ème",
            progress: 88,
            nextSession: "Anglais - Mercredi 10h",
            budget: "30.000 F",
            reports: [
                { id: 3, subject: "Anglais", tutor: "Mme. Dubois", date: "Samedi", rating: 5, content: "Sophie a fait d'énormes progrès à l'oral." },
                { id: 4, subject: "SVT", tutor: "M. Diop", date: "Mercredi", rating: 4, content: "Bonne compréhension du cours sur le système immunitaire." }
            ]
        }
    ];

    const currentChild = childrenData[activeChild];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
                <div className="flex items-center gap-2" onClick={() => navigate('/')}>
                    <div className="bg-emerald-500/10 p-2 rounded-xl">
                        <Users className="text-emerald-600 w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold text-slate-800">Edu<span className="text-emerald-500">Parents</span></span>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="hidden sm:flex" onClick={() => navigate('/')}>
                        <LogOut size={18} className="mr-2" /> Déconnexion
                    </Button>
                    <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden border-2 border-white shadow-sm">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="Parent" />
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-4 lg:p-8 space-y-8">
                {/* Welcome & Child Selector */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Tableau de Bord Famille</h1>
                        <p className="text-slate-500 mt-1">Suivez la réussite de vos enfants en temps réel.</p>
                    </div>
                    <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
                        {childrenData.map((child, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveChild(idx)}
                                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeChild === idx
                                    ? 'bg-emerald-500 text-white shadow-md'
                                    : 'text-slate-500 hover:bg-slate-50'
                                    }`}
                            >
                                {child.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="flex gap-4 border-b border-slate-200 pb-1">
                    {['Aperçu', 'Paiements', 'Messages'].map((tab) => {
                        const key = tab.toLowerCase() === 'aperçu' ? 'overview' : (tab.toLowerCase() === 'paiements' ? 'wallet' : 'messages');
                        return (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`pb-3 px-2 font-medium transition-colors ${activeTab === key ? 'text-emerald-600 border-b-2 border-emerald-500' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                {tab}
                            </button>
                        );
                    })}
                </div>

                {activeTab === 'overview' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                        {/* Overview Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-0 shadow-lg shadow-emerald-500/20">
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="text-emerald-100 font-medium">Progression: {currentChild.name}</p>
                                            <h3 className="text-4xl font-bold mt-1">{currentChild.progress}%</h3>
                                        </div>
                                        <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                            <TrendingUp size={24} />
                                        </div>
                                    </div>
                                    <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                                        <div className="bg-white h-full rounded-full" style={{ width: `${currentChild.progress}%` }}></div>
                                    </div>
                                    <p className="text-emerald-100 text-sm mt-4 flex items-center gap-2">
                                        <CheckCircle size={14} /> +12% ce mois-ci
                                    </p>
                                </div>
                            </Card>

                            <Card className="border-0 shadow-md ring-1 ring-slate-100">
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="text-slate-500 font-medium">Prochaine Séance</p>
                                            <h3 className="text-xl font-bold text-slate-900 mt-1">{currentChild.nextSession}</h3>
                                        </div>
                                        <div className="p-3 bg-amber-50 text-amber-500 rounded-xl">
                                            <Calendar size={24} />
                                        </div>
                                    </div>
                                    <Button variant="outline" className="w-full mt-2" onClick={() => navigate('/parent/planning')}>Gérer le planning</Button>
                                </div>
                            </Card>

                            <Card className="border-0 shadow-md ring-1 ring-slate-100">
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="text-slate-500 font-medium">Budget Restant</p>
                                            <h3 className="text-2xl font-bold text-slate-900 mt-1">{currentChild.budget}</h3>
                                        </div>
                                        <div className="p-3 bg-blue-50 text-blue-500 rounded-xl">
                                            <CreditCard size={24} />
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-400 mb-4">Renouvellement le 01 Nov</p>
                                    <Button variant="ghost" className="w-full text-blue-600 h-8" onClick={() => setActiveTab('wallet')}>Voir transactions</Button>
                                </div>
                            </Card>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Session Reports Feed */}
                            <div className="lg:col-span-2 space-y-6">
                                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                    <BookOpen className="text-emerald-500" />
                                    Derniers Rapports de Séance
                                </h3>
                                {currentChild.reports.map((report) => (
                                    <motion.div
                                        key={report.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500">
                                                    {report.tutor.charAt(0)}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900">{report.subject}</h4>
                                                    <p className="text-sm text-slate-500">{report.tutor} • {report.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={16} className={i < report.rating ? "text-amber-400 fill-amber-400" : "text-slate-200"} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-xl text-slate-700 italic border border-slate-100/50">
                                            "{report.content}"
                                        </div>
                                        <div className="mt-4 flex gap-3">
                                            <Button size="sm" variant="outline" onClick={() => setActiveTab('messages')}>Contacter le prof</Button>
                                            <Button size="sm" variant="ghost">Voir détails</Button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Quick Suggestions */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                    <TrendingUp className="text-amber-500" />
                                    Recommandations
                                </h3>

                                {/* Premium Upsell */}
                                <Card className="border-2 border-emerald-500 shadow-xl shadow-emerald-500/20 bg-gradient-to-br from-emerald-500 to-teal-600 text-white overflow-hidden relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-8 -mt-8" />
                                    <div className="p-6 relative">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Crown size={24} className="text-amber-300" />
                                            <Badge className="bg-amber-400 text-amber-900 border-0 text-xs">Nouveau</Badge>
                                        </div>
                                        <h4 className="font-bold text-xl mb-2">Parent Excellence</h4>
                                        <p className="text-emerald-100 text-sm mb-4 leading-relaxed">Accédez aux rapports détaillés et au suivi renforcé pour optimiser la réussite de vos enfants.</p>
                                        <Button
                                            onClick={() => navigate('/parent/premium')}
                                            className="w-full bg-amber-400 text-amber-900 hover:bg-amber-500 border-0 font-bold"
                                        >
                                            Découvrir Premium <ChevronRight size={16} className="ml-1" />
                                        </Button>
                                    </div>
                                </Card>

                                <Card className="border-0 shadow-lg ring-1 ring-slate-100 bg-white">
                                    <div className="p-6 space-y-4">
                                        <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                                            <h4 className="font-bold text-red-700 mb-1">Moyenne en baisse</h4>
                                            <p className="text-sm text-red-600/80 mb-3">La moyenne de Maths de {currentChild.name} a baissé de 2 points.</p>
                                            <Button size="sm" className="w-full bg-red-600 hover:bg-red-700 text-white border-0" onClick={() => navigate('/student?tab=teachers')}>Trouver un prof de Maths</Button>
                                        </div>

                                        <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                                            <h4 className="font-bold text-indigo-700 mb-1">Préparez l'examen</h4>
                                            <p className="text-sm text-indigo-600/80 mb-3">Le Bac Blanc approche. Réservez une session de révision intensive.</p>
                                            <Button size="sm" variant="secondary" className="w-full" onClick={() => navigate('/parent/stages')}>Voir les stages</Button>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'wallet' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <Card className="max-w-4xl mx-auto border-0 shadow-lg ring-1 ring-slate-100 bg-white p-8">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 bg-emerald-100 text-emerald-600 rounded-full">
                                    <CreditCard size={32} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">Portefeuille Famille</h2>
                                    <p className="text-slate-500">Gérez vos moyens de paiement et factures.</p>
                                </div>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-8 flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-slate-500 font-bold uppercase mb-1">Solde Total</p>
                                    <p className="text-4xl font-bold text-slate-900">75.000 F CFA</p>
                                </div>
                                <Button className="bg-slate-900 text-white">Recharger le compte</Button>
                            </div>

                            <h3 className="font-bold text-lg mb-4">Historique des transactions</h3>
                            <div className="space-y-4">
                                {[
                                    { date: "24 Oct", desc: "Cours de Maths (Marc)", amount: "-5.000 F" },
                                    { date: "22 Oct", desc: "Rechargement CB", amount: "+50.000 F", color: "text-green-600" },
                                    { date: "20 Oct", desc: "Cours d'Anglais (Sophie)", amount: "-3.500 F" },
                                ].map((t, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                                        <div>
                                            <p className="font-bold text-slate-900">{t.desc}</p>
                                            <p className="text-xs text-slate-400">{t.date}</p>
                                        </div>
                                        <p className={`font-bold ${t.color || "text-slate-900"}`}>{t.amount}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                )}

                {activeTab === 'messages' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <Card className="h-[calc(100vh-240px)] border-0 shadow-lg ring-1 ring-slate-100 overflow-hidden flex">
                            {/* Conversations List */}
                            <div className="w-80 border-r border-slate-100 bg-slate-50/50 flex flex-col hidden md:flex">
                                <div className="p-4 border-b border-slate-100">
                                    <h3 className="font-bold text-slate-900 mb-4">Messages</h3>
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                        <input className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-emerald-500" placeholder="Rechercher..." />
                                    </div>
                                </div>
                                <div className="flex-grow overflow-y-auto p-2 space-y-1">
                                    {[
                                        { name: "Dr. Sarah Koné", role: "Prof de Maths (Marc)", msg: "Marc progresse bien sur les dérivées...", time: "10:30", active: true },
                                        { name: "Mme. Dubois", role: "Prof d'Anglais (Sophie)", msg: "Session confirmée pour mercredi.", time: "Hier", active: false },
                                        { name: "M. Traoré", role: "Prof de Physique (Marc)", msg: "Le TP s'est très bien passé.", time: "Mar", active: false },
                                    ].map((chat, i) => (
                                        <div key={i} className={`p-3 rounded-xl flex items-center gap-3 cursor-pointer transition-colors ${chat.active ? 'bg-white shadow-sm border border-slate-100' : 'hover:bg-slate-100'}`}>
                                            <div className="relative">
                                                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-sm">
                                                    {chat.name.charAt(0)}
                                                </div>
                                                {i === 0 && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />}
                                            </div>
                                            <div className="flex-grow overflow-hidden">
                                                <div className="flex justify-between items-baseline mb-0.5">
                                                    <span className={`text-sm font-bold ${chat.active ? 'text-slate-900' : 'text-slate-700'}`}>{chat.name}</span>
                                                    <span className="text-xs text-slate-400">{chat.time}</span>
                                                </div>
                                                <p className="text-xs text-slate-400">{chat.role}</p>
                                                <p className="text-xs text-slate-500 truncate">{chat.msg}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Chat Window */}
                            <div className="flex-grow flex flex-col bg-white">
                                <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">D</div>
                                        <div>
                                            <div className="font-bold text-slate-900">Dr. Sarah Koné</div>
                                            <div className="text-xs text-slate-500">Professeur de Maths • Marc</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-grow p-6 overflow-y-auto space-y-6 bg-slate-50/30">
                                    <div className="flex justify-center"><span className="bg-slate-100 text-slate-500 text-xs px-3 py-1 rounded-full">Aujourd'hui</span></div>

                                    <div className="flex gap-4 max-w-[80%]">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 mt-1" />
                                        <div>
                                            <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm text-slate-700">
                                                Bonjour ! Marc progresse bien sur les dérivées. Il a réussi 8/10 exercices aujourd'hui. Je recommande de réviser les limites cette semaine.
                                            </div>
                                            <span className="text-xs text-slate-400 mt-1 block">10:30 par Dr. Sarah Koné</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 max-w-[80%] ml-auto flex-row-reverse">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">P</div>
                                        <div>
                                            <div className="bg-emerald-500 text-white p-4 rounded-2xl rounded-tr-none shadow-md shadow-emerald-500/20">
                                                Merci beaucoup pour le retour ! Pouvez-vous m'envoyer des exercices supplémentaires sur les limites ?
                                            </div>
                                            <span className="text-xs text-slate-400 mt-1 block text-right">10:35 par Vous</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 max-w-[80%]">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 mt-1" />
                                        <div>
                                            <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm text-slate-700">
                                                Bien sûr ! Je vais lui préparer une fiche d'exercices pour la prochaine séance. 📚
                                            </div>
                                            <span className="text-xs text-slate-400 mt-1 block">10:37 par Dr. Sarah Koné</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-white border-t border-slate-100">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Écrivez votre message..."
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-12 py-3 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                                        />
                                        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                                            <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                )}
            </main>
        </div>
    );
};
