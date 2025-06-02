"use client"

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import HomeBanner from "./homeBanner";
import HomeServices from "./homeServices";

const Page = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        once: true,  // Animation triggers only once
        amount: 0.3  // Triggers when 30% of the element is visible
    });
    
    return (
        <div>
            <HomeBanner />
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
            >
                <HomeServices />
            </motion.div>
        </div>
    );
}

export default Page;