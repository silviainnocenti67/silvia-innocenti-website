import { motion } from "motion/react";

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
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0px",
        left: "0px",
        zIndex: 19,
        backgroundColor: "black"
      }}
      onClick={funct}
    />
  );
}