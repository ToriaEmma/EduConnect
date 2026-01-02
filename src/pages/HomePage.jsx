import { useNavigate } from 'react-router-dom';
import {
    School,
    CheckCircle,
    Gamepad2,
    Users,
    UserCheck,
    Trophy,
    BookOpen,
    GraduationCap,
    Building2,
    TrendingUp,
    Target,
    Zap,
    Mail,
    ArrowRight,
    Facebook,
    Twitter,
    Linkedin,
    Instagram
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const HomePage = () => {
    const navigate = useNavigate();

    const steps = [
        { title: "Inscription", desc: "Créez votre profil selon votre rôle (Élève, Parent, Prof, École).", icon: <UserCheck className="text-blue-600" /> },
        { title: "Création du profil", desc: "Complétez vos informations et préférences.", icon: <GraduationCap className="text-teal-600" /> },
        { title: "Mise en relation", desc: "Trouvez le partenaire idéal grâce à nos scores de compétences réels.", icon: <Users className="text-teal-600" /> },
        { title: "Suivi & Progression", desc: "Suivez les progrès en temps réel et validez les acquis.", icon: <Trophy className="text-amber-600" /> },
    ];

    const targetAudiences = [
        {
            title: "Élèves & Parents",
            icon: <BookOpen className="w-8 h-8 text-white" />,
            image: "https://images.unsplash.com/photo-1427504746696-ea5abd7dfe5b?auto=format&fit=crop&q=80&w=800",
            benefits: [
                "Soutien scolaire personnalisé",
                "Suivi de la progression académique",
                "Communication simplifiée"
            ],
            color: "indigo"
        },
        {
            title: "Enseignants & Répétiteurs",
            icon: <GraduationCap className="w-8 h-8 text-white" />,
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
            benefits: [
                "Mise en valeur des compétences",
                "Validation par jeux pédagogiques",
                "Opportunités d'enseignement"
            ],
            color: "teal"
        },
        {
            title: "Écoles",
            icon: <Building2 className="w-8 h-8 text-white" />,
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
            benefits: [
                "Recrutement facilité",
                "Gestion des besoins pédagogiques",
                "Suivi et rapports détaillés"
            ],
            color: "slate"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bg-indigo-600 p-2 rounded-lg">
                            <School className="text-white w-6 h-6" />
                        </div>
                        <span className="text-2xl font-bold text-slate-900 tracking-tight">EduConnect</span>
                    </div>
                    <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
                        <a href="#home" className="hover:text-indigo-600 transition-colors">Accueil</a>
                        <a href="#about" className="hover:text-indigo-600 transition-colors">Élèves & Parents</a>
                        <a href="#teachers" className="hover:text-indigo-600 transition-colors">Enseignants / Répétiteurs</a>
                        <a href="#schools" className="hover:text-indigo-600 transition-colors">Écoles</a>
                        <a href="#how" className="hover:text-indigo-600 transition-colors">Comment ça marche</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="ghost">Se connecter</Button>
                        <Button onClick={() => navigate('/student')}>S'inscrire</Button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header id="home" className="relative py-16 lg:py-24 overflow-hidden bg-slate-50">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 flex items-center">
                    <img
                        src="/hero-bg.png"
                        alt="Background"
                        className="h-[85%] w-auto object-contain -ml-12"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge color="blue">Validation par la compétence</Badge>
                        <h1 className="mt-6 text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                            EduConnect, la plateforme qui <span className="text-indigo-600">connecte</span> l'éducation par la compétence
                        </h1>
                        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                            Trouvez des enseignants et répétiteurs qualifiés, suivez la progression des élèves et validez les compétences par des outils pédagogiques innovants.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 justify-center">
                            <Button onClick={() => navigate('/student')} className="h-10 px-5 text-base">
                                Je suis parent / élève
                            </Button>
                            <Button onClick={() => navigate('/teacher/sample')} variant="secondary" className="h-10 px-5 text-base">
                                Je suis enseignant / répétiteur
                            </Button>
                            <Button onClick={() => navigate('/school')} variant="school" className="h-10 px-5 text-base">
                                Je suis une école
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* À qui s'adresse EduConnect */}
            <section id="about" className="pt-32 pb-10 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 relative">
                        <img
                            src="/about-decoration.png"
                            alt=""
                            className="absolute top-1/2 left-[60%] -translate-y-1/2 w-64 md:w-[600px] opacity-90 hidden lg:block"
                        />
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight relative z-10">À qui s'adresse EduConnect ?</h2>
                        <p className="text-slate-500 mt-6 text-xl max-w-2xl mx-auto relative z-10">Une plateforme pensée pour chaque acteur de l'éducation, avec des outils adaptés à vos besoins.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
                        {targetAudiences.map((audience, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:border-slate-300 hover:bg-slate-100 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-slate-700">
                                        {audience.title.includes("Élèves") && <BookOpen size={28} />}
                                        {audience.title.includes("Enseignants") && <GraduationCap size={28} />}
                                        {audience.title.includes("Écoles") && <Building2 size={28} />}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{audience.title}</h3>
                                <ul className="space-y-3">
                                    {audience.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600">
                                            <div className="mt-1 p-0.5 rounded-full bg-slate-200">
                                                <CheckCircle className="w-3.5 h-3.5 text-slate-600" />
                                            </div>
                                            <span className="font-medium text-sm">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comment ça marche */}
            <section id="how" className="pt-0 pb-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <img src="/how-it-works-decoration.png" alt="" className="mx-auto w-64 md:w-[500px] mb-0 -mt-10 relative z-10" />
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">Comment ça marche ?</h2>
                        <p className="text-slate-500 mt-6 text-xl">Un parcours simplifié vers la réussite</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-1 bg-slate-100 -z-0" />

                        {steps.map((step, idx) => (
                            <div key={idx} className="relative text-center group">
                                <div className="relative z-10 bg-white border-4 border-slate-50 shadow-xl w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:border-indigo-100 group-hover:scale-110 transition-all duration-300">
                                    {step.icon}
                                </div>
                                <div className="bg-indigo-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mx-auto -mt-12 mb-6 border-4 border-white relative z-20 shadow-md">
                                    {idx + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                                <p className="text-slate-500 leading-relaxed px-4">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Élément différenciateur clé - Bento Grid Revolution */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <img src="/key-differentiator-decoration.png" alt="" className="mx-auto w-32 md:w-48 mb-6" />
                        <Badge color="slate" className="bg-white text-slate-700 border border-slate-200 px-4 py-1.5 text-sm shadow-sm mb-8">Notre différence</Badge>
                        <h2 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight text-slate-900 text-balance">
                            La compétence <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">prouvée</span>,<br /> plus seulement déclarée.
                        </h2>
                        <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed text-balance">
                            Fini le déclaratif. EduConnect utilise le <span className="font-bold text-slate-900">jeu</span> comme standard de validation, garantissant une <span className="font-bold text-slate-900">transparence absolue</span> sur les compétences réelles.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[minmax(200px,auto)]">
                        {/* Hero Card - Validation par le jeu */}
                        <div className="lg:col-span-2 lg:row-span-2 bg-white rounded-[2.5rem] p-10 lg:p-14 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-500">
                                        <Gamepad2 className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">Validation par le jeu</h3>
                                    <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                                        Les enseignants démontrent leurs compétences à travers des jeux et défis pédagogiques standardisés.
                                    </p>
                                </div>
                                <div className="mt-10 flex items-center gap-4 text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                    <span>Découvrir la méthode</span>
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - Preuves concrètes */}
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors duration-300">
                                <Zap className="w-7 h-7 text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Preuves concrètes</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Les parents et les écoles accèdent à des preuves concrètes de compétences, au-delà des simples CV.
                            </p>
                        </div>

                        {/* Card 3 - Décisions rapides */}
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors duration-300">
                                <TrendingUp className="w-7 h-7 text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">Décisions rapides</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Les décisions de recrutement et de choix sont plus rapides, plus objectives et basées sur la data.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Focus Enseignants - Minimalist Luxury */}
            <section id="teachers" className="py-40 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-24">
                        <div className="lg:w-1/2 z-10">
                            <Badge className="bg-slate-100 text-slate-900 border-none px-4 py-2 mb-8 text-sm font-medium tracking-wide">POUR LES ENSEIGNANTS</Badge>
                            <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight text-balance">
                                Votre talent mérite d'être <span className="italic font-serif">reconnu</span>.
                            </h2>
                            <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-lg">
                                Une plateforme qui valorise vos compétences réelles. Pas juste vos diplômes.
                            </p>

                            <div className="space-y-8 mb-12">
                                {[
                                    { title: "Valorisation", desc: "Vos compétences mises en avant par la data." },
                                    { title: "Visibilité", desc: "Accédez aux meilleures opportunités." },
                                    { title: "Liberté", desc: "Gérez votre emploi du temps et vos tarifs." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-colors duration-300">
                                            <span className="text-slate-400 group-hover:text-white font-serif italic text-lg">{i + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button onClick={() => navigate('/teacher/sample')} className="h-16 px-10 bg-slate-900 text-white rounded-full text-lg hover:bg-slate-800 transition-all hover:scale-105 shadow-2xl shadow-slate-200">
                                Créer mon profil
                            </Button>
                        </div>

                        <div className="lg:w-1/2 relative w-full">
                            {/* Abstract Composition */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-slate-50 rounded-full blur-3xl -z-10 opacity-50"></div>

                            <div className="relative">
                                {/* Main Card */}
                                <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 relative z-20 max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-16 h-16 bg-slate-100 rounded-full overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" alt="Profile" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl text-slate-900">Sarah M.</h4>
                                            <p className="text-slate-500">Professeur de Mathématiques</p>
                                        </div>
                                        <Badge className="ml-auto bg-slate-900 text-white border-none">Certifiée</Badge>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                                            <span className="font-medium text-slate-700">Pédagogie</span>
                                            <span className="font-bold text-slate-900">98%</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                                            <span className="font-medium text-slate-700">Patience</span>
                                            <span className="font-bold text-slate-900">95%</span>
                                        </div>
                                        <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                                            <span className="font-medium text-slate-700">Clarté</span>
                                            <span className="font-bold text-slate-900">99%</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <div className="h-2 flex-1 bg-slate-900 rounded-full"></div>
                                        <div className="h-2 flex-1 bg-slate-200 rounded-full"></div>
                                        <div className="h-2 flex-1 bg-slate-200 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -right-8 top-20 bg-slate-900 text-white p-6 rounded-3xl shadow-xl z-30 max-w-[200px] hidden lg:block animate-bounce-slow">
                                    <div className="flex gap-2 mb-2">
                                        {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-2 h-2 rounded-full bg-white"></div>)}
                                    </div>
                                    <p className="font-medium text-sm">"Une approche révolutionnaire de l'enseignement."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Focus Écoles - Corporate Premium */}
            <section id="schools" className="py-40 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-24">
                        <div className="lg:w-1/2">
                            <Badge className="bg-white text-slate-900 border border-slate-200 px-4 py-2 mb-8 text-sm font-medium tracking-wide">POUR LES ÉTABLISSEMENTS</Badge>
                            <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight text-balance">
                                Le recrutement <br /><span className="text-slate-400">réinventé</span>.
                            </h2>
                            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                                Une suite d'outils puissants pour identifier, évaluer et recruter les meilleurs talents pédagogiques.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-12">
                                <div>
                                    <h4 className="text-4xl font-bold text-slate-900 mb-2">3x</h4>
                                    <p className="text-slate-500">Plus rapide pour qualifier un candidat</p>
                                </div>
                                <div>
                                    <h4 className="text-4xl font-bold text-slate-900 mb-2">100%</h4>
                                    <p className="text-slate-500">Fiabilité des compétences validées</p>
                                </div>
                            </div>

                            <Button onClick={() => navigate('/school')} variant="outline" className="h-16 px-10 bg-white text-slate-900 border border-slate-200 rounded-full text-lg hover:bg-slate-50 hover:border-slate-300 transition-all">
                                Solutions Écoles
                            </Button>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.03] rounded-full blur-3xl -mr-16 -mt-16"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-12">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                                <Building2 className="text-white w-5 h-5" />
                                            </div>
                                            <span className="font-medium tracking-wide text-white/80">DASHBOARD</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                            <div className="w-3 h-3 rounded-full bg-amber-500/20"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                            <p className="text-slate-400 text-xs font-bold uppercase mb-2 tracking-wider">Candidats</p>
                                            <p className="text-4xl font-bold text-white">128</p>
                                        </div>
                                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                                            <p className="text-slate-400 text-xs font-bold uppercase mb-2 tracking-wider">Entretiens</p>
                                            <p className="text-4xl font-bold text-white">12</p>
                                        </div>
                                    </div>

                                    <div className="bg-white text-slate-900 p-6 rounded-2xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                                                    <UserCheck className="w-5 h-5 text-slate-900" />
                                                </div>
                                                <div>
                                                    <p className="font-bold">Nouveau Match</p>
                                                    <p className="text-xs text-slate-500">Il y a 2 min</p>
                                                </div>
                                            </div>
                                            <Badge className="bg-slate-900 text-white text-[10px]">98% MATCH</Badge>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-slate-900 w-[98%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Appel à l'action final - The Portal */}
            <section className="py-32 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-6xl lg:text-8xl font-bold text-white mb-12 tracking-tighter leading-none">
                        Prêt à changer <br /> la donne ?
                    </h2>
                    <p className="text-2xl text-slate-400 mb-16 font-light max-w-2xl mx-auto">
                        Rejoignez l'élite de l'éducation. Commencez votre voyage aujourd'hui.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Button
                            onClick={() => navigate('/student')}
                            className="h-20 px-12 text-xl bg-white text-slate-900 rounded-full hover:bg-slate-100 transition-all hover:scale-105 font-bold"
                        >
                            Commencer maintenant
                        </Button>
                        <Button
                            variant="outline"
                            className="h-20 px-12 text-xl border border-slate-700 text-white rounded-full hover:bg-slate-800 transition-all font-medium"
                        >
                            En savoir plus
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer - Architectural Grid */}
            <footer className="bg-white text-slate-900 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                        {/* Brand */}
                        <div className="md:col-span-4">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="bg-slate-900 p-2.5 rounded-xl">
                                    <School className="text-white w-6 h-6" />
                                </div>
                                <span className="text-2xl font-bold tracking-tight">EduConnect</span>
                            </div>
                            <p className="text-slate-500 leading-relaxed text-lg mb-8">
                                La première plateforme qui connecte l'éducation par la preuve de compétence.
                            </p>
                            <div className="flex gap-4">
                                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 text-slate-400">
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links Grid */}
                        <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
                            <div>
                                <h4 className="font-bold text-lg mb-8">Plateforme</h4>
                                <ul className="space-y-4 text-slate-500">
                                    <li><a href="#home" className="hover:text-slate-900 transition-colors">Accueil</a></li>
                                    <li><a href="#teachers" className="hover:text-slate-900 transition-colors">Pour les enseignants</a></li>
                                    <li><a href="#schools" className="hover:text-slate-900 transition-colors">Pour les écoles</a></li>
                                    <li><a href="#how" className="hover:text-slate-900 transition-colors">Comment ça marche</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-8">Ressources</h4>
                                <ul className="space-y-4 text-slate-500">
                                    <li><a href="#" className="hover:text-slate-900 transition-colors">Blog</a></li>
                                    <li><a href="#" className="hover:text-slate-900 transition-colors">Guide des carrières</a></li>
                                    <li><a href="#" className="hover:text-slate-900 transition-colors">Support</a></li>
                                    <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-8">Légal</h4>
                                <ul className="space-y-4 text-slate-500">
                                    <li><a href="#" className="hover:text-slate-900 transition-colors">Confidentialité</a></li>
                                    <li><a href="#" className="hover:text-slate-900 transition-colors">Conditions</a></li>
                                    <li><a href="#" className="hover:text-slate-900 transition-colors">Cookies</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
                        <p>© 2025 EduConnect. Tous droits réservés.</p>
                        <p>Fait avec passion pour l'éducation.</p>
                    </div>
                </div>
            </footer>
        </div >
    );
};
