import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft, Calendar, Clock, MapPin, Video, User,
    Plus, Filter, ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const PlanningPage = () => {
    const navigate = useNavigate();
    const [view, setView] = useState('upcoming');

    const sessions = {
        upcoming: [
            {
                id: 1,
                subject: "Mathématiques",
                tutor: "Dr. Sarah Koné",
                student: "Marc",
                date: "Demain",
                time: "14h00 - 15h30",
                location: "En ligne",
                status: "confirmed"
            },
            {
                id: 2,
                subject: "Anglais",
                tutor: "Mme. Dubois",
                student: "Sophie",
                date: "Mercredi 15 Nov",
                time: "10h00 - 11h00",
                location: "À domicile",
                status: "confirmed"
            },
            {
                id: 3,
                subject: "Physique",
                tutor: "M. Traoré",
                student: "Marc",
                date: "Jeudi 16 Nov",
                time: "16h00 - 17h30",
                location: "En ligne",
                status: "pending"
            }
        ],
        past: [
            {
                id: 4,
                subject: "Mathématiques",
                tutor: "Dr. Sarah Koné",
                student: "Marc",
                date: "Hier",
                time: "14h00 - 15h30",
                location: "En ligne",
                status: "completed",
                rating: 5
            },
            {
                id: 5,
                subject: "SVT",
                tutor: "M. Diop",
                student: "Sophie",
                date: "Mercredi 8 Nov",
                time: "15h00 - 16h00",
                location: "À domicile",
                status: "completed",
                rating: 4
            }
        ]
    };

    const currentSessions = view === 'upcoming' ? sessions.upcoming : sessions.past;

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" onClick={() => navigate('/parent')}>
                            <ArrowLeft size={20} className="mr-2" /> Retour
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900">Planning des Séances</h1>
                            <p className="text-slate-500 text-sm">Gérez toutes les séances de vos enfants</p>
                        </div>
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        <Plus size={18} className="mr-2" /> Nouvelle séance
                    </Button>
                </div>
            </div>

            <main className="max-w-7xl mx-auto p-6 space-y-6">
                {/* Filter Tabs */}
                <div className="flex gap-4 items-center">
                    <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
                        <button
                            onClick={() => setView('upcoming')}
                            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${view === 'upcoming'
                                ? 'bg-emerald-500 text-white shadow-md'
                                : 'text-slate-500 hover:bg-slate-50'
                                }`}
                        >
                            À venir ({sessions.upcoming.length})
                        </button>
                        <button
                            onClick={() => setView('past')}
                            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${view === 'past'
                                ? 'bg-emerald-500 text-white shadow-md'
                                : 'text-slate-500 hover:bg-slate-50'
                                }`}
                        >
                            Historique ({sessions.past.length})
                        </button>
                    </div>
                    <Button variant="outline">
                        <Filter size={16} className="mr-2" /> Filtrer
                    </Button>
                </div>

                {/* Sessions List */}
                <div className="space-y-4">
                    {currentSessions.map((session) => (
                        <Card key={session.id} className="p-6 border-0 shadow-md ring-1 ring-slate-100 hover:shadow-lg transition-shadow">
                            <div className="flex justify-between items-start">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Badge color={session.status === 'confirmed' ? 'green' : session.status === 'pending' ? 'amber' : 'slate'}>
                                            {session.subject}
                                        </Badge>
                                        <Badge variant="outline" className="text-slate-500">
                                            {session.student}
                                        </Badge>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                                        <div className="flex items-center gap-2 text-slate-600">
                                            <User size={16} className="text-slate-400" />
                                            <span className="text-sm font-medium">{session.tutor}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-600">
                                            <Calendar size={16} className="text-slate-400" />
                                            <span className="text-sm">{session.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-600">
                                            <Clock size={16} className="text-slate-400" />
                                            <span className="text-sm">{session.time}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {session.location === 'En ligne' ? (
                                            <div className="flex items-center gap-2 text-indigo-600">
                                                <Video size={16} />
                                                <span className="text-sm font-medium">En ligne</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2 text-amber-600">
                                                <MapPin size={16} />
                                                <span className="text-sm font-medium">À domicile</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    {session.status === 'pending' && (
                                        <Badge className="bg-amber-100 text-amber-700 border-0">En attente</Badge>
                                    )}
                                    {session.status === 'confirmed' && (
                                        <Badge className="bg-emerald-100 text-emerald-700 border-0">Confirmée</Badge>
                                    )}
                                    {session.status === 'completed' && (
                                        <Badge className="bg-slate-100 text-slate-700 border-0">Terminée</Badge>
                                    )}
                                    {view === 'upcoming' && (
                                        <Button size="sm" variant="outline">
                                            Modifier
                                        </Button>
                                    )}
                                    {view === 'past' && (
                                        <Button size="sm" variant="ghost">
                                            Voir rapport
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
};
