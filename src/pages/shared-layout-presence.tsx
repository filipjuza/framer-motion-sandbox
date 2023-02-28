import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Keyframes() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = useMemo(
    () => [
      { id: 0, title: "Lettuce", icon: "🥬" },
      { id: 1, title: "Carrot", icon: "🥕" },
      { id: 2, title: "Tomato", icon: "🍅" },
    ],
    []
  );

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-lg bg-zinc-50 shadow-lg">
        <div className="flex border-b p-1 pb-0">
          {tabs.map((tab) => (
            <div className="flex-col" key={tab.id}>
              <motion.div
                className={`flex cursor-pointer items-center rounded-t-md py-3 px-4 pr-12 transition-colors hover:bg-zinc-100 ${
                  activeTab === tab.id ? "bg-zinc-100" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon} {tab.title}
              </motion.div>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tabs-underline"
                  className="-mb-px border-t border-fuchsia-500"
                ></motion.div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center px-6 py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="text-9xl"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {tabs[activeTab].icon}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
