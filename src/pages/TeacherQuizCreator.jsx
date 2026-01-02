import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft, Plus, Trash2, Edit, Save, X,
    BookOpen, Clock, Target, Award
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const TeacherQuizCreator = () => {
    const navigate = useNavigate();
    const [quizzes, setQuizzes] = useState([
        {
            id: 1,
            title: "Quiz Mathématiques - Dérivées",
            subject: "Maths",
            level: "Terminale S",
            questions: 10,
            points: 100,
            status: "published"
        }
    ]);

    const [isCreating, setIsCreating] = useState(false);
    const [newQuiz, setNewQuiz] = useState({
        title: '',
        subject: '',
        level: '',
        questions: []
    });

    const [currentQuestion, setCurrentQuestion] = useState({
        question: '',
        options: ['', '', '', ''],
        correct: 0
    });

    const handleAddQuestion = () => {
        if (currentQuestion.question && currentQuestion.options.every(opt => opt)) {
            setNewQuiz({
                ...newQuiz,
                questions: [...newQuiz.questions, currentQuestion]
            });
            setCurrentQuestion({
                question: '',
                options: ['', '', '', ''],
                correct: 0
            });
        }
    };

    const handlePublishQuiz = () => {
        if (newQuiz.title && newQuiz.subject && newQuiz.level && newQuiz.questions.length > 0) {
            const quiz = {
                id: quizzes.length + 1,
                ...newQuiz,
                questions: newQuiz.questions.length,
                points: newQuiz.questions.length * 10,
                status: 'published'
            };
            setQuizzes([...quizzes, quiz]);
            setNewQuiz({ title: '', subject: '', level: '', questions: [] });
            setIsCreating(false);
            alert('Quiz publié avec succès ! Les élèves peuvent maintenant y jouer.');
        }
    };

    if (isCreating) {
        return (
            <div className="min-h-screen bg-slate-50 font-sans">
                <div className="bg-indigo-600 text-white px-6 py-4 sticky top-0 z-30">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Créer un Quiz</h1>
                        <Button variant="ghost" className="text-white" onClick={() => setIsCreating(false)}>
                            <X size={20} className="mr-2" /> Annuler
                        </Button>
                    </div>
                </div>

                <main className="max-w-4xl mx-auto p-6 space-y-6">
                    {/* Quiz Info */}
                    <Card className="p-6 border-0 shadow-lg">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Informations du Quiz</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Titre du Quiz</label>
                                <input
                                    type="text"
                                    value={newQuiz.title}
                                    onChange={(e) => setNewQuiz({ ...newQuiz, title: e.target.value })}
                                    placeholder="Ex: Quiz Mathématiques - Les Dérivées"
                                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Matière</label>
                                    <select
                                        value={newQuiz.subject}
                                        onChange={(e) => setNewQuiz({ ...newQuiz, subject: e.target.value })}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <option value="">Sélectionnez</option>
                                        <option value="Maths">Mathématiques</option>
                                        <option value="Physique">Physique-Chimie</option>
                                        <option value="Français">Français</option>
                                        <option value="SVT">SVT</option>
                                        <option value="Anglais">Anglais</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Niveau</label>
                                    <select
                                        value={newQuiz.level}
                                        onChange={(e) => setNewQuiz({ ...newQuiz, level: e.target.value })}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <option value="">Sélectionnez</option>
                                        <option value="Seconde">Seconde</option>
                                        <option value="Première">Première</option>
                                        <option value="Terminale">Terminale</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Add Question */}
                    <Card className="p-6 border-0 shadow-lg">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Ajouter une Question</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Question</label>
                                <input
                                    type="text"
                                    value={currentQuestion.question}
                                    onChange={(e) => setCurrentQuestion({ ...currentQuestion, question: e.target.value })}
                                    placeholder="Quelle est la question ?"
                                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="block text-sm font-bold text-slate-700">Options de réponse</label>
                                {currentQuestion.options.map((option, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="correct"
                                            checked={currentQuestion.correct === index}
                                            onChange={() => setCurrentQuestion({ ...currentQuestion, correct: index })}
                                            className="w-5 h-5 text-emerald-600"
                                        />
                                        <input
                                            type="text"
                                            value={option}
                                            onChange={(e) => {
                                                const newOptions = [...currentQuestion.options];
                                                newOptions[index] = e.target.value;
                                                setCurrentQuestion({ ...currentQuestion, options: newOptions });
                                            }}
                                            placeholder={`Option ${String.fromCharCode(65 + index)}`}
                                            className="flex-1 px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                ))}
                                <p className="text-xs text-slate-500">Cochez la bonne réponse</p>
                            </div>
                            <Button
                                onClick={handleAddQuestion}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                            >
                                <Plus size={18} className="mr-2" /> Ajouter cette question
                            </Button>
                        </div>
                    </Card>

                    {/* Questions List */}
                    {newQuiz.questions.length > 0 && (
                        <Card className="p-6 border-0 shadow-lg">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">
                                Questions ajoutées ({newQuiz.questions.length})
                            </h3>
                            <div className="space-y-3">
                                {newQuiz.questions.map((q, index) => (
                                    <div key={index} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <p className="font-bold text-slate-900 mb-2">{index + 1}. {q.question}</p>
                                                <div className="space-y-1">
                                                    {q.options.map((opt, i) => (
                                                        <p key={i} className={`text-sm ${i === q.correct ? 'text-emerald-600 font-bold' : 'text-slate-600'}`}>
                                                            {String.fromCharCode(65 + i)}. {opt} {i === q.correct && '✓'}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                onClick={() => {
                                                    const updated = newQuiz.questions.filter((_, i) => i !== index);
                                                    setNewQuiz({ ...newQuiz, questions: updated });
                                                }}
                                                className="text-red-600 hover:bg-red-50"
                                            >
                                                <Trash2 size={16} />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    )}

                    {/* Publish Button */}
                    <Button
                        onClick={handlePublishQuiz}
                        disabled={!newQuiz.title || !newQuiz.subject || !newQuiz.level || newQuiz.questions.length === 0}
                        className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg disabled:bg-slate-300"
                    >
                        <Save size={20} className="mr-2" /> Publier le Quiz
                    </Button>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" onClick={() => navigate('/teacher-dashboard')}>
                            <ArrowLeft size={20} className="mr-2" /> Retour
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900">Mes Quiz</h1>
                            <p className="text-slate-500 text-sm">Créez des quiz pour vos élèves</p>
                        </div>
                    </div>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" onClick={() => setIsCreating(true)}>
                        <Plus size={18} className="mr-2" /> Nouveau Quiz
                    </Button>
                </div>
            </div>

            <main className="max-w-7xl mx-auto p-6">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card className="p-6 border-0 shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-indigo-50 rounded-xl">
                                <BookOpen className="text-indigo-600" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-bold">Quiz créés</p>
                                <p className="text-2xl font-bold text-slate-900">{quizzes.length}</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6 border-0 shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-emerald-50 rounded-xl">
                                <Target className="text-emerald-600" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-bold">Participants</p>
                                <p className="text-2xl font-bold text-slate-900">245</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6 border-0 shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-amber-50 rounded-xl">
                                <Award className="text-amber-600" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-bold">Taux de réussite</p>
                                <p className="text-2xl font-bold text-slate-900">78%</p>
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6 border-0 shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-blue-50 rounded-xl">
                                <Clock className="text-blue-600" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-bold">Temps moyen</p>
                                <p className="text-2xl font-bold text-slate-900">12 min</p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Quiz List */}
                <h2 className="text-xl font-bold text-slate-900 mb-4">Vos Quiz</h2>
                <div className="space-y-4">
                    {quizzes.map((quiz) => (
                        <Card key={quiz.id} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-bold text-slate-900">{quiz.title}</h3>
                                        <Badge className="bg-emerald-100 text-emerald-700 border-0">
                                            {quiz.status === 'published' ? 'Publié' : 'Brouillon'}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center gap-6 text-sm text-slate-600">
                                        <span className="flex items-center gap-2">
                                            <BookOpen size={16} />
                                            {quiz.subject}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Target size={16} />
                                            {quiz.questions} questions
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Award size={16} />
                                            {quiz.points} points
                                        </span>
                                        <Badge variant="outline">{quiz.level}</Badge>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline">
                                        <Edit size={16} className="mr-2" /> Modifier
                                    </Button>
                                    <Button size="sm" variant="ghost" className="text-red-600 hover:bg-red-50">
                                        <Trash2 size={16} />
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
