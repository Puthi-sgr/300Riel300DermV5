import React, { useEffect, useState, lazy, Suspense } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const Hero = lazy(() => import("./view/Hero"));
const Problem = lazy(() => import("./view/Problem"));
const Mission = lazy(() => import("./view/Mission"));
const Timeline = lazy(() => import("./view/Timeline"));
const ExpectedImpact = lazy(() => import("./view/ExpectedImpact"));
const SponsorPackage = lazy(() => import("./view/SponsorPackage"));
const WhyUs = lazy(() => import("./view/WhyUs"));
const Team = lazy(() => import("./view/Team"));
const FinalCTA = lazy(() => import("./view/FinalCTA"));


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.2, 0.6, 0.3, 1] },
  },
};

const BookProjectPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="book-loading"
          className="relative min-h-screen w-full bg-gradient-to-br from-[#f5fdf9] via-white to-[#eef6ee]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      ) : (
        <motion.main
          key="book-content"
          className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#f5fdf9] via-white to-[#eef6ee] py-12 sm:py-14 lg:px-0 sm:px-6 px-4"
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          animate={prefersReducedMotion ? false : "show"}
          exit={prefersReducedMotion ? false : "hidden"}
        >
          <motion.div
            variants={prefersReducedMotion ? undefined : itemVariants}
            className="w-full mx-auto space-y-16 sm:space-y-20"
          >
            <Suspense fallback={<div className="h-32" />}>
              <Hero />
            </Suspense>
            <Suspense fallback={<div className="h-32" />}>
              <Problem />
            </Suspense>
            <Suspense fallback={<div className="h-32" />}>
              <Mission />
            </Suspense>
            <Suspense fallback={<div className="h-32" />}>
              <Timeline />
            </Suspense>
            <Suspense fallback={<div className="h-32" />}>
              <ExpectedImpact />
            </Suspense>
            <Suspense fallback={<div className="h-32" />}>
              <SponsorPackage />
            </Suspense>
            <Suspense fallback={<div className="h-32" />}>
              <WhyUs />
            </Suspense>
            <Suspense fallback={<div className="h-32" />}>
              <Team />
            </Suspense>
            <Suspense fallback={<div className="h-32" />}>
              <FinalCTA />
            </Suspense>
          </motion.div>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default BookProjectPage;
