'use client';

import GeometricSymbol from "@/components/experiments/GeometricSymbol";
import Globe from "@/components/experiments/Globe";
import HarmonicCircles from "@/components/experiments/HarmonicCircles";
import RadialGraph from "@/components/experiments/RadialGraph";


export default function ExperimentsPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <GeometricSymbol />
            <HarmonicCircles />
            <RadialGraph />
            <Globe />
        </div>
    );
}
