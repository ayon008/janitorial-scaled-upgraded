"use client"

import { Progress } from "@/components/ui/progress"
import { poppins } from "@/fonts/poppins"
import { useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useMotionValue } from "framer-motion"

export function ProgressDemo({ service, progressValue, bgColor }: { service: string, progressValue: number, bgColor: string }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    const motionValue = useMotionValue(13)
    const [progress, setProgress] = useState(13)

    // Animate value from 13 to 85 with linear interpolation
    useEffect(() => {
        if (isInView) {
            const from = 13
            const to = progressValue
            const duration = 500 // 1 second
            const start = performance.now()

            function animate(now: number) {
                const elapsed = now - start
                const t = Math.min(elapsed / duration, 1) // linear time
                const value = from + (to - from) * t
                motionValue.set(value)
                if (t < 1) requestAnimationFrame(animate)
            }

            requestAnimationFrame(animate)
        }
    }, [isInView, motionValue])

    // Sync motionValue to React state
    useEffect(() => {
        const unsubscribe = motionValue.on("change", (v) => {
            setProgress(Math.round(v))
        })
        return () => unsubscribe()
    }, [motionValue])

    return (
        <div ref={ref}>
            <div className="flex items-center justify-between mb-4">
                <p className={`text-base font-light ${poppins.className}`}>{service}</p>
                <p className={`text-base font-light ${poppins.className}`}>{progress}%</p>
            </div>
            <Progress value={progress} indicatorClassName={`${bgColor}`} />
        </div>
    )
}
