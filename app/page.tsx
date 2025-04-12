"use client";

import { motion } from "framer-motion";
import { HeadingSection } from "@/components/HeadingSection";
import { IntroductionSection } from "@/components/IntroductionSection";
import { WorkSection } from "@/components/WorkSection";
import { SocialLinks } from "@/components//SocialLinks";
import { social } from "@/utilities/socials";
import { ClarityScript } from "@/components/ClarityScript";

export default function Home() {
  return (
    <>
      <ClarityScript />
      <motion.div
        initial="initial"
        animate="animate"
        className="flex flex-col gap-y-5"
      >
        <HeadingSection />
        <IntroductionSection />
        <WorkSection />
        <SocialLinks socials={social} />
      </motion.div>
    </>
  );
}
