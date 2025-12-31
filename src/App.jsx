import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Users,
  School,
  CheckCircle,
  Gamepad2,
  MessageSquare,
  Calendar,
  LineChart,
  Search,
  PlusCircle,
  Bell,
  LogOut,
  Menu,
  X,
  Star,
  Clock,
  MapPin,
  Briefcase,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  FileText,
  CreditCard,
  Settings,
  ArrowRight,
  UserCheck,
  Trophy,
  Filter
} from 'lucide-react';

// --- Composants de Base ---

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm active:scale-95',
    secondary: 'bg-teal-500 text-white hover:bg-teal-600 shadow-sm active:scale-95',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 active:scale-95',
    ghost: 'text-gray-600 hover:bg-gray-100',
    school: 'bg-slate-800 text-white hover:bg-slate-900 active:scale-95'
  };
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-slate-100 p-6 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, color = 'blue' }) => {
  const colors = {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    purple: 'bg-purple-100 text-purple-700',
    amber: 'bg-amber-100 text-amber-700',
    red: 'bg-red-100 text-red-700'
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors[color]}`}>
      {children}
    </span>
  );
};

// --- Sous-Vues pour les Espaces ---

const TeacherCard = ({ teacher, onSelect }) => (
  <Card className="hover:border-indigo-300 transition-all group cursor-pointer" onClick={onSelect}>
    <div className="flex gap-4">
      <img src={teacher.img} className="w-16 h-16 rounded-xl object-cover" alt={teacher.name} />
      <div className="flex-grow">
        <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{teacher.name}</h4>
        <p className="text-xs text-slate-500">{teacher.role}</p>
        <div className="flex items-center gap-1 mt-1">
          <Star size={14} className="text-amber-400 fill-current" />
          <span className="text-sm font-bold">{teacher.rating}</span>
          <span className="text-xs text-slate-400">({teacher.reviews} avis)</span>
        </div>
      </div>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {teacher.subjects.map(s => <Badge key={s} color="blue">{s}</Badge>)}
    </div>
    <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center text-sm">
      <span className="text-slate-600 font-medium">{teacher.price} / h</span>
      <button className="text-indigo-600 font-bold flex items-center gap-1">
        Voir profil <ChevronRight size={16} />
      </button>
    </div>
  </Card>
);

// --- Vues Principales ---

const HomePage = ({ onNavigate }) => {
  const steps = [
    { title: "Inscription", desc: "Créez votre profil selon votre rôle (Élève, Parent, Prof, École).", icon: <UserCheck className="text-blue-600" /> },
    { title: "Validation", desc: "Les enseignants valident leurs compétences via nos jeux pédagogiques.", icon: <Gamepad2 className="text-purple-600" /> },
    { title: "Mise en relation", desc: "Trouvez le partenaire idéal grâce à nos scores de compétences réels.", icon: <Users className="text-teal-600" /> },
    { title: "Suivi & Réussite", desc: "Suivez les progrès en temps réel et validez les acquis.", icon: <Trophy className="text-amber-600" /> },
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
            <a href="#home" className="hover:text-indigo-600">Accueil</a>
            <a href="#about" className="hover:text-indigo-600">Élèves & Parents</a>
            <a href="#teachers" className="hover:text-indigo-600">Enseignants</a>
            <a href="#schools" className="hover:text-indigo-600">Écoles</a>
            <a href="#how" className="hover:text-indigo-600">Comment ça marche</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost">Connexion</Button>
            <Button onClick={() => onNavigate('student')}>S'inscrire</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 lg:py-32 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge color="blue">Validation par la compétence</Badge>
            <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
              EduConnect, la plateforme qui <span className="text-indigo-600">connecte</span> l'éducation
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Trouvez des enseignants qualifiés, suivez la progression réelle des élèves et validez les acquis par des outils pédagogiques innovants.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button onClick={() => onNavigate('student')} className="h-14 px-8 text-lg">Je suis parent / élève</Button>
              <Button onClick={() => onNavigate('teacher')} variant="secondary" className="h-14 px-8 text-lg">Je suis enseignant</Button>
              <Button onClick={() => onNavigate('school')} variant="school" className="h-14 px-8 text-lg">Je suis une école</Button>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-indigo-100/50 rounded-l-full -z-0 hidden lg:block" />
      </header>

      {/* Comment ça marche */}
      <section id="how" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Comment ça marche ?</h2>
            <p className="text-slate-500 mt-4">Une méthode simple, transparente et basée sur la preuve.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative text-center group">
                {idx < 3 && <div className="hidden md:block absolute top-10 left-full w-full h-[2px] bg-slate-100 z-0" />}
                <div className="relative z-10 bg-white border border-slate-100 shadow-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-indigo-500 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Sections */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <Badge color="purple">Focus Enseignants</Badge>
              <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight">Valorisez votre talent par des scores réels</h2>
              <p className="text-slate-600 text-lg mb-8 italic">"Les diplômes disent ce que vous avez étudié, nos jeux disent ce que vous savez faire."</p>
              <ul className="space-y-4">
                {["Profil certifié par le jeu", "Badges de compétences visibles", "Gestion des tarifs et planning", "Accès aux offres des meilleures écoles"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle className="text-green-500" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <Card className="p-0 overflow-hidden border-indigo-200 border-2">
                <div className="bg-indigo-600 p-6 text-white">
                  <h4 className="font-bold">Aperçu Scoring Jeu</h4>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Didactique des Maths</span>
                    <span className="text-indigo-600 font-bold">92%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full w-[92%]" />
                  </div>
                  <div className="flex gap-2">
                    <Badge color="purple">Expert</Badge>
                    <Badge color="green">Top 10</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <School className="text-indigo-400 w-6 h-6" />
            <span className="text-xl font-bold text-white">EduConnect</span>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white">À propos</a>
            <a href="#" className="hover:text-white">Conditions</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
          <p className="text-sm">© 2025 EduConnect. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

const StudentDashboard = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const teachers = [
    { name: "Dr. Sarah Koné", role: "Enseignante Mathématiques", rating: 4.9, reviews: 124, subjects: ["Algèbre", "Géométrie"], price: "15.000 F", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&h=100&fit=crop" },
    { name: "M. Marc Traoré", role: "Répétiteur Physique", rating: 4.7, reviews: 89, subjects: ["Physique", "Chimie"], price: "12.000 F", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
    { name: "Mme. Elise Diallo", role: "Étudiante Master Anglais", rating: 4.5, reviews: 34, subjects: ["Anglais", "Oral"], price: "8.000 F", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col">
        <div className="p-6 flex items-center gap-2 border-b border-slate-100">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <School className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-slate-900">EduConnect</span>
        </div>
        <nav className="p-4 space-y-2 flex-grow">
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'overview' ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50 font-medium'}`}
          >
            <LineChart size={20} /> Tableau de bord
          </button>
          <button
            onClick={() => setActiveTab('teachers')}
            className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'teachers' ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-600 hover:bg-slate-50 font-medium'}`}
          >
            <Search size={20} /> Trouver un répétiteur
          </button>
          <div className="text-slate-600 hover:bg-slate-50 px-4 py-3 rounded-xl flex items-center gap-3 transition-colors cursor-pointer font-medium">
            <BookOpen size={20} /> Mes Matières
          </div>
          <div className="text-slate-600 hover:bg-slate-50 px-4 py-3 rounded-xl flex items-center gap-3 transition-colors cursor-pointer font-medium">
            <MessageSquare size={20} /> Messagerie
          </div>
        </nav>
        <div className="p-4 border-t border-slate-100">
          <Button variant="ghost" className="w-full justify-start text-red-600 hover:bg-red-50" onClick={() => onNavigate('home')}>
            <LogOut size={20} /> Déconnexion
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4 lg:p-10 max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              {activeTab === 'overview' ? 'Bonjour, Marc ! 👋' : 'Trouvez votre répétiteur'}
            </h2>
            <p className="text-slate-500 mt-1">
              {activeTab === 'overview' ? 'Élève en Terminale S - Lycée Jean Rostand' : 'Parcourez les profils certifiés par EduConnect'}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-600">
              <Bell size={24} />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full" />
            </button>
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold border-2 border-white shadow-sm">MA</div>
          </div>
        </header>

        {activeTab === 'overview' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2"><MessageSquare className="text-indigo-600" /> Q&A Scolaire</h3>
                <Badge color="green">Gratuit</Badge>
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Posez votre question (ex: Comment factoriser un polynôme ?)"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 pr-12 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-lg"><Search size={20} /></button>
              </div>
              <div className="p-4 border border-indigo-100 bg-indigo-50/30 rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Mathématiques</span>
                  <span className="text-xs text-slate-500">Il y a 2h</span>
                </div>
                <p className="font-semibold text-slate-800">C'est quoi la différence entre mitose et méiose ?</p>
                <div className="mt-3 flex items-center gap-2 text-sm text-teal-600 font-medium">
                  <CheckCircle size={16} /> Réponse disponible
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><FileText className="text-amber-600" /> Mes devoirs</h3>
              <div className="space-y-3">
                {["Exercice de Math", "Révision Anglais", "Lecture suivie"].map((task, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer">
                    <div className={`w-6 h-6 rounded-md border-2 ${i === 1 ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300'}`} />
                    <span className={i === 1 ? 'line-through text-slate-400' : 'text-slate-700 font-medium'}>{task}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Calendar className="text-purple-600" /> Prochaines séances</h3>
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                <p className="text-amber-800 font-medium text-sm">Vous n'avez pas de répétiteur actif.</p>
                <button onClick={() => setActiveTab('teachers')} className="mt-2 text-amber-900 font-bold flex items-center gap-1 text-sm">Trouver un répétiteur <ArrowRight size={14} /></button>
              </div>
            </Card>

            <Card className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><TrendingUp className="text-teal-600" /> Progrès globaux</h3>
              <div className="h-48 flex items-end justify-between gap-2 px-4">
                {[40, 70, 45, 90, 65, 80].map((h, i) => (
                  <div key={i} className="bg-indigo-100 w-full rounded-t-lg relative group transition-all" style={{ height: `${h}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Score: {h}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-xs text-slate-400 font-bold uppercase">
                <span>Jan</span><span>Fev</span><span>Mar</span><span>Avr</span><span>Mai</span><span>Juin</span>
              </div>
            </Card>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher par matière ou nom..."
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="px-6 h-[58px]">
                <Filter size={20} /> Filtres
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachers.map((t, idx) => (
                <TeacherCard key={idx} teacher={t} onSelect={() => onNavigate('teacher')} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const TeacherProfile = ({ onNavigate }) => {
  const reviews = [
    { name: "Famille Diop", date: "Il y a 2 semaines", text: "Dr. Sarah est très patiente. Mon fils a remonté sa moyenne de 4 points.", rating: 5 },
    { name: "Lycée Saint-Paul", date: "Il y a 1 mois", text: "Intervention brillante en classe de terminale.", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="h-48 bg-gradient-to-r from-indigo-600 to-indigo-800" />
      <div className="max-w-5xl mx-auto px-4 -mt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-1 space-y-6">
            <Card className="text-center overflow-visible pt-0">
              <div className="relative -mt-16 mb-4 inline-block">
                <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=400&fit=crop" className="w-32 h-32 rounded-3xl border-4 border-white shadow-xl object-cover mx-auto" alt="Teacher" />
                <div className="absolute bottom-1 right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Dr. Sarah Koné</h2>
              <p className="text-indigo-600 font-medium">Enseignante Expérimentée</p>
              <div className="mt-8 space-y-3">
                <Button className="w-full h-12">Recruter Sarah</Button>
                <Button variant="outline" className="w-full h-12">Inviter dans mon établissement</Button>
                <Button variant="ghost" className="w-full">Envoyer un message</Button>
              </div>
            </Card>

            <Card>
              <h4 className="font-bold text-slate-900 mb-4">Vérifications</h4>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500" /> Diplômes vérifiés</div>
                <div className="flex items-center gap-3"><ShieldCheck size={18} className="text-indigo-500" /> Identité certifiée</div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <Card>
              <h3 className="text-xl font-bold mb-4">Expérience & Vision</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Avec plus de 8 ans d'expérience dans l'enseignement public et privé, ma vision est de transformer l'apprentissage des mathématiques en une aventure logique et ludique. J'ai accompagné plus de 200 élèves vers la réussite au baccalauréat.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <span className="text-xs text-slate-400 font-bold uppercase">Primaire / Collège</span>
                  <p className="font-bold text-indigo-700">Maîtrise totale</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <span className="text-xs text-slate-400 font-bold uppercase">Lycée / Prépa</span>
                  <p className="font-bold text-indigo-700">Expertise avancée</p>
                </div>
              </div>
            </Card>

            <Card className="border-2 border-indigo-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2"><Gamepad2 className="text-indigo-600" /> Preuves de compétences</h3>
                <Badge color="green">Top 5% National</Badge>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold">Le Maître de l'Algèbre</h4>
                    <span className="text-indigo-700 font-black">986 pts</span>
                  </div>
                  <div className="w-full bg-white h-2 rounded-full overflow-hidden border border-indigo-100">
                    <div className="bg-indigo-600 h-full w-[98%]" />
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-6">Avis & Évaluations</h3>
              <div className="space-y-6">
                {reviews.map((rev, i) => (
                  <div key={i} className="border-b border-slate-50 last:border-0 pb-6 last:pb-0">
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-slate-900">{rev.name}</span>
                      <div className="flex text-amber-400">
                        {[...Array(rev.rating)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm italic">"{rev.text}"</p>
                    <span className="text-[10px] text-slate-400 font-medium uppercase mt-2 block">{rev.date}</span>
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

const SchoolSpace = ({ onNavigate }) => {
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-white p-1.5 rounded-lg"><School className="text-slate-900 w-5 h-5" /></div>
            <span className="text-xl font-bold">EduConnect <span className="text-indigo-400">École</span></span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-4 text-slate-400 text-sm">
              <button onClick={() => setActiveView('dashboard')} className={activeView === 'dashboard' ? 'text-white' : ''}>Tableau de bord</button>
              <button onClick={() => setActiveView('recruitment')} className={activeView === 'recruitment' ? 'text-white' : ''}>Recrutement</button>
              <span>Messagerie</span>
            </div>
            <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800" onClick={() => onNavigate('home')}>Retour</Button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold">Lycée International Excellence</h2>
            <p className="text-slate-400 mt-2">Gestion et recrutement d'enseignants certifiés</p>
          </div>
          <Button variant="primary" className="bg-indigo-500 hover:bg-indigo-600"><PlusCircle size={20} /> Nouvelle offre</Button>
        </div>

        {activeView === 'dashboard' ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-slate-800 border-slate-700 text-white">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Équipe active</p>
                <h3 className="text-3xl font-bold mt-2">24 Profs</h3>
                <div className="mt-4 flex -space-x-2">
                  {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-800 bg-slate-600" />)}
                </div>
              </Card>
              <Card className="bg-slate-800 border-slate-700 text-white">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Offres en cours</p>
                <h3 className="text-3xl font-bold mt-2">3</h3>
                <p className="text-indigo-400 text-xs mt-2 font-medium">12 candidatures à trier</p>
              </Card>
              <Card className="bg-slate-800 border-slate-700 text-white">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Taux de rétention</p>
                <h3 className="text-3xl font-bold mt-2">98%</h3>
              </Card>
              <Card className="bg-slate-800 border-slate-700 text-white">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Messagerie</p>
                <h3 className="text-3xl font-bold mt-2">5 Nouveaux</h3>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-slate-800 border-slate-700 text-white">
                <h3 className="text-xl font-bold mb-6">Derniers rapports pédagogiques</h3>
                <div className="space-y-4">
                  {[1, 2].map(i => (
                    <div key={i} className="p-4 bg-slate-900/50 rounded-xl border border-slate-700 flex justify-between items-center">
                      <div>
                        <p className="font-bold">Rapport Hebdomadaire - Term S</p>
                        <p className="text-xs text-slate-500">Par M. Traoré • Hier à 14:00</p>
                      </div>
                      <button className="text-indigo-400 hover:text-indigo-300"><ChevronRight /></button>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="bg-slate-800 border-slate-700 text-white">
                <h3 className="text-xl font-bold mb-6">Prochains paiements</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Total Prestations Mai</span>
                    <span className="font-bold text-xl">1.250.000 F</span>
                  </div>
                  <Button variant="primary" className="w-full bg-slate-700 hover:bg-slate-600 border-0">Gérer la facturation</Button>
                </div>
              </Card>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-xl font-bold">Candidatures reçues</h3>
              {[1, 2].map(i => (
                <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-indigo-900 rounded-2xl flex items-center justify-center font-bold text-2xl text-indigo-300">AS</div>
                    <div>
                      <h4 className="font-bold text-lg">Amadou Sylla</h4>
                      <p className="text-slate-400 text-sm">Professeur d'Espagnol • 5 ans d'exp.</p>
                      <div className="mt-2 flex gap-2"><Badge color="purple">Score Jeu: 89/100</Badge></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" className="text-slate-400">Décliner</Button>
                    <Button className="bg-indigo-600">Entretien</Button>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Card className="bg-slate-800 border-slate-700 text-white">
                <h3 className="font-bold mb-4">Mes Offres Actives</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-900 rounded-xl border-l-4 border-green-500">
                    <p className="font-bold">Professeur de SVT (Lycée)</p>
                    <p className="text-xs text-slate-500 mt-1">Publié il y a 3j • 8 vues</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

// --- Application Principale ---

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="font-sans antialiased text-slate-900">
      {currentView === 'home' && <HomePage onNavigate={setCurrentView} />}
      {currentView === 'student' && <StudentDashboard onNavigate={setCurrentView} />}
      {currentView === 'teacher' && <TeacherProfile onNavigate={setCurrentView} />}
      {currentView === 'school' && <SchoolSpace onNavigate={setCurrentView} />}

      {/* Navigation Flottante Prototype */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-lg border border-slate-200 shadow-2xl rounded-2xl px-2 py-2 flex gap-1 z-[100] md:scale-100 scale-90">
        <button onClick={() => setCurrentView('home')} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${currentView === 'home' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>Accueil</button>
        <button onClick={() => setCurrentView('student')} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${currentView === 'student' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>Élève</button>
        <button onClick={() => setCurrentView('teacher')} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${currentView === 'teacher' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>Profil Prof</button>
        <button onClick={() => setCurrentView('school')} className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${currentView === 'school' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>École</button>
      </div>
    </div>
  );
}
