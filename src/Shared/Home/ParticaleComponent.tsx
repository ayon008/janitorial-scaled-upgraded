'use client'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions, Engine, Container } from "@tsparticles/engine";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

interface ParticlesComponentProps {
    id: string;
}

const ParticlesComponent = ({ id }: ParticlesComponentProps) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container?: Container): void => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: {
                enable: false, // 🔥 VERY IMPORTANT
            },
            background: {
                color: {
                    value: "#876EFD",
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    grab: {
                        distance: 150,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: false,
                    straight: false,
                    outModes: {
                        default: "bounce",
                    },
                },
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        area: 800,
                    },
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    return (
        <Particles
            id={id}
            init={particlesLoaded}
            options={options}
            className="!z-30"
            style={{
                position: "absolute", // ✅ Crucial
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
            }}
        />
    );
};

export default ParticlesComponent;