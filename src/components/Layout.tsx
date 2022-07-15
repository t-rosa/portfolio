import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  direction: "right" | "left";
};

const variantsLeft = {
  hidden: { opacity: 0, x: -300, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};
const variantsRight = {
  hidden: { opacity: 0, x: 300, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

function Layout({ children, direction }: Props) {
  if (direction === "right") {
    return (
      <div>
        <motion.div
          initial="hidden"
          animate="enter"
          variants={variantsRight}
          transition={{ type: "easeInOut", duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    );
  }
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variantsLeft}
        transition={{ type: "easeInOut", duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Layout;
