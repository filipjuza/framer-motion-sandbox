import { useState } from "react";
import { motion } from "framer-motion";

/**
 * See https://codesandbox.io/s/evermade-birdsona-creator-example-dii3t7?from-embed=&file=/src/App.tsx
 * Ye olde transforms https://lea.verou.me/2012/02/moving-an-element-along-a-circle/
 */
export default function Arcs() {
  const [show, setShow] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        className="absolute left-2 top-32 rounded border border-slate-300 px-5 py-2 text-amber-50"
        onClick={() => setShow((s) => !s)}
      >
        show
      </button>

      {show && (
        <>
          <div className="w-1/2 relative">
            <motion.div
              className="box bg-fuchsia-500 absolute bottom-0"
              animate={{
                y: [null, -100, 0],
                x: 200,
              }}
              transition={{
                type: 'tween',
              }}
            ></motion.div>
            <motion.div
              className="box bg-amber-50 absolute bottom-0"
              animate={{
                y: [null, -100, 0],
                x: 200,
              }}
              transition={{
                duration: 0.4,
              }}
            ></motion.div>
            <div className="border-zinc-50 border"></div>
          </div>
        </>
      )}
    </div>
  );
}
