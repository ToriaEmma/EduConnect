import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

export function Hero() {
    const navigate = useNavigate();
    return (
        <section className="relative pt-32 pb-32 lg:pb-48 overflow-hidden bg-slate-50 flex items-center min-h-[80vh]">
            {/* Background Image */}
            {/* Background Image */}
            <div className="absolute -top-20 right-[65%] h-full w-[35%] z-0 opacity-100 pointer-events-none">
                <img
                    src="/hero-bg.png"
                    alt="Background Pattern"
                    className="w-full h-full object-contain object-right-center"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-50/20 to-slate-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        La plateforme éducative nouvelle génération
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
                        EduConnect, la plateforme qui connecte l’éducation par la <span className="text-primary">compétence</span>.
                    </h1>

                    <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                        Trouvez des enseignants et répétiteurs qualifiés, suivez la progression des élèves et validez les compétences par des outils pédagogiques innovants.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 flex-wrap">
                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
                            onClick={() => navigate('/register?role=student')}
                        >
                            Je suis parent / élève
                        </Button>
                        <Button
                            size="lg"
                            className="bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/20"
                            onClick={() => navigate('/register?role=teacher')}
                        >
                            Je suis enseignant / répétiteur
                        </Button>
                        <Button
                            size="lg"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20"
                            onClick={() => navigate('/register?role=school')}
                        >
                            Je suis une école
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { icon: Users, label: "Étudiants Actifs", value: "10k+", color: "bg-blue-500" },
                            { icon: BookOpen, label: "Cours Disponibles", value: "500+", color: "bg-amber-500" },
                            { icon: Award, label: "Diplômes Délivrés", value: "98%", color: "bg-emerald-500" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                                className="glass p-6 rounded-2xl flex items-center justify-center gap-4 border border-white/50 shadow-lg"
                            >
                                <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10 text-${stat.color.split('-')[1]}-600`}>
                                    <stat.icon className="h-8 w-8" color="currentColor" />
                                </div>
                                <div className="text-left">
                                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                                    <div className="text-sm text-slate-500">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
