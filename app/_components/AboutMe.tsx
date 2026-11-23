'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    Writing code is no longer the hard part.{' '}
                    <span className="text-ai">Architecture is.</span> I design
                    AI-native systems, direct AI agents to build them, and own
                    them in production.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    About me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Muhammad Ahmad.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                I&apos;m the founder and sole engineer of
                                Elaviqo, a salon POS SaaS that runs a paying
                                salon&apos;s checkout, bookings and staff pay
                                on the web, Windows, Mac and Android. I also
                                build and run SoftScroll, FitGenius and
                                CaptionFlow.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                My day is architecture and orchestration: I
                                write the spec, run several AI coding agents in
                                parallel, connect them to real infrastructure
                                through MCP, and gate every change with types,
                                tests, reviews and preview deploys. Agents,
                                automations, security and support: one person,
                                the whole product.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
