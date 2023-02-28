import { useState } from "react";
import { motion, Variants } from "framer-motion";

const tags = [
  "Mandatory paradigms",
  "Proactive partnerships",
  "Seamless markets",
  "Team-oriented",
  "Grass-roots",
  "Synergistic supply-chains",
  "Extended e-markets",
  "Right-sized architectures",
  "Cross-platform",
] as const;

const containerVariants: Variants = {
  initial: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.05,
    },
  },
};

const tagVariants: Variants = {
  initial: {
    y: 10,
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
};

export default function VariantsPage() {
  const [selected, setSelected] = useState<boolean[]>(new Array(tags.length).fill(false));

  const handleSelect = (i: number) => {
    setSelected((state) => {
      const newState = [...state];

      newState[i] = !newState[i];
      return newState;
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        className="flex max-w-3xl flex-wrap justify-center gap-3 rounded-xl bg-zinc-50 px-12 py-24"
        variants={containerVariants}
        initial="initial"
        animate="visible"
      >
        {tags.map((tag, i) => (
          <motion.div
            key={tag}
            className={`cursor-pointer rounded-full py-4 px-6 leading-none transition-colors ${
              selected[i]
                ? "bg-blue-700 text-white"
                : "bg-blue-100 text-blue-700"
            }`}
            onClick={() => handleSelect(i)}
            variants={tagVariants}
            transition={{
              bounce: 0,
              ease: "easeOut",
            }}
          >
            {tag}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
