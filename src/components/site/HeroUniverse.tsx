import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

// Stable star positions; no random changes between renders.
const STARS = Array.from({ length: 54 }, (_, index) => ({
    x: ((index * 137 + 43) % 970) + 15,
    y: ((index * 211 + 89) % 960) + 20,
    radius: index % 9 === 0 ? 1.3 : index % 3 === 0 ? 0.9 : 0.65,
    delay: `${-(index % 11) * 0.7}s`,
    duration: `${5 + (index % 5)}s`,
}));

export function HeroUniverse() {
    const fieldRef = useRef<HTMLDivElement>(null);
    const [paused, setPaused] = useState(false);
    const pausedRef = useRef(false);

    useEffect(() => {
        const field = fieldRef.current;
        if (!field) return;

        const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
        const hero = document.querySelector<HTMLElement>('[aria-labelledby="hero-heading"]');
        let frame = 0;
        let disposed = false;
        let width = window.innerWidth;
        let height = window.innerHeight;
        let maximumScroll = 1;

        const measure = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            maximumScroll = Math.max(1, document.documentElement.scrollHeight - height);
        };

        const draw = () => {
            frame = 0;
            if (disposed || preference.matches || document.hidden || pausedRef.current) return;
            const progress = Math.max(0, Math.min(1, window.scrollY / maximumScroll));
            const inHero = hero ? hero.getBoundingClientRect().bottom > 100 : window.scrollY < height;
            field.style.setProperty("--universe-strength", inHero ? "1" : "0.55");
            field.style.setProperty("--star-drift", `${(-progress * 22).toFixed(1)}px`);
            field.style.setProperty("--meteor-scroll-x", `${(-progress * width * 0.08).toFixed(1)}px`);
            field.style.setProperty("--meteor-scroll-y", `${(progress * height * 0.12).toFixed(1)}px`);
        };

        const schedule = () => {
            if (!disposed && !frame && !preference.matches && !document.hidden && !pausedRef.current) {
                frame = requestAnimationFrame(draw);
            }
        };
        const resize = () => { measure(); schedule(); };
        const visibility = () => {
            field.setAttribute("data-page-hidden", String(document.hidden));
            if (document.hidden) {
                cancelAnimationFrame(frame);
                frame = 0;
            } else {
                resize();
            }
        };
        const preferenceChanged = () => {
            cancelAnimationFrame(frame);
            frame = 0;
            if (preference.matches) {
                for (const property of ["--star-drift", "--meteor-scroll-x", "--meteor-scroll-y"]) {
                    field.style.removeProperty(property);
                }
            } else {
                resize();
            }
        };

        measure();
        visibility();
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", resize);
        window.addEventListener("load", resize);
        document.addEventListener("visibilitychange", visibility);
        preference.addEventListener("change", preferenceChanged);
        const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(resize) : undefined;
        observer?.observe(document.body);

        return () => {
            disposed = true;
            cancelAnimationFrame(frame);
            observer?.disconnect();
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", resize);
            window.removeEventListener("load", resize);
            document.removeEventListener("visibilitychange", visibility);
            preference.removeEventListener("change", preferenceChanged);
        };
    }, []);

    return (
        <>
            <div ref={fieldRef} aria-hidden="true" data-paused={paused ? "true" : "false"} className="hero-universe">
                <div className="universe-nebula universe-nebula-cyan" />
                <div className="universe-nebula universe-nebula-indigo" />
                <div className="universe-galaxy-band" />
                <div className="universe-star-depth">
                    <svg className="hero-universe-stars" viewBox="0 0 1000 1000" preserveAspectRatio="none" focusable="false">
                        {STARS.map((star, index) => (
                            <circle
                                key={index}
                                className="universe-star"
                                cx={star.x}
                                cy={star.y}
                                r={star.radius}
                                fill="currentColor"
                                style={{ animationDelay: star.delay, animationDuration: star.duration }}
                            />
                        ))}
                    </svg>
                </div>
                <div className="hero-universe-track">
                    <div className="hero-universe-meteor" />
                </div>
            </div>
            <button
                type="button"
                className="universe-motion-toggle"
                aria-label={paused ? "Resume universe animation" : "Pause universe animation"}
                aria-pressed={paused}
                title={paused ? "Resume universe animation" : "Pause universe animation"}
                onClick={() => {
                    pausedRef.current = !pausedRef.current;
                    setPaused(pausedRef.current);
                }}
            >
                {paused ? <Play aria-hidden="true" size={13} /> : <Pause aria-hidden="true" size={13} />}
                <span>{paused ? "Play sky" : "Pause sky"}</span>
            </button>
        </>
    );
}
