import { cn, roundedPath, starburstPoints } from "~/lib/utils";
import { useMemo } from "react";

type Props = {
    className?: string;
    size?: number | string; // ✅ μπορεί να είναι 220 ή "clamp(140px, 25vw, 220px)"
    percent?: string;
    line1?: string;
    line2?: string;
    rotationDeg?: number;
    roundness?: number;
    spikes?: number;
    outerR?: number;
    innerR?: number;
    percentRotate?: number;
};

export default function DiscountStarburst({
    className,
    size = "clamp(140px, 25vw, 220px)", // ✅ responsive default
    percent = "-10%",
    line1 = "σε παραγγελία από το",
    line2 = "κατάστημα μας!",
    rotationDeg = 13,
    roundness = 14,
    spikes = 10,
    outerR = 152,
    innerR = 104,
    percentRotate = 13
}: Props) {
    const pts = useMemo(() => starburstPoints(150, 150, spikes, outerR, innerR, -Math.PI / 2), [spikes, outerR, innerR]);
    const d = useMemo(() => roundedPath(pts, roundness), [pts, roundness]);

    const cssSize = typeof size === "number" ? `${size}px` : size;

    return (
        <div className={cn("inline-block", className)} style={{ width: cssSize, height: cssSize }}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 300 300"
                role="img"
                aria-label={`${percent} ${line1} ${line2}`}
                preserveAspectRatio="xMidYMid meet"
            >
                {/* ... το υπόλοιπο SVG ίδιο ... */}
                {/*<defs>*/}
                {/*    <filter id="badgeShadow" x="-30%" y="-30%" width="160%" height="160%">*/}
                {/*        <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="rgba(0,0,0,0.18)" />*/}
                {/*    </filter>*/}
                {/*    <filter id="textShadow" x="-30%" y="-30%" width="160%" height="160%">*/}
                {/*        <feDropShadow dx="6" dy="6" stdDeviation="0.6" floodColor="rgba(0,0,0,0.25)" />*/}
                {/*    </filter>*/}
                {/*</defs>*/}

                <g transform={`rotate(${rotationDeg} 150 150)`}>
                    <path d={d} className="fill-success-500" filter="url(#badgeShadow)" />

                    <text
                        x="150"
                        y="140"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#FFFFFF"
                        filter="url(#textShadow)"
                        transform={`rotate(${percentRotate} 150 140)`}
                        style={{ fontFamily: "Yellowtail, cursive", fontWeight: 400, fontSize: 100 }}
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
