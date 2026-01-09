"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { RabbitImage } from "./RabbitImage";
import {
  Code,
  Terminal,
  Cpu,
  Zap,
  Globe,
  Command,
  Hash,
  Braces,
  Layers,
  Hexagon,
  Box,
  Activity,
  Database,
  Cloud,
  GitBranch,
  Server,
  FileCode,
  Settings,
  Shield,
  Search,
  Bug,
  Radio,
  Blocks,
  Binary,
  Wifi,
  Lock,
  LucideIcon,
} from "lucide-react";

interface IconData {
  Icon: LucideIcon;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: number;
  rotation: number;
}

const icons: IconData[] = [
  { Icon: Code, top: "12%", left: "8%", size: 64, rotation: -15 },
  { Icon: Terminal, top: "18%", right: "12%", size: 56, rotation: 10 },
  { Icon: Cpu, bottom: "22%", left: "10%", size: 72, rotation: 25 },
  { Icon: Zap, top: "38%", right: "6%", size: 48, rotation: -20 },
  { Icon: Globe, bottom: "32%", right: "18%", size: 60, rotation: 15 },
  { Icon: Command, top: "12%", left: "32%", size: 52, rotation: -10 },
  { Icon: Cloud, bottom: "12%", left: "38%", size: 44, rotation: 30 },
  { Icon: Braces, top: "58%", left: "4%", size: 58, rotation: -25 },
  { Icon: Layers, bottom: "42%", left: "82%", size: 54, rotation: 12 },
  { Icon: Hexagon, top: "22%", left: "72%", size: 46, rotation: -8 },
  { Icon: Box, top: "82%", left: "68%", size: 62, rotation: 18 },
  { Icon: Activity, bottom: "6%", left: "6%", size: 40, rotation: -12 },
  { Icon: Database, top: "85%", right: "25%", size: 50, rotation: 22 },
  { Icon: Cloud, top: "5%", right: "45%", size: 66, rotation: -5 },
  { Icon: GitBranch, top: "45%", left: "15%", size: 55, rotation: 28 },
  { Icon: FileCode, top: "65%", right: "35%", size: 52, rotation: 8 },
  { Icon: Settings, bottom: "8%", right: "55%", size: 45, rotation: -30 },
  { Icon: Shield, top: "20%", left: "55%", size: 58, rotation: 12 },
  { Icon: Search, top: "28%", right: "12%", size: 42, rotation: -22 },
  { Icon: Bug, bottom: "15%", right: "35%", size: 38, rotation: 45 },
  { Icon: Radio, top: "52%", left: "25%", size: 60, rotation: -18 },
  { Icon: Binary, top: "92%", left: "45%", size: 40, rotation: -10 },
  { Icon: Wifi, top: "8%", left: "58%", size: 44, rotation: 20 },
  { Icon: Lock, bottom: "65%", left: "22%", size: 46, rotation: -5 },
];

export const Rabbit = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 80, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const backgroundX = useTransform(x, (value) => value * 0.5);
  const backgroundY = useTransform(y, (value) => value * 0.5);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xPct = e.clientX / innerWidth - 0.75;
      const yPct = e.clientY / innerHeight - 0.75;

      // Move opposite to mouse
      mouseX.set(xPct * -100);
      mouseY.set(yPct * -100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full h-[110vh] overflow-hidden bg-foreground flex items-center justify-center">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-background/10 pointer-events-none"
          style={{
            top: icon.top,
            left: icon.left,
            right: icon.right,
            bottom: icon.bottom,
            x: backgroundX,
            y: backgroundY,
            rotate: icon.rotation,
          }}
        >
          <icon.Icon size={icon.size} strokeWidth={1} />
        </motion.div>
      ))}
      <motion.div
        className="w-[80vw] max-w-150 text-background pointer-events-none flex items-center justify-center z-10"
        style={{ x, y }}
      >
        <RabbitImage className="block w-full h-auto" />
      </motion.div>
    </div>
  );
};
