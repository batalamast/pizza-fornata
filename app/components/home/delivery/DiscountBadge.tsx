// DiscountStarburst.tsx (sharper points + tailwind bg-primary-500)
import React, { useMemo } from "react";
import { cn } from "~/lib/utils";

type Props = {
    className?: string;
    size?: number;
    percent?: string;
    line1?: string;
    line2?: string;
    rotationDeg?: number;
    roundness?: number; // lower = more pointy (try 10-16)
    spikes?: number; // default 10
    outerR?: number; // default 142
    innerR?: number; // default 108 (lower = more pointy)
    percentRotate?: number;
};

function starburstPoints(cx: number, cy: number, spikes: number, outerR: number, innerR: number, startAngleRad: number) {
    const step = Math.PI / spikes;
    const pts: Array<{ x: number; y: number }> = [];
    for (let i = 0; i < spikes * 2; i++) {
        const r = i % 2 === 0 ? outerR : innerR;
        const a = startAngleRad + i * step;
        pts.push({ x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r });
    }
    return pts;
}

function roundedPath(points: Array<{ x: number; y: number }>, round = 14) {
    if (points.length < 3) return "";
    const n = points.length;

    const dist = (a: any, b: any) => Math.hypot(a.x - b.x, a.y - b.y);
    const p = (i: number) => points[(i + n) % n];

    let d = "";

    for (let i = 0; i < n; i++) {
        const prev = p(i - 1);
        const curr = p(i);
        const next = p(i + 1);

        const d1 = dist(curr, prev);
        const d2 = dist(curr, next);

        const r = Math.min(round, d1 / 2, d2 / 2);

        const start = {
            x: curr.x + ((prev.x - curr.x) * r) / d1,
            y: curr.y + ((prev.y - curr.y) * r) / d1
        };
        const end = {
            x: curr.x + ((next.x - curr.x) * r) / d2,
            y: curr.y + ((next.y - curr.y) * r) / d2
        };

        if (i === 0) d += `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} `;
        else d += `L ${start.x.toFixed(2)} ${start.y.toFixed(2)} `;

        d += `Q ${curr.x.toFixed(2)} ${curr.y.toFixed(2)} ${end.x.toFixed(2)} ${end.y.toFixed(2)} `;
    }

    return d + "Z";
}

export default function DiscountStarburst({
    className,
    size = 250,
    percent = "-10%",
    line1 = "σε παραγγελία από το",
    line2 = "κατάστημα μας!",
    rotationDeg = 13,
    roundness = 14, // ↓ μειώσ’το για πιο μυτερό
    spikes = 10,
    outerR = 152,
    innerR = 104, // ↓ μικρότερο = πιο μυτερό/βαθιές “εσοχές”
    percentRotate = 13
}: Props) {
    const pts = useMemo(() => starburstPoints(150, 150, spikes, outerR, innerR, -Math.PI / 2), [spikes, outerR, innerR]);
    const d = useMemo(() => roundedPath(pts, roundness), [pts, roundness]);

    return (
        <div className={cn("inline-block", className)} style={{ width: size, height: size }}>
            <svg width={size} height={size} viewBox="0 0 300 300" role="img" aria-label={`${percent} ${line1} ${line2}`}>
                <defs>
                    <filter id="badgeShadow" x="-30%" y="-30%" width="160%" height="160%">
                        <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="rgba(0,0,0,0.18)" />
                    </filter>

                    <filter id="textShadow" x="-30%" y="-30%" width="160%" height="160%">
                        <feDropShadow dx="6" dy="6" stdDeviation="0.6" floodColor="rgba(0,0,0,0.25)" />
                    </filter>
                </defs>

                <g transform={`rotate(${rotationDeg} 150 150)`}>
                    {/* bg-primary-500 */}
                    <path d={d} className="fill-success-500" filter="url(#badgeShadow)" />

                    <text
                        x="150"
                        y="140"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#FFFFFF"
                        filter="url(#textShadow)"
                        transform={`rotate(${percentRotate} 150 140)`}
                        style={{
                            fontFamily: "inherit",
                            fontWeight: 500,
                            fontSize: 80,
                            fontStyle: "italic"
                        }}
                    >
                        {percent}
                    </text>

                    <g transform="rotate(14 150 205)">
                        <text
                            x="130"
                            y="190"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="rgba(0,0,0,0.55)"
                            style={{ fontFamily: "inherit", fontWeight: 500, fontSize: 16 }}
                        >
                            <tspan x="135" dy="0">
                                {line1}
                            </tspan>
                            <tspan x="135" dy="26">
                                {line2}
                            </tspan>
                        </text>
                    </g>
                </g>
            </svg>
        </div>
    );
}
