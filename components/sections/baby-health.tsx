"use client"

import { type ReactNode } from "react"
import { motion } from "motion/react"
import { Baby } from "lucide-react"
import { Section } from "@/components/section"
import Image from "next/image"

const DEEP      = "#3D2810"
const ACCENT    = "#B8822A"
const BABY_BLUE = "#3FA3C8"
const GOLD      = "#B8822A"
const BLUSH     = "#EED4BC"
const IVORY     = "#FEF9F3"

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
}

function OrnamentDivider({ blue = false }: { blue?: boolean }) {
  const color = blue ? BABY_BLUE : ACCENT
  const grad  = blue ? "rgba(126,200,227,0.4)" : "rgba(207,160,107,0.4)"
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="h-px w-8 sm:w-12" style={{ background: `linear-gradient(to left, ${grad}, transparent)` }} />
      <span style={{ color, fontSize: "7px", opacity: 0.75 }}>✦</span>
      <div className="h-px w-8 sm:w-12" style={{ background: `linear-gradient(to right, ${grad}, transparent)` }} />
    </div>
  )
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="garamond" style={{ fontSize: "clamp(0.54rem, 2vw, 0.7rem)", letterSpacing: "0.48em", textTransform: "uppercase", color: BABY_BLUE, marginBottom: "0.4rem", paddingRight: "0.48em" }}>
      {text}
    </p>
  )
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="gistesy mt-2" style={{ fontSize: "clamp(2rem, 9vw, 4rem)", color: DEEP, lineHeight: 1.15, overflow: "visible", paddingTop: "0.1em" }}>
      {children}
    </h3>
  )
}

function BokehOrbs() {
  const orbs = [
    { w: 380, h: 380, top: "5%",  left: "2%",  color: BABY_BLUE, opacity: 0.09, blur: 100 },
    { w: 260, h: 260, top: "20%", left: "70%", color: GOLD,      opacity: 0.09, blur: 80  },
    { w: 300, h: 300, top: "52%", left: "10%", color: BLUSH,     opacity: 0.12, blur: 90  },
    { w: 220, h: 220, top: "68%", left: "74%", color: BABY_BLUE, opacity: 0.09, blur: 70  },
    { w: 180, h: 180, top: "38%", left: "44%", color: GOLD,      opacity: 0.07, blur: 60  },
  ]
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {orbs.map((o, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: o.w,
            height: o.h,
            top: o.top,
            left: o.left,
            background: o.color,
            opacity: o.opacity,
            filter: `blur(${o.blur}px)`,
          }}
        />
      ))}
    </div>
  )
}

export function BabyHealth() {
  return (
    <Section id="baby-health" className="relative py-16 sm:py-20 md:py-24 overflow-hidden" bgColor="none">
      <div className="absolute inset-0 -z-10" style={{ background: IVORY }} />

      <div className="absolute inset-0 -z-10 pointer-events-none" style={{
        background: `
          linear-gradient(180deg,
            rgba(215,237,248,0.45) 0%,
            rgba(251,244,234,0.0)  25%,
            rgba(213,238,248,0.30) 50%,
            rgba(251,244,234,0.0)  75%,
            rgba(238,212,188,0.35) 100%
          )
        `,
      }} />

      <div className="absolute inset-0 -z-10 pointer-events-none" style={{
        background: `repeating-linear-gradient(
          125deg,
          transparent 0px,
          transparent 160px,
          rgba(255,255,255,0.22) 160px,
          rgba(255,255,255,0.22) 162px
        )`,
      }} />

      <BokehOrbs />

      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 50% 40% at 50% 28%, rgba(63,163,200,0.10) 0%, transparent 70%),
            radial-gradient(ellipse 38% 32% at 50% 78%, rgba(184,130,42,0.08) 0%, transparent 65%)
          `,
        }} />
      </div>

      <div className="absolute inset-0 pointer-events-none z-[1]">
        <Image src="/decoration/left-top-removebg-preview.png"    alt="" width={200} height={200} aria-hidden className="absolute top-0 left-0  w-auto h-auto max-w-[110px] sm:max-w-[155px] md:max-w-[200px] opacity-45" />
        <Image src="/decoration/right-top-removebg-preview.png"   alt="" width={200} height={200} aria-hidden className="absolute top-0 right-0 w-auto h-auto max-w-[110px] sm:max-w-[155px] md:max-w-[200px] opacity-45" />
        <Image src="/decoration/bottom-left-removebg-preview.png"  alt="" width={200} height={200} aria-hidden className="absolute bottom-0 left-0  w-auto h-auto max-w-[110px] sm:max-w-[155px] md:max-w-[200px] opacity-45" />
        <Image src="/decoration/bottom-right-removebg-preview.png" alt="" width={200} height={200} aria-hidden className="absolute bottom-0 right-0 w-auto h-auto max-w-[110px] sm:max-w-[155px] md:max-w-[200px] opacity-45" />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6"
        custom={0}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        <div className="text-center mb-6 sm:mb-8">
          <SectionLabel text="A Little Note from Me" />
          <OrnamentDivider blue />
          <SectionTitle>Baby&apos;s Health</SectionTitle>
        </div>

        <div
          className="rounded-3xl p-5 sm:p-8 transition-all duration-300"
          style={{
            background: "rgba(254,249,243,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(184,130,42,0.16)",
            boxShadow: "0 6px 28px rgba(61,40,16,0.09), 0 2px 8px rgba(61,40,16,0.05)",
          }}
        >
          <div className="flex flex-col items-center mb-5">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center mb-2.5 shadow-sm"
              style={{ background: "rgba(63,163,200,0.12)", border: "1.5px solid rgba(123,190,221,0.45)" }}
            >
              <Baby className="w-5 h-5" style={{ color: BABY_BLUE }} />
            </div>
          </div>

          <div className="garamond text-center space-y-2 max-w-xl mx-auto" style={{ fontSize: "clamp(0.82rem, 2.8vw, 0.95rem)", color: `${DEEP}cc`, lineHeight: 1.85 }}>
            <p>My immune system is still tiny and growing, so please come only if you&apos;re feeling healthy and well.</p>
            <p>Please sanitize your hands before carrying me and kindly avoid kissing me for now.</p>
            <p style={{ color: DEEP }}>Thank you for helping keep me safe on my special day! 🤍</p>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
