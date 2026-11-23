'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // title lines rise in once the preloader has lifted
    useGSAP(
        () => {
            gsap.from('.hero-line', {
                yPercent: 110,
                duration: 0.9,
                stagger: 0.12,
                delay: 2.3,
                ease: 'power3.out',
            });
        },
        { scope: containerRef },
    );

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="block overflow-hidden pb-1">
                            <span className="hero-line block text-ai">
                                AI ARCHITECT
                            </span>
                        </span>
                        <span className="block overflow-hidden">
                            <span className="hero-line block ml-4">
                                &amp; ENGINEER
                            </span>
                        </span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Muhammad Ahmad
                        </span>
                        , founder of Elaviqo. I architect AI-native systems,
                        direct AI agents to build them, and run them in
                        production: SaaS platforms, agentic workflows and
                        business automations, from data model to release.
                    </p>
                    <TypedLine />
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(GENERAL_INFO.emailSubject)}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`}
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Start a Project
                    </Button>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-2xl xs:text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            10+ Projects
                        </h5>
                        <p className="text-muted-foreground">
                            Products &amp; Platforms Shipped
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-2xl xs:text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            AI Agents
                        </h5>
                        <p className="text-muted-foreground">
                            Agentic Systems &amp; Automation
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-2xl xs:text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            A to Z
                        </h5>
                        <p className="text-muted-foreground">
                            Architecture to Production
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const WORDS = [
    'AI agents',
    'agentic workflows',
    'multi-tenant SaaS',
    'business automations',
    'AI-native architecture',
];

// types each word, holds it, deletes it, moves on
const TypedLine = () => {
    const [text, setText] = React.useState('');

    React.useEffect(() => {
        let word = 0;
        let length = 0;
        let deleting = false;
        let timer: ReturnType<typeof setTimeout>;

        const tick = () => {
            const current = WORDS[word];
            length += deleting ? -1 : 1;
            setText(current.slice(0, length));

            let wait = deleting ? 35 : 70;
            if (!deleting && length === current.length) {
                deleting = true;
                wait = 1600;
            } else if (deleting && length === 0) {
                deleting = false;
                word = (word + 1) % WORDS.length;
                wait = 300;
            }
            timer = setTimeout(tick, wait);
        };

        timer = setTimeout(tick, 2600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <p
            className="slide-up-and-fade mt-5 font-mono text-[15px] sm:text-base text-muted-foreground whitespace-nowrap"
            aria-label="Building AI agents, agentic workflows, multi-tenant SaaS, business automations and AI-native architecture"
        >
            <span className="text-primary" aria-hidden>
                ~/ahmad $
            </span>{' '}
            <span aria-hidden>
                building <span className="text-foreground">{text}</span>
                <span className="caret" />
            </span>
        </p>
    );
};

export default Banner;
