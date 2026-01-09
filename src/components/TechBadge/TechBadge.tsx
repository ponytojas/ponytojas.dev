'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

interface TechBadgeProps {
    technology: string;
    color: string;
    index: number;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ technology, color, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                duration: 0.4,
                delay: index * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 20
            }}
            whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.4 }
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative"
        >
            <div
                className="px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border cursor-pointer transition-all duration-300 select-none"
                style={{
                    backgroundColor: isHovered ? `${color}20` : `${color}15`,
                    borderColor: isHovered ? color : `${color}60`,
                    color: isHovered ? color : `${color}CC`,
                    boxShadow: isHovered ? `0 4px 20px ${color}40` : 'none'
                }}
            >
                {technology}
            </div>
            
            {isHovered && (
                <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                        border: `2px solid ${color}`,
                    }}
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 1.4, opacity: 0 }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                />
            )}
        </motion.div>
    );
};
