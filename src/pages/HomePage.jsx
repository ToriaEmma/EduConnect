import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    School, CheckCircle, Gamepad2, Users, UserCheck, Trophy,
    BookOpen, GraduationCap, Building2, TrendingUp, Zap, ArrowRight
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { motion } from 'framer-motion';

export const HomePage = () => {
    const navigate = useNavigate();

    const sections = {
        audiences: [
            {
                title: "Élèves & Parents",
                icon: BookOpen,
                benefits: ["Soutien scolaire personnalisé", "Suivi de la progression académique", "Communication simplifiée avec les répétiteurs"],
                color: "bg-blue-500"
            },
            {
                title: "Enseignants & Répétiteurs",
                icon: GraduationCap,
                benefits: ["Mise en valeur des compétences réelles", "Validation par des jeux pédagogiques", "Accès à des opportunités d'enseignement"],
                color: "bg-amber-500"
            },
            {
                title: "Écoles",
                icon: Building2,
                benefits: ["Recrutement facilité d'enseignants qualifiés", "Gestion des besoins pédagogiques", "Suivi et rapports"],
                color: "bg-emerald-500"
            }
        ],
        steps: [
            { title: "Inscription", desc: "Inscription rapide sur la plateforme.", icon: UserCheck },
            { title: "Création du profil", desc: "Profil élève, enseignant ou école.", icon: Users },
            { title: "Mise en relation", desc: "Mise en relation intelligente.", icon: Zap },
            { title: "Suivi & Progression", desc: "Suivi, évaluation et progression.", icon: TrendingUp },
        ]
    };

    return (
        <Layout>
            <Hero />

            {/* Value Proposition */}
            <section id="features" className="py-24 bg-white relative overflow-hidden">
                {/* Decoration Image */}
                <div className="hidden lg:block absolute top-[20%] -right-[10%] w-[40%] h-[80%] opacity-100 pointer-events-none">
                    <img src="/about-decoration.png" alt="" className="w-full h-full object-contain" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <Badge color="primary" className="mb-4">Notre différence</Badge>
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">L'éducation réinventée pour tous</h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                            Une plateforme unique connectant tous les acteurs de la réussite éducative.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {sections.audiences.map((audience, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${audience.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <audience.icon className={`w-7 h-7 ${audience.color.replace('bg-', 'text-').replace('-500', '-600')}`} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{audience.title}</h3>
                                <ul className="space-y-3 relative z-10">
                                    {audience.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-600">
                                            <CheckCircle className="w-5 h-5 text-primary/60 flex-shrink-0" />
                                            <span className="text-sm font-medium">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiator Section */}
            <section className="py-32 bg-slate-50 overflow-hidden relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-5/12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-6">
                                <Gamepad2 size={16} />
                                Innovation Pédagogique
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                La compétence prouvée, pas seulement <span className="text-primary">déclarée</span>.
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                EduConnect se distingue par l’utilisation du jeu comme outil de validation des compétences. Les enseignants démontrent leurs compétences à travers des jeux et défis pédagogiques, offrant aux parents et écoles des preuves concrètes.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                                    <div className="text-3xl font-bold text-slate-900 mb-1">100%</div>
                                    <div className="text-sm text-slate-500 font-medium">Transparence</div>
                                </div>
                                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                                    <div className="text-3xl font-bold text-slate-900 mb-1">Validé</div>
                                    <div className="text-sm text-slate-500 font-medium">Par des experts</div>
                                </div>
                            </div>

                            <Button onClick={() => navigate('/teacher/sample')} className="gap-2">
                                Découvrir notre méthode <ArrowRight size={18} />
                            </Button>
                        </div>

                        <div className="lg:w-7/12 w-full relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <img
                                    src="/key-differentiator-decoration.png"
                                    alt="Innovation Pédagogique"
                                    className="w-full h-auto drop-shadow-2xl rounded-[2rem] hover:scale-[1.02] transition-transform duration-500"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="py-24 bg-white relative">
                {/* Decoration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-100 pointer-events-none overflow-hidden">
                    <img src="/how-it-works-decoration.png" alt="" className="absolute top-0 left-[-20%] w-[60%] h-auto object-contain -rotate-12" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Comment ça marche ?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

                        {sections.steps.map((step, idx) => (
                            <div key={idx} className="relative z-10 bg-white p-6 text-center group">
                                <div className="w-16 h-16 mx-auto bg-white border-2 border-slate-100 shadow-lg rounded-2xl flex items-center justify-center mb-6 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                                    <step.icon className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-slate-500 px-4">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Focus Enseignants */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pourquoi puis-je faire confiance à cet enseignant ?</h2>
                            <p className="text-slate-600 mb-8">
                                Sur EduConnect, la confiance est primordiale. Chaque profil est enrichi de données vérifiées :
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    { text: "Compétences enseignées validées par le jeu", icon: CheckCircle },
                                    { text: "Scores et badges visibles", icon: Trophy },
                                    { text: "Disponibilités en temps réel", icon: TrendingUp }, // Used trending up as placeholder for calendar/activity
                                    { text: "Avis et évaluations authentiques", icon: Users }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><item.icon size={20} /></div>
                                        <span className="font-medium text-slate-700">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button onClick={() => navigate('/teacher/sample')}>
                                Voir un profil enseignant
                            </Button>
                        </div>
                        <div className="lg:w-1/2">
                            {/* Teacher Profile Preview */}
                            <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 relative">
                                {/* Badge */}
                                <div className="absolute top-6 right-6 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                    <CheckCircle size={12} /> Vérifié
                                </div>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                        JD
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-slate-900">Jean Dupont</div>
                                        <div className="text-sm text-slate-500 font-medium">Mathématiques • 5 ans d'exp.</div>
                                        <div className="flex items-center gap-1 text-amber-500 mt-1">
                                            {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-4 h-4 fill-current"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg></div>)}
                                            <span className="text-slate-400 text-xs ml-1">(42 avis)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">Compétences validées</div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium">Algèbre Avancée 🏆</span>
                                            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-md text-xs font-medium">Géométrie 🥇</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="p-3 bg-slate-50 rounded-xl text-center">
                                            <div className="text-2xl font-bold text-slate-900">98%</div>
                                            <div className="text-xs text-slate-500">Taux de réussite</div>
                                        </div>
                                        <div className="p-3 bg-slate-50 rounded-xl text-center">
                                            <div className="text-2xl font-bold text-slate-900">1h</div>
                                            <div className="text-xs text-slate-500">Temps rép. moyen</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Focus Écoles */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Espace dédié aux établissements scolaires</h2>
                            <p className="text-slate-600 mb-8">
                                Optimisez votre gestion pédagogique avec nos outils dédiés aux écoles :
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {["Publication d'offres", "Gestion des candidatures", "Suivi des collaborations", "Messagerie intégrée", "Paiements et facturation"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <CheckCircle size={18} className="text-emerald-500" />
                                        <span className="text-sm font-medium text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20" onClick={() => navigate('/register?role=school')}>
                                Créer un compte école
                            </Button>
                        </div>
                        <div className="lg:w-1/2">
                            {/* School Dashboard Preview */}
                            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
                                {/* Decorative blur */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                            <School className="text-white" size={20} />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold">Lycée Saint-Exupéry</div>
                                            <div className="text-slate-400 text-xs">Tableau de bord</div>
                                        </div>
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <div className="text-slate-400 text-xs mb-1">Candidatures</div>
                                        <div className="text-2xl font-bold text-white mb-2">24</div>
                                        <div className="text-emerald-400 text-xs flex items-center gap-1">
                                            <TrendingUp size={12} /> +12% cette semaine
                                        </div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <div className="text-slate-400 text-xs mb-1">Postes Actifs</div>
                                        <div className="text-2xl font-bold text-white mb-2">3</div>
                                        <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                                            <div className="bg-emerald-500 h-full w-3/4"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                    <div className="text-slate-400 text-xs mb-3 uppercase tracking-wider">Candidats récents</div>
                                    <div className="space-y-3">
                                        {[
                                            { name: "Marie L.", subject: "Anglais", status: "En attente" },
                                            { name: "Thomas B.", subject: "Physique", status: "Validé" }
                                        ].map((c, i) => (
                                            <div key={i} className="flex items-center justify-between text-sm">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white font-bold">
                                                        {c.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="text-white font-medium">{c.name}</div>
                                                        <div className="text-slate-500 text-xs">{c.subject}</div>
                                                    </div>
                                                </div>
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${c.status === 'Validé' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-600 text-slate-300'}`}>
                                                    {c.status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative overflow-hidden bg-slate-900">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        Rejoignez EduConnect et transformez la manière dont l’éducation se connecte.
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            size="lg"
                            variant="white"
                            onClick={() => navigate('/register')}
                        >
                            S'inscrire gratuitement
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-white border-white hover:bg-white/10"
                            onClick={() => window.location.href = 'mailto:contact@educonnect.com'}
                        >
                            Nous contacter
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
