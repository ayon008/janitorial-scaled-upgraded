'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SlideRight = ({ children, delay = 0, amount = 0.5 }: { children: React.ReactNode, delay?: number, amount?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 200 }} // Less distance for better performance on small devices
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: delay
            }}
            viewport={{ once: true }}
            className="transform-gpu"
        >
            {children}
        </motion.div>
    );
};

export default SlideRight;