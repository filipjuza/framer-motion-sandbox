import { motion } from "framer-motion";

export default function Keyframes() {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center py-64">
        {["🫐", "🥥", "🍍", "🫑", "🥬"].map((i) => (
          <div className="-mb-32" key={i.toString()}>
            <motion.div
              className="w-min rounded-3xl border bg-zinc-50 px-32 py-44 text-9xl"
              initial={{ rotate: 0, y: 300 }}
              whileInView={{ rotate: -10, y: 50 }}
              viewport={{
                margin: "-200px",
                once: true,
              }}
            >
              {i}
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
}
