import React from 'react';

export const Badge = ({ children, color = 'primary', className = '' }) => {
    const colors = {
        primary: 'bg-primary/10 text-primary border-primary/20',
        secondary: 'bg-secondary/10 text-secondary border-secondary/20',
        blue: 'bg-blue-50 text-blue-700 border-blue-200',
        green: 'bg-green-50 text-green-700 border-green-200',
        purple: 'bg-purple-50 text-purple-700 border-purple-200',
        amber: 'bg-amber-50 text-amber-700 border-amber-200',
        red: 'bg-red-50 text-red-700 border-red-200',
        slate: 'bg-slate-100 text-slate-700 border-slate-200',
    };

    // Fallback to primary if color not found
    const colorClass = colors[color] || colors.primary;

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colorClass} ${className}`}>
            {children}
        </span>
    );
};
