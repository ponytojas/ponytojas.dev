'use client';

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useTheme } from "next-themes";

const locationToAngles = (lat: number, long: number) => {
    return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180]
}

const Globe = () => {
    const { theme } = useTheme();
    const isDarkTheme = theme === "dark";

    const baseColor: [number, number, number] = isDarkTheme ? [0.4, 0.4, 0.4] : [1, 1, 1];
    const glowColor: [number, number, number] = isDarkTheme ? [0.09, 0.09, 0.09] : [0.9, 0.9, 0.9];

    console.debug({ baseColor, glowColor });

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        // Coordenadas de origen
        const lon = -0.3718140355870048;
        const lat = 30.474287030842184;

        const [initialPhi, initialTheta] = locationToAngles(lat, lon);

        let globe: ReturnType<typeof createGlobe> | undefined;

        if (canvasRef.current) {
            globe = createGlobe(canvasRef.current, {
                devicePixelRatio: 2,
                width: 300 * 2,
                height: 300 * 2,
                phi: initialPhi,
                theta: initialTheta,
                dark: 0.9,
                diffuse: 1.9,
                mapSamples: 15000,
                mapBrightness: 8,
                baseColor,
                markerColor: [0, 0, 0],
                glowColor,
                markers: [],
                onRender: (state) => {
                    state.phi = initialPhi + phi;
                    state.theta = initialTheta;
                    phi += 0.001;
                }
            });
        }

        return () => {
            if (globe) globe.destroy();
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: 300, height: 300, maxWidth: "100%", aspectRatio: 1 }}
        />
    );
}

export default React.memo(Globe);