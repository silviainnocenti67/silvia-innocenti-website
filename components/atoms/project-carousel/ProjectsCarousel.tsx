'use client';

import Image from 'next/image';
import styles from './ProjectsCarousel.module.scss';
import { projects } from '@/data/projects';
import { useRouter } from 'next/navigation';

/**
 * Projects Carousel Component.
 */
export default function ProjectsCarousel() {
    /** Projects covers to be rendered. */
    const covers = projects.map(project => project.cover);
    /** Router instance. */
    const router = useRouter();

    /**
     * Navigate to the projects page.
     */
    function goToProjects() {
        router.push('/progetti');
    }

    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.carouselContainer} onClick={goToProjects}>
                {/* Primo set di immagini */}
                {covers.map((cover, index) => (
                    <div key={`original-${index}`} className={styles.imageWrapper}>
                        <Image
                            src={cover ?? ""}
                            alt={`Project Cover ${index + 1}`}
                            width={500}
                            height={400}
                            className={styles.image}
                        />
                    </div>
                ))}

                {/* Duplicato per l'effetto infinito */}
                {covers.map((cover, index) => (
                    <div key={`duplicate-${index}`} className={styles.imageWrapper}>
                        <Image
                            src={cover ?? ""}
                            alt={`Project Cover ${index + 1}`}
                            width={500}
                            height={500}
                            className={styles.image}
                        />
                    </div>
                ))}

                <div className={styles.overlay} />
            </div>

            <div className={styles.label}>
                Esplora progetti
            </div>
        </div>
    );
}