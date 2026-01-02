import { useNavigate } from 'react-router-dom';
import {
    Star, CheckCircle, ShieldCheck, Gamepad2, ArrowLeft, Mail, Calendar
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { motion } from 'framer-motion';

export const TeacherProfile = () => {
    const navigate = useNavigate();

    const reviews = [
        { name: "Famille Diop", date: "Il y a 2 semaines", text: "Dr. Sarah est très patiente. Mon fils a remonté sa moyenne de 4 points.", rating: 5 },
        { name: "Lycée Saint-Paul", date: "Il y a 1 mois", text: "Intervention brillante en classe de terminale.", rating: 5 }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans relative">
            <div className="h-64 bg-gradient-to-r from-primary to-blue-600 absolute top-0 w-full z-0" />

            <div className="max-w-6xl mx-auto px-4 relative z-10 pt-8 pb-20">
                <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white mb-6" onClick={() => navigate(-1)}>
                    <ArrowLeft className="mr-2" size={20} /> Retour
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Sidebar / Profile Card */}
                    <div className="lg:col-span-4 space-y-6">
                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                            <Card className="text-center overflow-visible pt-0 border-0 shadow-xl ring-1 ring-slate-100/50">
                                <div className="relative -mt-16 mb-4 inline-block">
                                    <div className="p-1.5 bg-white rounded-[2rem] shadow-sm">
                                        <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=400&fit=crop" className="w-36 h-36 rounded-[1.8rem] object-cover" alt="Teacher" />
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Dr. Sarah Koné</h2>
                                <p className="text-primary font-medium mb-1">Enseignante Expérimentée</p>
                                <div className="flex items-center justify-center gap-1 mb-6">
                                    <Star className="text-amber-400 fill-current" size={16} />
                                    <span className="font-bold text-slate-900">4.9</span>
                                    <span className="text-slate-400 text-sm">(124 avis)</span>
                                </div>

                                <div className="space-y-3">
                                    <Button className="w-full shadow-lg shadow-primary/20 bg-primary hover:bg-primary-dark">Recruter Sarah</Button>
                                    <Button variant="outline" className="w-full">Inviter (École)</Button>
                                    <Button variant="ghost" className="w-full text-slate-500 hover:text-slate-900">
                                        <Mail className="mr-2" size={18} /> Envoyer un message
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>

                        <Card className="border-0 shadow-lg ring-1 ring-slate-100">
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <ShieldCheck className="text-primary" size={20} />
                                Vérifications
                            </h4>
                            <div className="space-y-4 text-sm font-medium text-slate-600">
                                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                                    <span>Diplômes</span>
                                    <CheckCircle size={18} className="text-green-500" />
                                </div>
                                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                                    <span>Identité</span>
                                    <CheckCircle size={18} className="text-green-500" />
                                </div>
                                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                                    <span>Casier judiciaire</span>
                                    <CheckCircle size={18} className="text-green-500" />
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-8">
                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.5 }}>
                            <Card className="border-0 shadow-md ring-1 ring-slate-100">
                                <h3 className="text-xl font-bold mb-4 text-slate-900">À propos</h3>
                                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                                    Avec plus de 8 ans d'expérience dans l'enseignement public et privé, ma vision est de transformer l'apprentissage des mathématiques en une <span className="font-bold text-slate-900">aventure logique et ludique</span>. J'ai accompagné plus de 200 élèves vers la réussite au baccalauréat avec une approche personnalisée.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Spécialité 1</span>
                                        <p className="font-bold text-slate-900 text-lg mt-1">Mathématiques</p>
                                        <Badge color="green" className="mt-2">Expert</Badge>
                                    </div>
                                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                        <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Spécialité 2</span>
                                        <p className="font-bold text-slate-900 text-lg mt-1">Physique</p>
                                        <Badge color="blue" className="mt-2">Avancé</Badge>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
                            <Card className="border-2 border-primary/10 bg-gradient-to-br from-white to-primary/5 shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                                <div className="flex items-center justify-between mb-8 relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-white rounded-xl shadow-sm text-primary"><Gamepad2 size={24} /></div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Preuves de compétences</h3>
                                            <p className="text-slate-500 text-sm">Validé par EduConnect Arena</p>
                                        </div>
                                    </div>
                                    <Badge className="bg-primary text-white border-none text-sm px-3 py-1">Top 5% National</Badge>
                                </div>

                                <div className="space-y-6 relative z-10">
                                    <div className="p-5 bg-white rounded-2xl border border-primary/10 shadow-sm">
                                        <div className="flex justify-between items-center mb-3">
                                            <h4 className="font-bold text-slate-900">Le Maître de l'Algèbre</h4>
                                            <span className="text-primary font-black text-lg">986 pts</span>
                                        </div>
                                        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '98%' }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className="bg-primary h-full rounded-full"
                                            />
                                        </div>
                                        <p className="text-xs text-slate-400 mt-2 text-right">98% de réussite aux tests complexes</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        <Card className="border-0 shadow-md ring-1 ring-slate-100">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-slate-900">Avis & Évaluations</h3>
                                <Button variant="ghost" size="sm">Voir tout (124)</Button>
                            </div>
                            <div className="space-y-6">
                                {reviews.map((rev, i) => (
                                    <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-slate-400 text-sm border border-slate-200">
                                                    {rev.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <span className="font-bold text-slate-900 block">{rev.name}</span>
                                                    <span className="text-xs text-slate-400 font-medium uppercase">{rev.date}</span>
                                                </div>
                                            </div>
                                            <div className="flex text-amber-400 bg-white px-2 py-1 rounded-lg border border-slate-100">
                                                {[...Array(5)].map((_, j) => (
                                                    <Star key={j} size={14} fill={j < rev.rating ? "currentColor" : "none"} className={j < rev.rating ? "text-amber-400" : "text-amber-200"} />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-slate-600 text-base italic pl-14">"{rev.text}"</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
