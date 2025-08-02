'use client';
import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { useMemo } from "react";

interface ParticlesComponentProps {
    id: string;
}

const ParticlesComponent = ({ id }: ParticlesComponentProps) => {
    // const [init, setInit] = useState(false);

    // useEffect(() => {
    //     initParticlesEngine(async (engine) => {
    //         await loadSlim(engine);
    //     }).then(() => {
    //         setInit(true);
    //     });
    // }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: {
                enable: false,
            },
            background: {
                color: {
                    value: "#876EFD",
                },
            },
            fpsLimit: 120,
            interactivity: {
                detectsOn: "canvas",
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
                modes: {
                    grab: {
                        distance: 250, // Increased grab distance
                        links: {
                            opacity: 0.9, // More visible lines
                        },
                    },
                    push: {
                        quantity: 4,
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
                    speed: 0.5, // Slower for smooth movement
                    direction: "none",
                    random: false,
                    straight: false,
                    outModes: {
                        default: "bounce",
                    },
                },
                number: {
                    value: 200,
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
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Particles
                id={id}
                options={options}
                className="pointer-events-auto !z-30"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                    pointerEvents: "auto",
                }}
            />
        </div>
    );
};

export default ParticlesComponent;
