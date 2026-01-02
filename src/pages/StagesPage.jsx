import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft, Calendar, Clock, Users, Award,
    BookOpen, TrendingUp, CheckCircle
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const StagesPage = () => {
    const navigate = useNavigate();

    const stages = [
        {
            id: 1,
            title: "Stage Intensif BAC S - Mathématiques",
            description: "Préparation complète aux épreuves de mathématiques du Baccalauréat série S",
            level: "Terminale S",
            duration: "5 jours",
            dates: "Du 20 au 24 Décembre 2024",
            schedule: "9h00 - 17h00",
            price: "85.000 F",
            instructor: "Dr. Sarah Koné",
            spots: "12 places",
            available: 4,
            features: [
                "Annales corrigées",
                "Exercices types BAC",
                "Fiches de révision",
                "Coaching personnalisé"
            ],
            color: "blue"
        },
        {
            id: 2,
            title: "Stage BAC Blanc - Toutes Matières",
            description: "Simulation complète des épreuves du BAC avec correction détaillée",
            level: "Terminale (Toutes séries)",
            duration: "3 jours",
            dates: "Du 15 au 17 Janvier 2025",
            schedule: "8h00 - 18h00",
            price: "120.000 F",
            instructor: "Équipe pédagogique EduConnect",
            spots: "30 places",
            available: 12,
            features: [
                "Conditions réelles d'examen",
                "Correction individualisée",
                "Bilan de performance",
                "Plan de révision personnalisé"
            ],
            color: "emerald",
            popular: true
        },
        {
            id: 3,
            title: "Remise à Niveau - Physique-Chimie",
            description: "Consolidation des bases essentielles en Sciences Physiques",
            level: "Première & Terminale",
            duration: "4 jours",
            dates: "Du 27 au 30 Décembre 2024",
            schedule: "14h00 - 18h00",
            price: "65.000 F",
            instructor: "M. Traoré",
            spots: "15 places",
            available: 8,
            features: [
                "Cours de rattrapage",
                "TP pratiques",
                "Exercices d'application",
                "Support pédagogique inclus"
            ],
            color: "purple"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Header */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-900 pt-12 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Button variant="ghost" className="text-slate-400 hover:text-white mb-6" onClick={() => navigate('/parent')}>
                        <ArrowLeft size={20} className="mr-2" /> Retour au tableau de bord
                    </Button>
                    <Badge className="bg-indigo-500/20 text-indigo-300 border-0 mb-4">Préparation Intensive</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Stages de Révision
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl">
                        Préparez vos enfants aux examens avec nos stages intensifs encadrés par des professeurs experts.
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 -mt-16 pb-20 relative z-20">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <Card className="p-6 border-0 shadow-lg bg-white">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-50 rounded-xl">
                                <Calendar className="text-blue-600" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-bold">Disponibles</p>
                                <p className="text-2xl font-bold text-slate-900">{stages.length} Stages</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6 border-0 shadow-lg bg-white">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-50 rounded-xl">
                                <Users className="text-emerald-600" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-bold">Enseignants</p>
                                <p className="text-2xl font-bold text-slate-900">Certifiés</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6 border-0 shadow-lg bg-white">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-amber-50 rounded-xl">
                                <Award className="text-amber-600" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-bold">Taux de réussite</p>
                                <p className="text-2xl font-bold text-slate-900">92%</p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Stages List */}
                <div className="space-y-6">
                    {stages.map((stage) => (
                        <Card key={stage.id} className={`p-8 border-0 shadow-xl relative overflow-hidden ${stage.popular ? 'ring-2 ring-emerald-500' : 'ring-1 ring-slate-100'}`}>
                            {stage.popular && (
                                <div className="absolute top-0 right-0">
                                    <Badge className="bg-emerald-500 text-white border-0 rounded-bl-xl rounded-tr-xl">
                                        ⭐ Populaire
                                    </Badge>
                                </div>
                            )}

                            <div className="flex flex-col lg:flex-row gap-8">
                                <div className="flex-grow">
                                    <Badge className={`bg-${stage.color}-100 text-${stage.color}-700 border-0 mb-3`}>
                                        {stage.level}
                                    </Badge>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{stage.title}</h3>
                                    <p className="text-slate-600 mb-6">{stage.description}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <Calendar className="text-slate-400" size={18} />
                                            <div>
                                                <p className="text-xs text-slate-500">Dates</p>
                                                <p className="font-bold text-slate-900">{stage.dates}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock className="text-slate-400" size={18} />
                                            <div>
                                                <p className="text-xs text-slate-500">Horaires</p>
                                                <p className="font-bold text-slate-900">{stage.schedule}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <BookOpen className="text-slate-400" size={18} />
                                            <div>
                                                <p className="text-xs text-slate-500">Formateur</p>
                                                <p className="font-bold text-slate-900">{stage.instructor}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Users className="text-slate-400" size={18} />
                                            <div>
                                                <p className="text-xs text-slate-500">Places disponibles</p>
                                                <p className="font-bold text-emerald-600">{stage.available} / {stage.spots.split(' ')[0]}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm font-bold text-slate-700 mb-3">Ce qui est inclus :</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {stage.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <CheckCircle className="text-emerald-500" size={16} />
                                                    <span className="text-sm text-slate-600">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:w-80 flex flex-col justify-between">
                                    <div>
                                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-4">
                                            <p className="text-sm text-slate-500 mb-1">Tarif du stage</p>
                                            <p className="text-3xl font-bold text-slate-900 mb-4">{stage.price}</p>
                                            <p className="text-xs text-slate-400">Soit {Math.floor(parseInt(stage.price.replace(/\D/g, '')) / parseInt(stage.duration.split(' ')[0]))} F / jour</p>
                                        </div>
                                    </div>
                                    <Button
                                        onClick={() => alert(`Réservation confirmée !\n\nStage: ${stage.title}\nDates: ${stage.dates}\nPrix: ${stage.price}\n\nVous recevrez un email de confirmation sous 24h.`)}
                                        className={`w-full py-4 bg-${stage.color}-600 hover:bg-${stage.color}-700 text-white font-bold text-lg`}
                                    >
                                        Réserver une place
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
};
