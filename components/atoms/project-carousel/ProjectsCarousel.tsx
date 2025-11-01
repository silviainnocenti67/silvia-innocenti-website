'use client';

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import classes from "./ProjectsCarousel.module.scss";

export default function ProjectsCarousel() {
    const [isPaused, setIsPaused] = useState(false);

    // Duplica i progetti 3 volte per l'effetto infinito senza interruzioni
    const duplicatedProjects = [...projects, ...projects, ...projects];

    return (
        <div className={classes.carouselContainer}>
            <div
                className={classes.carouselWrapper}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    className={classes.carouselTrack}
                    animate={{
                        x: [0, -(projects.length * (400 + 24))]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: projects.length * 3,
                            ease: "linear"
                        }
                    }}
                    style={{
                        animationPlayState: isPaused ? 'paused' : 'running'
                    }}
                >
                    {duplicatedProjects.map((project, index) => (
                        <Link
                            href={`/progetti/${project.id}`}
                            key={`${project.id}-${index}`}
                            className={classes.carouselItem}
                        >
                            <div className={classes.projectSquare}>
                                <img
                                    src={project.thumbnailUrl}
                                    alt={project.title}
                                    className={classes.projectThumbnail}
                                />
                                <div className={classes.projectOverlay}>
                                    <h3 className={classes.projectTitle}>{project.title}</h3>
                                    <p className={classes.projectType}>{project.type}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}