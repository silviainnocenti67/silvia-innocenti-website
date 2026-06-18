'use client';

import Image from 'next/image';
import styles from './ProjectsCarousel.module.scss';
import { projects } from '@/data/projects';
import { useRouter } from 'next/navigation';
import { useRouteLoader } from '@/components/providers/RouteLoaderProvider';

/**
 * Projects Carousel Component.
 */
export default function ProjectsCarousel() {
    /** Projects covers to be rendered. */
    const covers = projects.map(project => project.cover);
    /** Ripeti le cover abbastanza da riempire viewport ampi: garantisce un loop
     *  continuo (senza spazi vuoti) anche con pochi progetti. */
    const repeats = Math.max(1, Math.ceil(8 / Math.max(covers.length, 1)));
    const repeatedCovers = Array.from({ length: repeats }, () => covers).flat();
    /** Router instance. */
    const router = useRouter();
    /** Route loader hook. */
    const { startLoading } = useRouteLoader();

    /**
     * Navigate to the projects page.
     */
    function goToProjects() {
        startLoading();
        router.push('/progetti');
    }

    /** Render */
    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.carouselContainer} onClick={goToProjects}>
                {/* Primo set di immagini */}
                {repeatedCovers.map((cover, index) => (
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
                {repeatedCovers.map((cover, index) => (
                    <div key={`duplicate-${index}`} className={styles.imageWrapper}>
                        <Image
                            src={cover ?? ""}
                            alt={`Project Cover ${index + 1}`}
                            width={500}
                            height={400}
                            className={styles.image}
                        />
                    </div>
                ))}

                <div className={styles.overlay} />
            </div>

            <div className={styles.projectsLink} onClick={goToProjects}>
                Esplora progetti
            </div>
        </div>
    );
}