import React from 'react';

export function Input({ label, error, icon: Icon, className = '', ...props }) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    {label}
                </label>
            )}
            <div className="relative">
                {Icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        <Icon size={20} />
                    </div>
                )}
                <input
                    className={`
              w-full rounded-lg border border-slate-300 bg-white
              text-slate-900 placeholder:text-slate-400
              focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
              disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500
              transition-all duration-200
              ${Icon ? 'pl-10 pr-4 py-2.5' : 'px-4 py-2.5'}
              ${error ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : ''}
              ${className}
            `}
                    {...props}
                />
            </div>
            {error && (
                <p className="mt-1.5 text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
}
