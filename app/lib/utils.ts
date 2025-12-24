import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type Pt = { x: number; y: number };

export function starburstPoints(
    cx: number,
    cy: number,
    spikes: number,
    outerR: number,
    innerR: number,
    startAngleRad = -Math.PI / 2
): Pt[] {
    const pts: Pt[] = [];
    const total = spikes * 2;
    const step = (Math.PI * 2) / total;

    for (let i = 0; i < total; i++) {
        const r = i % 2 === 0 ? outerR : innerR;
        const a = startAngleRad + i * step;
        pts.push({ x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r });
    }
    return pts;
}

/**
 * Στρογγυλεύει τις γωνίες ενός polygon path.
 * roundness: περίπου σε px (στο ίδιο scale με το viewBox). Μικρότερο = πιο “μυτερό”.
 */
export function roundedPath(points: Pt[], roundness: number): string {
    if (points.length < 3) return "";

    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
    const dist = (a: Pt, b: Pt) => Math.hypot(b.x - a.x, b.y - a.y);

    const n = points.length;
    let d = "";

    for (let i = 0; i < n; i++) {
        const prev = points[(i - 1 + n) % n];
        const curr = points[i];
        const next = points[(i + 1) % n];

        const d1 = dist(curr, prev);
        const d2 = dist(curr, next);

        // πόσο “κόβουμε” πριν/μετά από τη γωνία
        const r = clamp(roundness, 0, Math.min(d1, d2) / 2);

        // σημείο πριν τη γωνία (πάνω στην ακμή prev->curr)
        const p1: Pt = {
            x: curr.x + ((prev.x - curr.x) / d1) * r,
            y: curr.y + ((prev.y - curr.y) / d1) * r
        };

        // σημείο μετά τη γωνία (πάνω στην ακμή curr->next)
        const p2: Pt = {
            x: curr.x + ((next.x - curr.x) / d2) * r,
            y: curr.y + ((next.y - curr.y) / d2) * r
        };

        if (i === 0) d += `M ${p1.x.toFixed(3)} ${p1.y.toFixed(3)} `;
        else d += `L ${p1.x.toFixed(3)} ${p1.y.toFixed(3)} `;

        // Quadratic curve με control point το ίδιο το corner (curr)
        d += `Q ${curr.x.toFixed(3)} ${curr.y.toFixed(3)} ${p2.x.toFixed(3)} ${p2.y.toFixed(3)} `;
    }

    d += "Z";
    return d;
}
