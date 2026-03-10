'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="My Experience" />

                <div className="grid gap-14">
                    {MY_EXPERIENCE.map((item) => (
                        <div key={item.title} className="experience-item">
                            <p className="text-xl text-muted-foreground">
                                {item.company}
                            </p>
                            <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5">
                                {item.title}
                            </p>
                            <p className="text-lg text-muted-foreground">
                                {item.duration}
                            </p>
                            <ul className="mt-5 text-lg text-muted-foreground space-y-1.5">
                                <li>
                                    Lead end-to-end development of full-stack
                                    web applications using MERN and Next.js,
                                    from initial requirements to production
                                    deployment.
                                </li>
                                <li>
                                    Design and implement scalable RESTful APIs,
                                    authentication, and role-based access to
                                    support real business workflows.
                                </li>
                                <li>
                                    Architect backend systems and database
                                    models with attention to data consistency,
                                    performance, and maintainability.
                                </li>
                                <li>
                                    Deploy and maintain applications, handling
                                    environment configuration and basic
                                    monitoring to keep them stable in real use.
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
