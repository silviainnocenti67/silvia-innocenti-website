'use client';

import React, { useState } from 'react'
import Masonry from 'react-masonry-css';
import classes from './CustomMasonry.module.scss';
import { motion, spring } from 'framer-motion';
import "yet-another-react-lightbox/styles.css";
import Lightbox from 'yet-another-react-lightbox';

type Props = {
  /** Array of image URLs to display in the masonry layout. */
  images: string[];
}

export default function CustomMasonry({ images }: Props) {
  /** To open the lightbox. */
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  /** To keep track of the image index. */
  const [index, setIndex] = useState(0);

  // Trasforma l'array di stringhe in array di oggetti per il Lightbox
  const lightboxSlides = images.map(img => ({ src: img }));

  /**
   * Opens the image to visualize it better.
   * @param i index of the image to open
   */
  function openLightbox(i: number) {
    setIndex(i);
    setIsBoxOpen(true);
  }

  return (
    <>
      <Masonry
        breakpointCols={{ default: 3, 768: 2, 480: 1 }}
        className={classes.masonryGrid}
        columnClassName={classes.masonryColumn}
      >
        {images.map((image, i) => (
          <motion.img
            layoutId={`activities-${i}`}
            initial={{
              y: +100,
              opacity: 0
            }}
            whileInView={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 1,
              type: spring
            }}
            viewport={{ once: true }}
            key={i}
            src={image}
            alt=""
            onClick={() => openLightbox(i)}
            className={classes.images}
          />
        ))}
      </Masonry>
      <Lightbox 
        noScroll={{ disabled: true }} 
        open={isBoxOpen} 
        index={index} 
        close={() => setIsBoxOpen(false)} 
        slides={lightboxSlides}
      />
    </>
  )
}