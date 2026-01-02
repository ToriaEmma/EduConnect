import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft, Trophy, Star, Zap, Award, Target,
    CheckCircle, XCircle, Clock, TrendingUp
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { motion } from 'framer-motion';

export const GamesPage = () => {
    const navigate = useNavigate();
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    const quizzes = [
        {
            id: 1,
            title: "Quiz Mathématiques",
            subject: "Maths",
            level: "Terminale S",
            questions: 10,
            duration: "15 min",
            points: 100,
            color: "indigo",
            icon: "📐",
            difficulty: "Moyen"
        },
        {
            id: 2,
            title: "Quiz Physique-Chimie",
            subject: "Physique",
            level: "Première",
            questions: 8,
            duration: "12 min",
            points: 80,
            color: "slate",
            icon: "⚗️",
            difficulty: "Difficile"
        },
        {
            id: 3,
            title: "Quiz Français",
            subject: "Français",
            level: "Seconde",
            questions: 15,
            duration: "20 min",
            points: 120,
            color: "amber",
            icon: "📚",
            difficulty: "Facile"
        },
        {
            id: 4,
            title: "Quiz SVT",
            subject: "SVT",
            level: "Terminale",
            questions: 12,
            duration: "18 min",
            points: 100,
            color: "green",
            icon: "🧬",
            difficulty: "Moyen"
        }
    ];

    const mockQuestions = [
        {
            question: "Quelle est la dérivée de x² ?",
            options: ["2x", "x", "2", "x²"],
            correct: 0
        },
        {
            question: "Combien font 15 × 12 ?",
            options: ["150", "180", "200", "160"],
            correct: 1
        },
        {
            question: "Quelle est la formule de l'aire d'un cercle ?",
            options: ["πr", "2πr", "πr²", "2πr²"],
            correct: 2
        }
    ];

    const handleAnswer = (optionIndex) => {
        const isCorrect = optionIndex === mockQuestions[currentQuestion].correct;
        if (isCorrect) {
            setScore(score + 10);
        }
        setAnsweredQuestions([...answeredQuestions, { question: currentQuestion, correct: isCorrect }]);

        if (currentQuestion < mockQuestions.length - 1) {
            setTimeout(() => setCurrentQuestion(currentQuestion + 1), 500);
        } else {
            setTimeout(() => {
                alert(`Quiz terminé ! Score: ${score + (isCorrect ? 10 : 0)}/${mockQuestions.length * 10}`);
                setSelectedQuiz(null);
                setCurrentQuestion(0);
                setAnsweredQuestions([]);
            }, 1000);
        }
    };

    if (selectedQuiz) {
        const question = mockQuestions[currentQuestion];
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-indigo-900 flex items-center justify-center p-4">
                <Card className="max-w-3xl w-full p-8 border-0 shadow-2xl">
                    <div className="flex justify-between items-center mb-8">
                        <Badge className="bg-indigo-100 text-indigo-700">
                            Question {currentQuestion + 1}/{mockQuestions.length}
                        </Badge>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <Star className="text-amber-500" size={20} />
                                <span className="font-bold text-slate-900">{score} pts</span>
                            </div>
                            <Badge className="bg-emerald-100 text-emerald-700">
                                <Clock size={14} className="mr-1" /> 10:23
                            </Badge>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-8">{question.question}</h3>

                    <div className="space-y-4">
                        {question.options.map((option, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleAnswer(index)}
                                className="w-full p-4 bg-slate-50 hover:bg-indigo-50 border-2 border-slate-200 hover:border-indigo-500 rounded-xl text-left font-medium text-slate-900 transition-all"
                            >
                                <span className="font-bold text-indigo-600 mr-3">{String.fromCharCode(65 + index)}.</span>
                                {option}
                            </motion.button>
                        ))}
                    </div>

                    <Button
                        variant="ghost"
                        onClick={() => {
                            setSelectedQuiz(null);
                            setCurrentQuestion(0);
                            setScore(0);
                            setAnsweredQuestions([]);
                        }}
                        className="mt-8 text-slate-500"
                    >
                        Abandonner le quiz
                    </Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Header */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-900 pt-12 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Button variant="ghost" className="text-white/80 hover:text-white mb-6" onClick={() => navigate('/student')}>
                        <ArrowLeft size={20} className="mr-2" /> Retour au tableau de bord
                    </Button>
                    <div className="flex items-center gap-3 mb-4">
                        <Trophy className="text-amber-300" size={32} />
                        <Badge className="bg-white/20 text-white border-0">Apprendre en s'amusant</Badge>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Jeux Éducatifs
                    </h1>
                    <p className="text-white/90 text-lg max-w-2xl">
                        Testez vos connaissances, gagnez des points et montez dans le classement !
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 -mt-16 pb-20 relative z-20">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <Card className="p-6 border-0 shadow-lg bg-white">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-indigo-50 rounded-xl">
                                <Star className="text-indigo-600" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-bold">Points Total</p>
                                <p className="text-2xl font-bold text-slate-900">1,250</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6 border-0 shadow-lg bg-white">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-50 rounded-xl">
                                <Trophy className="text-emerald-600" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-bold">Badges</p>
                                <p className="text-2xl font-bold text-slate-900">12</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6 border-0 shadow-lg bg-white">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-amber-50 rounded-xl">
                                <Target className="text-amber-600" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-bold">Niveau</p>
                                <p className="text-2xl font-bold text-slate-900">15</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6 border-0 shadow-lg bg-white">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-purple-50 rounded-xl">
                                <TrendingUp className="text-purple-600" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-bold">Classement</p>
                                <p className="text-2xl font-bold text-slate-900">#24</p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Quiz Cards */}
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Quiz Disponibles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {quizzes.map((quiz) => (
                        <motion.div
                            key={quiz.id}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="p-6 border-0 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer relative overflow-hidden group">
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-${quiz.color}-500/10 rounded-full blur-2xl -mr-8 -mt-8`} />

                                <div className="relative">
                                    <div className="text-4xl mb-4">{quiz.icon}</div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{quiz.title}</h3>
                                    <Badge className={`bg-${quiz.color}-100 text-${quiz.color}-700 border-0 mb-4`}>
                                        {quiz.level}
                                    </Badge>

                                    <div className="space-y-2 mb-4 text-sm text-slate-600">
                                        <div className="flex items-center gap-2">
                                            <Target size={14} />
                                            <span>{quiz.questions} questions</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} />
                                            <span>{quiz.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Star size={14} className="text-amber-500" />
                                            <span>{quiz.points} points max</span>
                                        </div>
                                    </div>

                                    <Button
                                        onClick={() => setSelectedQuiz(quiz)}
                                        className={`w-full bg-${quiz.color}-600 hover:bg-${quiz.color}-700 text-white`}
                                    >
                                        Commencer <Zap size={16} className="ml-2" />
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Leaderboard */}
                <Card className="mt-12 p-8 border-0 shadow-xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Trophy className="text-amber-500" />
                        Classement de la Semaine
                    </h3>
                    <div className="space-y-4">
                        {[
                            { rank: 1, name: "Sophie Mensah", points: 2450, badge: "🥇" },
                            { rank: 2, name: "Thomas Koné", points: 2380, badge: "🥈" },
                            { rank: 3, name: "Marie Diallo", points: 2150, badge: "🥉" },
                            { rank: 4, name: "Marc Anderson (Vous)", points: 1250, badge: "", highlight: true }
                        ].map((player) => (
                            <div
                                key={player.rank}
                                className={`flex items-center justify-between p-4 rounded-xl ${player.highlight ? 'bg-indigo-50 border-2 border-indigo-500' : 'bg-slate-50'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl font-bold text-slate-400 w-8">#{player.rank}</span>
                                    {player.badge && <span className="text-2xl">{player.badge}</span>}
                                    <div>
                                        <p className="font-bold text-slate-900">{player.name}</p>
                                        <p className="text-sm text-slate-500">{player.points} points</p>
                                    </div>
                                </div>
                                {player.highlight && (
                                    <Badge className="bg-indigo-500 text-white border-0">Vous</Badge>
                                )}
                            </div>
                        ))}
                    </div>
                </Card>
            </main>
        </div>
    );
};
