import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";


export default function Sequences() {
  const headlineControls = useAnimationControls();
  const paragraphControls = useAnimationControls();

  useEffect(() => {
    const run = async () => {
      headlineControls.set({
        x: -100,
        y: 200,
        skew: 20,
        opacity: 0,
      });
      paragraphControls.set({
        x: 100,
        y: 100
      });

      await headlineControls.start((i) => ({
        x: 100,
        skew: 0,
        opacity: 1,
        transition: {
          delay: i * 1,
        }
      }));
      await headlineControls.start({
        scaleY: 0,
        opacity: 0,
        transition: {
          delay: 1.5,
          stiffness: 0,
        }
      })
      await paragraphControls.start({
        opacity: 1,
        transition: {
          // type: "tween",
          delay: 1.5,
          duration: 5,
          ease: "linear",
        }
      });
    };

    run().then();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden" style={{ fontSize: '12rem', lineHeight: 1 }}>
      <div>
        <motion.h1
          className="font-black font-serif uppercase text-zinc-50"
          initial={{ opacity: 0 }}
          animate={headlineControls}
          custom={0}
        >
          Hello
        </motion.h1>
        <motion.h1
          className="font-black font-serif uppercase text-zinc-50"
          initial={{ opacity: 0 }}
          animate={headlineControls}
          custom={1}
        >
          just some
        </motion.h1>
        <motion.h1
          className="font-black font-serif uppercase text-zinc-50"
          initial={{ opacity: 0 }}
          animate={headlineControls}
          custom={2}
        >
          Headline Text
        </motion.h1>
        <motion.p
          className="font-black text-zinc-50 block text-2xl w-2/5 absolute"
          initial={{ opacity: 0 }}
          animate={paragraphControls}
        >
          Why are we still here? Just to suffer? Every night, I can feel my leg… and my arm… even my fingers. The body I’ve lost… the comrades I’ve lost… won’t stop hurting. It’s like they’re all still there. You feel it, too, don’t you?
        </motion.p>
      </div>
    </div>
  );
}
