'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const CENTER = { x: 150, y: 150 };
const RADIUS_LEVELS = [0, 40, 100, 120];
const INTERMEDIATE_COUNT = 6;
const EXTERNAL_COUNT = 12;

interface Node {
    angle: number;
    pos: { x: number; y: number };
}

const RadialGraph: React.FC = () => {
    const { theme } = useTheme();
    const isDarkTheme = theme === "dark";
    
    const [nodes, setNodes] = useState<{ intermediate: Node[], external: Node[] }>({
        intermediate: [],
        external: []
    });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const randomOffset = (base: number, delta: number) =>
            base + (Math.random() * 2 - 1) * delta;

        const polarToCartesian = (r: number, angleDeg: number) => {
            const angleRad = (angleDeg * Math.PI) / 180;
            return {
                x: CENTER.x + r * Math.cos(angleRad),
                y: CENTER.y + r * Math.sin(angleRad),
            };
        };

        const intermediate = Array.from({ length: INTERMEDIATE_COUNT }, (_, i) => {
            const angle = randomOffset(i * (360 / INTERMEDIATE_COUNT), 20);
            return {
                angle,
                pos: polarToCartesian(RADIUS_LEVELS[1], angle),
            };
        });

        const external = Array.from({ length: EXTERNAL_COUNT }, (_, i) => {
            const angle = randomOffset(i * (360 / EXTERNAL_COUNT), 15);
            return {
                angle,
                pos: polarToCartesian(RADIUS_LEVELS[2], angle),
            };
        });

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setNodes({ intermediate, external });
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex justify-center items-center w-full h-full">
            <svg width={300} height={300} fill={isDarkTheme ? "#f0f0f0" : "#333333"} className="not-so-slow-rotate">
                {RADIUS_LEVELS.slice(1).map((r, i) => (
                    <circle
                        key={`circle-${i}`}
                        cx={CENTER.x}
                        cy={CENTER.y}
                        r={r}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={0.5}
                        className="opacity-30"
                    />
                ))}

                {nodes.intermediate.map((node, i) => (
                    <line
                        key={`line-center-${i}`}
                        x1={CENTER.x}
                        y1={CENTER.y}
                        x2={node.pos.x}
                        y2={node.pos.y}
                        stroke="currentColor"
                        strokeWidth={0.5}
                    />
                ))}

                {nodes.intermediate.map((mid, i) => {
                    const leftChild = nodes.external[(2 * i) % EXTERNAL_COUNT];
                    const rightChild = nodes.external[(2 * i + 1) % EXTERNAL_COUNT];
                    // Ensure children exist before rendering lines (safety check though logic guarantees it)
                    if (!leftChild || !rightChild) return null;
                    
                    return (
                        <React.Fragment key={`branch-${i}`}>
                            <line
                                x1={mid.pos.x}
                                y1={mid.pos.y}
                                x2={leftChild.pos.x}
                                y2={leftChild.pos.y}
                                stroke="currentColor"
                                strokeWidth={0.5}
                            />
                            <line
                                x1={mid.pos.x}
                                y1={mid.pos.y}
                                x2={rightChild.pos.x}
                                y2={rightChild.pos.y}
                                stroke="currentColor"
                                strokeWidth={0.5}
                            />
                        </React.Fragment>
                    );
                })}

                <circle cx={CENTER.x} cy={CENTER.y} r={6} fill="currentColor" />

                {nodes.intermediate.map((node, i) => (
                    <circle key={`mid-${i}`} cx={node.pos.x} cy={node.pos.y} r={4} fill="currentColor" />
                ))}

                {nodes.external.map((node, i) => (
                    <circle key={`ext-${i}`} cx={node.pos.x} cy={node.pos.y} r={3} fill="currentColor" />
                ))}
            </svg>
        </div>
    );
};

export default RadialGraph;
