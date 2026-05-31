"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Church, Heart } from "lucide-react"

const CELEBRANT_VIDEO = "/desktop_background/video (2).mov"

const NAVY        = "#2B4A6B"
const DARK_NAVY   = "#1C3050"
const GOLD        = "#C4965A"
const NAVY_MUTE   = "rgba(65,90,115,0.78)"

const FROSTED_CARD = {
  background: "rgba(255,255,255,0.30)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1.5px solid rgba(43,74,107,0.22)",
  boxShadow: "0 4px 24px rgba(43,74,107,0.08), 0 1px 0 rgba(255,255,255,0.55) inset",
} as const

function OrnamentDivider() {
  return (
    <div className="flex items-center justify-center gap-2" style={{ maxWidth: "240px", margin: "0 auto" }}>
      <div className="h-px flex-1" style={{ background: "linear-gradient(to left, rgba(196,152,88,0.45), transparent)" }} />
      <div style={{ width: "6px", height: "6px", borderRadius: "1px", transform: "rotate(45deg)", background: "rgba(196,152,88,0.68)", flexShrink: 0 }} />
      <div className="h-px flex-1" style={{ background: "linear-gradient(to right, rgba(196,152,88,0.45), transparent)" }} />
    </div>
  )
}

function CelebrantVideo() {
  return (
    <div
      className="max-w-sm mx-auto mb-6 rounded-2xl overflow-hidden border-2 shadow-md"
      style={{
        borderColor: "rgba(196,152,88,0.45)",
        boxShadow: "0 8px 28px rgba(43,74,107,0.12)",
      }}
    >
      <video
        src={CELEBRANT_VIDEO}
        className="w-full aspect-[3/4] object-cover block"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label="Video with Rev. Fr. Anthony Almazan"
      />
    </div>
  )
}

function BokehOrbs() {
  const orbs = [
    { w: 360, h: 360, top: "6%",  left: "4%",  color: "rgba(120,175,215,1)", opacity: 0.08, blur: 95 },
    { w: 240, h: 240, top: "22%", left: "72%", color: "rgba(196,152,88,1)",  opacity: 0.08, blur: 75 },
    { w: 280, h: 280, top: "58%", left: "10%", color: "rgba(196,152,88,1)",  opacity: 0.07, blur: 85 },
    { w: 200, h: 200, top: "72%", left: "78%", color: "rgba(120,175,215,1)", opacity: 0.08, blur: 65 },
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

export function Celebrant() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "#FFFFFF" }} />
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 30%, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.6) 45%, transparent 75%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(120,175,215,0.10) 0%, rgba(120,175,215,0.04) 25%, transparent 55%)",
        }}
      />
      <BokehOrbs />

      <section id="celebrant" className="relative z-10 py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden>
          <Image
            src="/decoration/left-top-removebg-preview.png"
            alt=""
            width={180}
            height={180}
            className="absolute top-0 left-0 w-auto h-auto max-w-[100px] sm:max-w-[140px] md:max-w-[180px] opacity-40"
          />
          <Image
            src="/decoration/right-top-removebg-preview.png"
            alt=""
            width={180}
            height={180}
            className="absolute top-0 right-0 w-auto h-auto max-w-[100px] sm:max-w-[140px] md:max-w-[180px] opacity-40"
          />
        </div>

        <motion.div
          className="relative z-30 max-w-3xl mx-auto px-4 sm:px-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-7 sm:mb-8">
            <p
              style={{
                fontFamily: '"Cinzel", serif',
                fontSize: "clamp(0.52rem, 1.9vw, 0.64rem)",
                letterSpacing: "0.40em",
                textTransform: "uppercase",
                color: "rgba(72,112,148,0.80)",
                marginBottom: "0.4rem",
                paddingRight: "0.40em",
              }}
            >
              Our Celebrant
            </p>
            <OrnamentDivider />
            <h2
              className="mt-4"
              style={{
                fontFamily: "AmsterdamOne, cursive",
                fontSize: "clamp(2.4rem, 11vw, 5rem)",
                color: GOLD,
                lineHeight: 1.1,
                letterSpacing: "0.02em",
              }}
            >
              A Blessed Connection
            </h2>
            <OrnamentDivider />
          </div>

          <div className="rounded-3xl overflow-hidden" style={FROSTED_CARD}>
            <div
              className="relative p-6 sm:p-9 md:p-10 text-center overflow-hidden"
              style={{ background: "rgba(255,255,255,0.20)" }}
            >
              <span
                className="absolute top-3 left-5 select-none pointer-events-none"
                style={{
                  fontSize: "5rem",
                  lineHeight: 1,
                  color: GOLD,
                  opacity: 0.08,
                  fontFamily: "Georgia, serif",
                }}
              >
                &#8220;
              </span>
              <span
                className="absolute bottom-3 right-5 select-none pointer-events-none"
                style={{
                  fontSize: "5rem",
                  lineHeight: 1,
                  color: GOLD,
                  opacity: 0.08,
                  fontFamily: "Georgia, serif",
                }}
              >
                &#8221;
              </span>

              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-md mx-auto mb-5"
                style={{
                  background: "rgba(196,152,88,0.10)",
                  border: "2px solid rgba(196,152,88,0.35)",
                  boxShadow: "0 0 22px rgba(196,152,88,0.12), 0 2px 8px rgba(43,74,107,0.08)",
                }}
              >
                <Church className="w-6 h-6" style={{ color: GOLD }} />
              </div>

              <p
                style={{
                  fontFamily: '"Cinzel", serif',
                  fontWeight: 600,
                  fontSize: "clamp(1rem, 3.2vw, 1.25rem)",
                  color: DARK_NAVY,
                  lineHeight: 1.5,
                  marginBottom: "1.25rem",
                }}
              >
                Rev. Fr. Anthony Almazan, OFM Cap.
              </p>

              <CelebrantVideo />

              <div className="space-y-4 max-w-xl mx-auto">
                <p
                  style={{
                    fontFamily: '"Fahkwang", sans-serif',
                    fontSize: "clamp(0.88rem, 2.8vw, 1.02rem)",
                    color: NAVY,
                    lineHeight: 1.9,
                    fontStyle: "italic",
                  }}
                >
                  I will be baptized by Rev. Fr. Anthony Almazan, OFM Cap.,
                </p>
                <p
                  style={{
                    fontFamily: '"Fahkwang", sans-serif',
                    fontSize: "clamp(0.84rem, 2.6vw, 0.98rem)",
                    color: NAVY_MUTE,
                    lineHeight: 1.9,
                  }}
                >
                  the same priest who prayed over Mommy and Daddy when they were still hoping and praying for me.
                </p>
                <p
                  style={{
                    fontFamily: '"Fahkwang", sans-serif',
                    fontSize: "clamp(0.88rem, 2.8vw, 1.02rem)",
                    color: NAVY,
                    lineHeight: 1.9,
                    fontStyle: "italic",
                  }}
                >
                  What a beautiful blessing to have him celebrate this special day with us.
                </p>
              </div>
            </div>

            <div
              className="px-5 sm:px-8 py-5 text-center border-t"
              style={{ background: "rgba(255,255,255,0.15)", borderColor: "rgba(43,74,107,0.12)" }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="w-3.5 h-3.5" fill={GOLD} style={{ color: GOLD, opacity: 0.75 }} />
                <Heart className="w-4 h-4" fill={GOLD} style={{ color: GOLD, opacity: 0.95 }} />
                <Heart className="w-3.5 h-3.5" fill={GOLD} style={{ color: GOLD, opacity: 0.75 }} />
              </div>
              <p
                style={{
                  fontFamily: '"Fahkwang", sans-serif',
                  fontSize: "clamp(0.78rem, 2.4vw, 0.9rem)",
                  color: NAVY_MUTE,
                  fontStyle: "italic",
                  lineHeight: 1.75,
                }}
              >
                From their prayers to my baptism — faith carried through every step.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
