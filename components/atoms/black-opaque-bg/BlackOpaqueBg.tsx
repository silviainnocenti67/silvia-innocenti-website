import { motion } from "motion/react";
import classes from "./BlackOpaqueBg.module.scss";

type Props = {
  /** Function to be called on click. */
  funct: React.MouseEventHandler<HTMLDivElement>
}

/**
 * Black opaque background component.
 */
export default function BlackOpaqueBg({ funct }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      className={classes.blackOpaqueBg}
      onClick={funct}
    />
  );
}