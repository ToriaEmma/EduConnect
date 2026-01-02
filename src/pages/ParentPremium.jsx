import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Check, ArrowLeft, Shield, TrendingUp, FileText,
    Activity, Star, Zap
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const ParentPremium = () => {
    const navigate = useNavigate();

    const plans = [
        {
            name: "Découverte",
            price: "Gratuit",
            color: "slate",
            description: "L'essentiel pour suivre la scolarité de vos enfants.",
            features: [
                "Tableau de bord basique",
                "Suivi des séances réalisées",
                "Paiement sécurisé des cours",
                "Messagerie avec les profs"
            ],
            cta: "Votre offre actuelle",
            current: true
        },
        {
            name: "Parent Excellence",
            price: "4.900 F / mois",
            color: "emerald",
            popular: true,
            description: "Offrez le meilleur suivi pédagogique à votre enfant.",
            features: [
                "Tout du pack Découverte",
                "Rapports détaillés après chaque séance",
                "Analyse de la progression (Graphiques)",
                "Alertes 'Lacunes détectées'",
                "Priorité sur les meilleurs répétiteurs",
                "Support client prioritaire"
            ],
            cta: "Passer à l'Excellence"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans relative">
            {/* Header */}
            <div className="bg-slate-900 pt-12 pb-24 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <Button variant="ghost" className="absolute top-0 left-4 text-slate-400 hover:text-white" onClick={() => navigate('/parent')}>
                        <ArrowLeft className="mr-2" size={20} /> Retour
                    </Button>

                    <Badge className="bg-emerald-500/20 text-emerald-300 border-0 mb-6">Offre Parents</Badge>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Investissez dans leur réussite
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Accédez à des outils de suivi avancés pour ne rien rater des progrès de vos enfants.
                        La transparence totale au service de l'excellence.
                    </p>
                </div>
            </div>

            {/* Content Cards */}
            <div className="max-w-7xl mx-auto px-4 -mt-16 pb-20 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`
                                flex flex-col p-8 border relative overflow-hidden transition-all duration-300
                                ${plan.popular
                                    ? 'bg-white border-2 border-emerald-500 shadow-2xl shadow-emerald-500/20 scale-105 z-10 rounded-[2rem]'
                                    : 'bg-white border-slate-200 shadow-lg hover:shadow-xl rounded-3xl'}
                            `}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500" />
                            )}

                            <div className="mb-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className={`text-2xl font-bold ${plan.popular ? 'text-emerald-900' : 'text-slate-900'}`}>
                                        {plan.name}
                                    </h3>
                                    {plan.popular && (
                                        <Badge className="bg-emerald-100 text-emerald-700 border-0">Recommandé</Badge>
                                    )}
                                </div>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                                    {plan.price !== "Gratuit" && <span className="text-slate-500">/mois</span>}
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={`mt-0.5 p-0.5 rounded-full ${plan.popular ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className="text-slate-700 text-sm font-medium">{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                onClick={() => plan.current ? navigate('/parent') : null}
                                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${plan.current
                                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg cursor-pointer'
                                    : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/40 transform hover:-translate-y-1'
                                    }`}
                            >
                                {plan.current ? (
                                    <span className="flex items-center justify-center gap-2"><Check size={18} /> {plan.cta}</span>
                                ) : plan.cta}
                            </Button>
                        </Card>
                    ))}
                </div>

                {/* Trust/Guarantee */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <TrendingUp size={24} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Suivi en Temps Réel</h3>
                        <p className="text-sm text-slate-500">Visualisez les progrès grâce à des graphiques clairs et précis.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <FileText size={24} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Rapports Détaillés</h3>
                        <p className="text-sm text-slate-500">Recevez un bilan complet après chaque séance de vos enfants.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Shield size={24} />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2">Garantie Satisfaction</h3>
                        <p className="text-sm text-slate-500">Satisfait ou remboursé sous 14 jours. Sans engagement.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
