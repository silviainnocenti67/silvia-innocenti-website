"use client";

import classes from './ProjectPreview.module.scss';
import { motion } from 'framer-motion';

type Props = {
  /** Title of the project. */
  title?: string;
  /** URL of the project cover image. */
  coverUrl?: string;
}

/**
 * A preview component for displaying a project summary.
 */
export default function ProjectPreview({ title, coverUrl }: Props) {
  return (
    <motion.div className={classes.projectPreviewContainer}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <img src={coverUrl ?? ""} alt={title ?? ""} className={classes.projectPreviewImage} />
      <div className={classes.overlay} />
      <h2 className={classes.projectTitle}>{title}</h2>
      <p className={classes.projectLink}>Vedi progetto</p>
    </motion.div>
  )
}