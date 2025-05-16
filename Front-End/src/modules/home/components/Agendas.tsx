"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type AgendaListProps = {
  title: string;
  children: ReactNode;
};

const Agendas = ({ title, children }: AgendaListProps) => {
  return (
    <section className="space-y-6">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-lg font-medium tracking-tight text-transparent md:text-4xl"
      >
        {title}
      </motion.h1>

      {children}
    </section>
  );
};

export default Agendas;
