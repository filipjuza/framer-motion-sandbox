import { useMemo, useState } from "react";
import { motion } from "framer-motion";

function* orderGeneratorFactory() {
  const variants = [
    [0, 1, 2, 3],
    [0, 1, 3, 2],
    [0, 2, 1, 3],
    [0, 2, 3, 1],
    [0, 3, 1, 2],
    [0, 3, 2, 1],
    [1, 0, 2, 3],
    [1, 0, 3, 2],
    [1, 2, 0, 3],
    [1, 2, 3, 0],
    [1, 3, 0, 2],
    [1, 3, 2, 0],
    [2, 0, 1, 3],
    [2, 0, 3, 1],
    [2, 1, 0, 3],
    [2, 1, 3, 0],
    [2, 3, 0, 1],
    [2, 3, 1, 0],
    [3, 0, 1, 2],
    [3, 0, 2, 1],
    [3, 1, 0, 2],
    [3, 1, 2, 0],
    [3, 2, 0, 1],
    [3, 2, 1, 0],
  ];

  while (true) {
    yield variants[Math.floor(Math.random() * variants.length)];
  }
}

export default function Keyframes() {
  const [items, setItems] = useState([0, 1, 2, 3]);
  const genOrder = useMemo(() => orderGeneratorFactory(), []);

  return (
    <>
      <button
        className="absolute left-2 top-40 rounded border border-slate-300 px-5 py-2 text-amber-50"
        onClick={() => setItems(genOrder.next().value ?? [])}
      >
        shuffle
      </button>
      <div className="flex min-h-screen items-center justify-center gap-4">
        {items.map((i) => (
          <motion.div
            className="box flex items-center justify-center rounded-xl bg-zinc-50 text-2xl"
            key={i}
            layout
          >
            {i}
          </motion.div>
        ))}
      </div>
    </>
  );
}
