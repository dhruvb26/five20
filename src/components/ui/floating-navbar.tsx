"use client";
import React from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MagicButton } from "../magic-button";
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  // You can remove the useState and useScroll hooks since we're not using them anymore

  // Always keep the navbar visible
  const visible = true; // This can now be a constant since visibility no longer changes

  return (
    <AnimatePresence mode="wait">
      {visible && ( // Since visible is always true, this check is optional
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: 0, // Always visible
            opacity: 1, // Always fully opaque
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
            className
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
          <MagicButton>
            <Link href={"/register"} className="text-xs w-full">
              Get Started
            </Link>
          </MagicButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
