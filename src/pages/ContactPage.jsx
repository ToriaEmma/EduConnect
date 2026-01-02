import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Mail, Phone, MapPin, Clock, Send, MessageSquare,
    CheckCircle, ArrowRight, Users, Building2, GraduationCap
} from 'lucide-react';
import { Layout } from '../components/Layout';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { motion } from 'framer-motion';

export const ContactPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        userType: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', userType: '', message: '' });
        }, 500);
    };

    const contactInfo = [
        { icon: Mail, label: "Email", value: "contact@educonnect.com", link: "mailto:contact@educonnect.com" },
        { icon: Phone, label: "Téléphone", value: "+229 00 00 00 00", link: "tel:+22900000000" },
        { icon: MapPin, label: "Adresse", value: "Cotonou, Bénin", link: null },
        { icon: Clock, label: "Horaires", value: "Lun - Ven: 8h - 18h", link: null }
    ];

    const userTypes = [
        { value: 'parent', label: 'Parent / Élève', icon: Users },
        { value: 'teacher', label: 'Enseignant', icon: GraduationCap },
        { value: 'school', label: 'École / Institution', icon: Building2 }
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-amber-500/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 mb-6">
                            <MessageSquare size={14} className="mr-1" /> Support & Contact
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Nous <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Contacter</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                            Une question ? Un partenariat ? Notre équipe est là pour vous accompagner
                            dans votre parcours éducatif.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Contact Form */}
                        <div className="lg:w-2/3">
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">Envoyez-nous un message</h2>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-emerald-50 border border-emerald-200 rounded-3xl p-12 text-center"
                                >
                                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10 text-emerald-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Message envoyé !</h3>
                                    <p className="text-slate-600 mb-8">
                                        Merci de nous avoir contacté. Notre équipe vous répondra dans les plus brefs délais.
                                    </p>
                                    <Button onClick={() => setSubmitted(false)}>
                                        Envoyer un autre message
                                    </Button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* User Type Selection */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-3">Vous êtes :</label>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            {userTypes.map((type) => (
                                                <button
                                                    key={type.value}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, userType: type.value })}
                                                    className={`p-4 rounded-2xl border-2 transition-all flex items-center gap-3 ${formData.userType === type.value
                                                        ? 'border-amber-500 bg-amber-50'
                                                        : 'border-slate-200 hover:border-slate-300'
                                                        }`}
                                                >
                                                    <type.icon className={`w-5 h-5 ${formData.userType === type.value ? 'text-amber-600' : 'text-slate-400'}`} />
                                                    <span className={`font-medium ${formData.userType === type.value ? 'text-amber-700' : 'text-slate-600'}`}>
                                                        {type.label}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Nom complet</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                                                placeholder="Votre nom"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                                                placeholder="votre@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Sujet</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                                            placeholder="Le sujet de votre message"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                        <textarea
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
                                            placeholder="Décrivez votre demande en détail..."
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                                        <Send size={18} className="mr-2" /> Envoyer le message
                                    </Button>
                                </form>
                            )}
                        </div>

                        {/* Contact Information */}
                        <div className="lg:w-1/3">
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 sticky top-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Informations de contact</h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                                                <info.icon className="w-5 h-5 text-amber-600" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-slate-500 mb-1">{info.label}</div>
                                                {info.link ? (
                                                    <a href={info.link} className="font-medium text-slate-900 hover:text-amber-600 transition-colors">
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <div className="font-medium text-slate-900">{info.value}</div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <hr className="my-8 border-slate-200" />

                                <div>
                                    <h4 className="font-bold text-slate-900 mb-4">Réponse rapide</h4>
                                    <p className="text-slate-600 text-sm mb-4">
                                        Notre équipe s'engage à vous répondre sous 24 heures ouvrées.
                                    </p>
                                    <div className="flex items-center gap-2 text-emerald-600">
                                        <CheckCircle size={16} />
                                        <span className="text-sm font-medium">Support disponible</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Teaser */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions fréquentes ?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Consultez notre FAQ pour trouver rapidement des réponses à vos questions.
                    </p>
                    <Button variant="outline" size="lg" onClick={() => navigate('/method')}>
                        Découvrir notre méthode <ArrowRight size={18} className="ml-2" />
                    </Button>
                </div>
            </section>
        </Layout>
    );
};
