import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    ArrowLeft, ThumbsUp, ThumbsDown, MessageSquare, Share2,
    CheckCircle, MoreHorizontal, Flag, Send
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const QuestionDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [votes, setVotes] = useState(145);

    // Mock Data
    const question = {
        id: 1,
        title: "Comment résoudre une équation du second degré sans discriminant ?",
        content: "Je sais utiliser delta, mais mon prof a parlé d'une méthode 'canonique'. Est-ce que quelqu'un peut m'expliquer simplement comment ça marche avec un exemple ?",
        author: "Thomas Dubreuil",
        role: "Élève - Terminale S",
        time: "Il y a 2 heures",
        subject: "Mathématiques",
        views: 234,
        tags: ["Algèbre", "Équations", "Seconde"]
    };

    const answers = [
        {
            id: 101,
            author: "Dr. Sarah Koné",
            role: "Enseignante Certifiée",
            isTeacher: true,
            time: "Il y a 1 heure",
            content: "Bonjour Thomas ! C'est une excellente question. La forme canonique consiste à forcer l'apparition d'une identité remarquable. \n\nExemple : x² + 6x + 5 = 0\n1. On regarde le début : x² + 6x est le début de (x + 3)² = x² + 6x + 9.\n2. Donc x² + 6x = (x + 3)² - 9.\n3. On remplace : (x + 3)² - 9 + 5 = 0\n4. (x + 3)² - 4 = 0.\n\nEnsuite tu utilises a² - b² = (a-b)(a+b) !",
            votes: 42,
            isVerified: true
        },
        {
            id: 102,
            author: "Marie L.",
            role: "Élève - Prépa MPSI",
            isTeacher: false,
            time: "Il y a 45 min",
            content: "Tu peux aussi utiliser la méthode du complètement du carré, c'est exactement ce que Dr. Koné décrit. C'est très utile pour les nombres complexes plus tard !",
            votes: 12,
            isVerified: false
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans py-8">
            <div className="max-w-5xl mx-auto px-4">
                {/* Header Navigation */}
                <div className="flex items-center gap-4 mb-8">
                    <Button variant="ghost" onClick={() => navigate(-1)} className="text-slate-500 hover:text-slate-900">
                        <ArrowLeft size={20} className="mr-2" /> Retour au Q&A
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Question Card */}
                        <Card className="p-6 border-0 shadow-sm ring-1 ring-slate-100 bg-white">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="flex flex-col items-center gap-1 min-w-[3rem]">
                                    <Button variant="ghost" size="icon" className="hover:bg-slate-100 text-slate-400 hover:text-emerald-500 rounded-full h-8 w-8" onClick={() => setVotes(v => v + 1)}>
                                        <ThumbsUp size={20} />
                                    </Button>
                                    <span className="font-bold text-slate-900 text-lg">{votes}</span>
                                    <Button variant="ghost" size="icon" className="hover:bg-slate-100 text-slate-400 hover:text-red-500 rounded-full h-8 w-8">
                                        <ThumbsDown size={20} />
                                    </Button>
                                </div>

                                <div className="flex-grow">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <Badge color="blue">{question.subject}</Badge>
                                        {question.tags.map(tag => (
                                            <Badge key={tag} variant="outline" className="text-slate-500 border-slate-200">{tag}</Badge>
                                        ))}
                                    </div>

                                    <h1 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                                        {question.title}
                                    </h1>

                                    <div className="prose prose-slate max-w-none text-slate-700 mb-6 whitespace-pre-line">
                                        {question.content}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                TD
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-900 text-sm">{question.author}</div>
                                                <div className="text-xs text-slate-500">{question.role} • {question.time}</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="ghost" size="sm" className="text-slate-400">
                                                <Share2 size={16} className="mr-2" /> Partager
                                            </Button>
                                            <Button variant="ghost" size="sm" className="text-slate-400">
                                                <Flag size={16} className="mr-2" /> Signaler
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Answers Section */}
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-slate-900">{answers.length} Réponses</h3>
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <span>Trier par :</span>
                                <select className="bg-transparent font-bold text-slate-900 outline-none">
                                    <option>Votes</option>
                                    <option>Date</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {answers.map(answer => (
                                <Card key={answer.id} className={`p-6 border-0 shadow-sm transition-all ${answer.isVerified ? 'ring-2 ring-emerald-500/50 bg-emerald-50/10' : 'ring-1 ring-slate-100 bg-white'}`}>
                                    {answer.isVerified && (
                                        <div className="flex items-center gap-2 mb-4 text-emerald-600 font-bold text-sm bg-emerald-50 w-fit px-3 py-1 rounded-full">
                                            <CheckCircle size={16} className="fill-emerald-600 text-white" />
                                            Réponse validée par la communauté
                                        </div>
                                    )}

                                    <div className="flex items-start gap-4">
                                        <div className="flex flex-col items-center gap-1 min-w-[3rem]">
                                            <Button variant="ghost" size="icon" className="hover:bg-slate-100 text-slate-400 hover:text-emerald-500 rounded-full h-8 w-8">
                                                <ThumbsUp size={18} />
                                            </Button>
                                            <span className="font-bold text-slate-700">{answer.votes}</span>
                                            <Button variant="ghost" size="icon" className="hover:bg-slate-100 text-slate-400 hover:text-red-500 rounded-full h-8 w-8">
                                                <ThumbsDown size={18} />
                                            </Button>
                                        </div>

                                        <div className="flex-grow">
                                            <div className="prose prose-slate max-w-none text-slate-700 mb-6 whitespace-pre-line">
                                                {answer.content}
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs ${answer.isTeacher ? 'bg-amber-500' : 'bg-slate-400'}`}>
                                                        {answer.author.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                                                            {answer.author}
                                                            {answer.isTeacher && <Badge className="bg-amber-100 text-amber-700 text-[10px] px-1.5 py-0 border-0">Prof</Badge>}
                                                        </div>
                                                        <div className="text-xs text-slate-500">{answer.role} • {answer.time}</div>
                                                    </div>
                                                </div>
                                                <Button variant="ghost" size="sm" className="text-slate-400">
                                                    <MessageSquare size={14} className="mr-1" /> Commenter
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {/* Your Answer */}
                        <Card className="p-6 border-0 shadow-sm ring-1 ring-slate-100 bg-white mt-8">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Votre réponse</h3>
                            <textarea
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl min-h-[150px] mb-4 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400"
                                placeholder="Partagez vos connaissances pour aider Thomas..."
                            />
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-slate-400">Formattage Markdown supporté</span>
                                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                                    <Send size={16} className="mr-2" /> Publier la réponse
                                </Button>
                            </div>
                        </Card>
                    </div>

                    {/* Sidebar Stats */}
                    <div className="space-y-6">
                        <Card className="p-6 border-0 shadow-sm ring-1 ring-slate-100 bg-white">
                            <h3 className="font-bold text-slate-900 mb-4">Statistiques</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Demandé</span>
                                    <span className="font-medium text-slate-900">Il y a 2 heures</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Vues</span>
                                    <span className="font-medium text-slate-900">{question.views}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Réponses</span>
                                    <span className="font-medium text-slate-900">{answers.length}</span>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 border-0 shadow-sm ring-1 ring-slate-100 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
                            <h3 className="font-bold text-lg mb-2">Devenez un expert</h3>
                            <p className="text-indigo-100 text-sm mb-4">Répondez aux questions, gagnez des points et débloquez des badges exclusifs.</p>
                            <Button variant="white" className="w-full text-indigo-600">
                                Voir les questions sans réponse
                            </Button>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
