import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Keyframes() {
  const dragContainerRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const background = useTransform(y, [0, 200], ["#fafafa", "#27272a"]);

  return (
    <motion.div
      className="flex min-h-screen items-center justify-center"
      style={{ background }}
    >
      <motion.div className="w-min rounded-2xl border p-2">
        <motion.div ref={dragContainerRef} style={{ height: 300 }}>
          <motion.div
            className="box drag cursor-grab rounded-2xl border border-slate-400 bg-zinc-50"
            drag="y"
            style={{ y }}
            dragConstraints={dragContainerRef}
            dragElastic={0.1}
            // dragMomentum={false}
          ></motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
