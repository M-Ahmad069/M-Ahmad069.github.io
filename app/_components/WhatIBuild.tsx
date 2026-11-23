'use client';
import SectionTitle from '@/components/SectionTitle';
import { CAPABILITIES } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WhatIBuild = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.capability-item', {
                y: 50,
                autoAlpha: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                },
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="what-i-build">
            <div className="container" ref={containerRef}>
                <SectionTitle title="What I Build" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-14">
                    {CAPABILITIES.map((item, index) => (
                        <div
                            key={item.title}
                            className="capability-item glow-card"
                        >
                            <p className="font-anton text-muted-foreground">
                                _{(index + 1).toString().padStart(2, '0')}.
                            </p>
                            <p className="text-3xl font-anton leading-none mt-3.5 mb-4">
                                {item.title}
                            </p>
                            <p className="text-lg text-muted-foreground">
                                {item.text}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {item.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs uppercase tracking-wider text-primary border border-primary/30 bg-primary/[0.04] px-2.5 py-1"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIBuild;
