import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Gamepad2, CheckCircle, Trophy, Target, Users, BookOpen,
    Lightbulb, ArrowRight, Star, Shield, Brain
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { motion } from 'framer-motion';

export const MethodPage = () => {
    const navigate = useNavigate();

    const methodSteps = [
        {
            icon: Brain,
            title: "Évaluation par le Jeu",
            description: "Les enseignants démontrent leurs compétences à travers des jeux pédagogiques conçus par des experts.",
            color: "bg-purple-500"
        },
        {
            icon: Trophy,
            title: "Badges & Certifications",
            description: "Chaque compétence validée se traduit par un badge visible sur le profil de l'enseignant.",
            color: "bg-amber-500"
        },
        {
            icon: Shield,
            title: "Transparence Totale",
            description: "Parents et écoles accèdent à des preuves concrètes des compétences, pas seulement des déclarations.",
            color: "bg-emerald-500"
        },
        {
            icon: Target,
            title: "Mise en Relation Intelligente",
            description: "Notre algorithme connecte les besoins des élèves avec les compétences validées des enseignants.",
            color: "bg-blue-500"
        }
    ];

    const benefits = [
        { title: "Pour les Parents", items: ["Choix éclairé d'un enseignant", "Suivi des progrès en temps réel", "Communication facilitée"] },
        { title: "Pour les Enseignants", items: ["Valorisation des compétences", "Accès à plus d'opportunités", "Outils pédagogiques avancés"] },
        { title: "Pour les Écoles", items: ["Recrutement simplifié", "Profils vérifiés", "Gestion centralisée"] }
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 right-0 w-[40%] h-[80%] bg-indigo-500/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 mb-6">
                            <Gamepad2 size={14} className="mr-1" /> Innovation Pédagogique
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Méthode</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8">
                            La compétence prouvée, pas seulement déclarée. Découvrez comment EduConnect révolutionne
                            la validation des compétences pédagogiques grâce au jeu.
                        </p>
                        <Button size="lg" onClick={() => navigate('/register')}>
                            Rejoindre EduConnect <ArrowRight size={18} className="ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comment ça fonctionne ?</h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                            Une approche unique qui combine technologie et pédagogie pour garantir la qualité.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {methodSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative group"
                            >
                                <div className="bg-slate-50 rounded-3xl p-8 h-full border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300">
                                    <div className={`w-14 h-14 ${step.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <step.icon className={`w-7 h-7 ${step.color.replace('bg-', 'text-').replace('-500', '-600')}`} />
                                    </div>
                                    <div className="text-sm font-bold text-slate-400 mb-2">Étape {idx + 1}</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-600">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Game-Based Validation */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <Badge className="mb-4 bg-purple-100 text-purple-700">La gamification au service de l'éducation</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Pourquoi le jeu ?
                            </h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Les jeux pédagogiques permettent d'évaluer les compétences de manière objective et engageante.
                                Contrairement aux CV traditionnels, nos challenges mettent les enseignants en situation réelle.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Évaluation objective et standardisée",
                                    "Mesure des compétences en temps réel",
                                    "Résultats vérifiables et transparents",
                                    "Expérience engageante pour les enseignants"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                                        <Gamepad2 className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">Challenge Mathématiques</h3>
                                        <p className="text-slate-500">Niveau Avancé</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-600">Progression</span>
                                        <span className="font-bold text-slate-900">85%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-3">
                                        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-3 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 mt-6">
                                        <div className="text-center p-4 bg-slate-50 rounded-xl">
                                            <div className="text-2xl font-bold text-slate-900">12</div>
                                            <div className="text-xs text-slate-500">Défis réussis</div>
                                        </div>
                                        <div className="text-center p-4 bg-slate-50 rounded-xl">
                                            <div className="text-2xl font-bold text-amber-500">3</div>
                                            <div className="text-xs text-slate-500">Badges</div>
                                        </div>
                                        <div className="text-center p-4 bg-slate-50 rounded-xl">
                                            <div className="text-2xl font-bold text-emerald-500">A+</div>
                                            <div className="text-xs text-slate-500">Score</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Avantages pour tous</h2>
                        <p className="text-lg text-slate-500">Notre méthode profite à l'ensemble de l'écosystème éducatif.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-50 rounded-3xl p-8 border border-slate-100"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-6">{benefit.title}</h3>
                                <ul className="space-y-3">
                                    {benefit.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <Star className="w-4 h-4 text-amber-500" />
                                            <span className="text-slate-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Prêt à découvrir notre approche ?
                    </h2>
                    <p className="text-xl text-white/80 mb-8">
                        Rejoignez des milliers d'utilisateurs qui font confiance à notre méthode.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" variant="white" onClick={() => navigate('/register')}>
                            Créer un compte
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-white border-white hover:bg-white/10"
                            onClick={() => navigate('/contact')}
                        >
                            Nous contacter
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
