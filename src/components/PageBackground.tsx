"use client";

import dynamic from "next/dynamic";

const RippleGrid = dynamic(() => import("./RippleGrid"), { ssr: false });

export default function PageBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <RippleGrid
        enableRainbow={false}
        gridColor="#2fa1da"
        rippleIntensity={0.03}
        gridSize={17}
        gridThickness={30}
        fadeDistance={3}
        vignetteStrength={5}
        glowIntensity={0.55}
        opacity={1}
        gridRotation={0}
        mouseInteraction
        mouseInteractionRadius={0.8}
      />
    </div>
  );
}
