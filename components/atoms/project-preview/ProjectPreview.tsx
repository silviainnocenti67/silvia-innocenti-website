"use client";

import { useRouter } from 'next/navigation';
import classes from './ProjectPreview.module.scss';
import { motion } from 'framer-motion';
import { useRouteLoader } from '@/components/providers/RouteLoaderProvider';

type Props = {
  /** Project identifier. */
  id?: number;
  /** Title of the project. */
  title?: string;
  /** URL of the project cover image. */
  coverUrl?: string;
}

/**
 * A preview component for displaying a project summary.
 */
export default function ProjectPreview({ id, title, coverUrl }: Props) {
  /** Router instance for navigation. */
  const router = useRouter();
  /** Route loader hook. */
  const { startLoading } = useRouteLoader();

  /**
   * Navigates to the project detail page.
   */
  function goToProjectDetail() {
    startLoading();
    router.push(`/progetti/${id}`);
  }

  return (
    <motion.div className={classes.projectPreviewContainer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onClick={goToProjectDetail}
    >
      <img src={coverUrl ?? ""} alt={title ?? ""} className={classes.projectPreviewImage} />
      <div className={classes.overlay} />
      <h2 className={classes.projectTitle}>{title}</h2>
      <p className={classes.projectLink}>Vedi progetto</p>
    </motion.div>
  )
}