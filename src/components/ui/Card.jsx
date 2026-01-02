import React from 'react';
import { motion } from 'framer-motion';

export function Card({ children, className = '', ...props }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 p-6 ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
}
