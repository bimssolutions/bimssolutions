'use client'

import { motion } from 'framer-motion';

import { Suspense } from 'react';
import { PortfolioList, TitleText, TypingText } from '../../components';
import { staggerContainer } from '../utils/animations';

export default function Portfolios() {
  return (
    <section className="sm:p-16 xs:p-8 px-4 py-12 min-h-screen" id="portfolio">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col max-w-7xl mx-auto"
      >
        <TypingText title="| Portfolio" textStyles="text-center" />
        <TitleText title='Duik in onze projecten' textStyles='text-center' />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] z-10 gap-5">
          <Suspense fallback={<p>loading...</p>}>
            <PortfolioList />
          </Suspense>
        </div>
      </motion.div>
    </section>
  )
}
