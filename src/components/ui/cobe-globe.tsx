"use client";

import { useEffect, useRef } from "react";
import createGlobe, { type Arc, type Globe as CobeInstance, type Marker } from "cobe";
import { MapPin } from "lucide-react";

import { cn } from "@/lib/utils";

const markers: Marker[] = [
  { location: [20.5937, 78.9629], size: 0.075, color: [0.13, 0.77, 0.37], id: "india" },
  { location: [1.3521, 103.8198], size: 0.045, color: [0.13, 0.83, 0.93] },
  { location: [51.5072, -0.1276], size: 0.042, color: [0.98, 0.8, 0.08] },
  { location: [37.7749, -122.4194], size: 0.04, color: [0.66, 0.33, 0.97] },
  { location: [35.6762, 139.6503], size: 0.038, color: [0.13, 0.83, 0.93] },
];

const arcs: Arc[] = [
  { from: [20.5937, 78.9629], to: [1.3521, 103.8198], color: [0.13, 0.83, 0.93] },
  { from: [20.5937, 78.9629], to: [51.5072, -0.1276], color: [0.13, 0.77, 0.37] },
  { from: [20.5937, 78.9629], to: [37.7749, -122.4194], color: [0.98, 0.8, 0.08] },
];

type Dimensions = {
  width: number;
  height: number;
};

type CobeGlobeProps = {
  className?: string;
};

export function CobeGlobe({ className }: CobeGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<CobeInstance | null>(null);
  const frameRef = useRef<number | null>(null);
  const dimensionsRef = useRef<Dimensions>({ width: 1, height: 1 });
  const phiRef = useRef(1.05);
  const dragRotationRef = useRef(0);
  const pointerStartRef = useRef(0);
  const dragStartRotationRef = useRef(0);
  const draggingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      dimensionsRef.current = {
        width: Math.max(1, Math.floor(rect.width)),
        height: Math.max(1, Math.floor(rect.height)),
      };
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(container);

    const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const globe = createGlobe(canvas, {
      width: dimensionsRef.current.width,
      height: dimensionsRef.current.height,
      devicePixelRatio,
      phi: phiRef.current,
      theta: 0.24,
      dark: 1.05,
      diffuse: 1.55,
      mapSamples: 16000,
      mapBrightness: 2.2,
      mapBaseBrightness: 0.045,
      baseColor: [0.18, 0.2, 0.18],
      markerColor: [0.13, 0.77, 0.37],
      glowColor: [0.06, 0.17, 0.18],
      markers,
      arcs,
      arcColor: [0.13, 0.83, 0.93],
      arcWidth: 0.45,
      arcHeight: 0.24,
      markerElevation: 0.035,
      opacity: 0.82,
      offset: [0, 0],
      scale: 1.05,
    });

    globeRef.current = globe;

    const animate = () => {
      const { width, height } = dimensionsRef.current;
      if (!draggingRef.current) phiRef.current += 0.0022;

      globe.update({
        phi: phiRef.current + dragRotationRef.current,
        width,
        height,
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      globe.destroy();
      globeRef.current = null;

      const cobeWrapper = canvas.parentElement;
      if (cobeWrapper && cobeWrapper !== container) {
        container.appendChild(canvas);
        cobeWrapper.remove();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-xl border border-cream/10 bg-background/45",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 map-line opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.12),transparent_58%)]" />
      <canvas
        ref={canvasRef}
        aria-label="Interactive globe showing India and global build routes"
        className="relative z-10 h-full w-full cursor-grab opacity-95 active:cursor-grabbing"
        onPointerDown={(event) => {
          draggingRef.current = true;
          pointerStartRef.current = event.clientX;
          dragStartRotationRef.current = dragRotationRef.current;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!draggingRef.current) return;
          dragRotationRef.current = dragStartRotationRef.current + (event.clientX - pointerStartRef.current) / 220;
        }}
        onPointerUp={(event) => {
          draggingRef.current = false;
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        }}
        onPointerCancel={() => {
          draggingRef.current = false;
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-background/90 to-transparent" />
      <div className="absolute bottom-4 right-4 z-30 flex items-center gap-1.5 rounded-full border border-green/25 bg-green/10 px-3 py-1.5 font-mono text-xs text-green backdrop-blur-md">
        <MapPin className="h-3.5 w-3.5" />
        India
      </div>
    </div>
  );
}