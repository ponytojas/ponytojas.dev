'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GradientTextProps {
    children: ReactNode;
    className?: string;
    from?: string;
    to?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ 
    children, 
    className = '',
    from = '#FA7268',
    to = '#0D5892'
}) => {
    return (
        <motion.span
            className={`bg-gradient-to-r bg-clip-text text-transparent font-bold ${className}`}
            style={{
                backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
            }}
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            {children}
        </motion.span>
    );
};
