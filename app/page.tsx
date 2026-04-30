import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center font-sans overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg,
                #f0f4ff 0%,
                #e6f0ff 25%,
                #e0ebff 50%,
                #f0f4ff 75%,
                #f0f4ff 100%
              )
            `,
          }}
        />

        {/* Animated gradient orbs */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"
          style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"
          style={{
            background: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{
            background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
            animationDelay: "2s",
          }}
        />
      </div>

      <main className="relative z-10 w-full max-w-5xl px-6 sm:px-12 py-20 flex flex-col items-center gap-16">
        {/* Header with logo */}
        <div className="flex flex-col items-center gap-8 w-full">
          <div
            className="p-3 rounded-2xl backdrop-blur-md"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(14,165,233,0.15) 100%)",
              border: "2px solid",
              borderImage:
                "linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%) 1",
            }}
          >
            <Image
              src="/next.svg"
              alt="Next.js logo"
              width={120}
              height={25}
              priority
            />
          </div>

          {/* Hero content */}
          <div className="flex flex-col items-center gap-6 text-center max-w-3xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(14,165,233,0.2) 100%)",
                border: "1.5px solid",
                borderImage:
                  "linear-gradient(135deg, #60a5fa 0%, #38bdf8 100%) 1",
                color: "#2563eb",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)",
                  boxShadow: "0 0 12px rgba(59,130,246,0.8)",
                }}
              />
              Next.js App Router
            </div>

            {/* Main heading with gradient */}
            <h1
              className="text-5xl sm:text-6xl font-black leading-tight tracking-tighter"
              style={{
                background:
                  "linear-gradient(135deg, #2563eb 0%, #1d4ed8 25%, #0ea5e9 50%, #38bdf8 75%, #60a5fa 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Build the Future
            </h1>

            {/* Subheading */}
            <p
              className="text-xl sm:text-2xl font-semibold max-w-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #1d4ed8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Modern web experiences, powered by Next.js
            </p>

            {/* Description with gradient text links */}
            <p
              className="text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: "#334155" }}
            >
              Edit{" "}
              <code
                className="font-mono font-bold px-2 py-1 rounded-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(14,165,233,0.15) 100%)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  color: "#1d4ed8",
                }}
              >
                app/page.tsx
              </code>{" "}
              to get started. Explore{" "}
              <a
                href="https://vercel.com/templates?framework=next.js"
                className="font-bold transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Templates
              </a>{" "}
              and{" "}
              <a
                href="https://nextjs.org/learn"
                className="font-bold transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Documentation
              </a>
              .
            </p>
          </div>

          {/* Feature tags */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {[
              { label: "Server Components", gradient1: "#2563eb", gradient2: "#60a5fa" },
              { label: "Streaming", gradient1: "#0ea5e9", gradient2: "#38bdf8" },
              { label: "TypeScript", gradient1: "#1d4ed8", gradient2: "#0284c7" },
              { label: "Tailwind CSS", gradient1: "#3b82f6", gradient2: "#0369a1" },
            ].map((feature) => (
              <div
                key={feature.label}
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide"
                style={{
                  background: `linear-gradient(135deg, ${feature.gradient1}20 0%, ${feature.gradient2}20 100%)`,
                  border: `1.5px solid`,
                  borderImage: `linear-gradient(135deg, ${feature.gradient1} 0%, ${feature.gradient2} 100%) 1`,
                  color: feature.gradient1,
                }}
              >
                {feature.label}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 pt-8">
          {/* Primary button */}
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 sm:px-12 py-4 rounded-full font-bold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #2563eb 0%, #0ea5e9 50%, #38bdf8 100%)",
              boxShadow: "0 10px 40px rgba(37,99,235,0.4)",
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Image
                src="/vercel.svg"
                alt="Vercel"
                width={20}
                height={20}
                className="invert"
              />
              Deploy Now
            </span>
          </a>

          {/* Secondary button */}
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 sm:px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(14,165,233,0.1) 100%)",
              border: "2.5px solid",
              borderImage:
                "linear-gradient(135deg, #2563eb 0%, #0ea5e9 50%, #38bdf8 100%) 1",
              color: "#1d4ed8",
            }}
          >
            <span className="relative z-10">Documentation</span>
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(14,165,233,0.2) 100%)",
              }}
            />
          </a>
        </div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-3 gap-6 pt-12 w-full max-w-3xl">
          {[
            { title: "Fast", desc: "Optimized for speed and performance" },
            { title: "Scalable", desc: "Grows with your application needs" },
            { title: "Modern", desc: "Built with the latest web standards" },
          ].map((card, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(14,165,233,0.12) 100%)",
                border: "1.5px solid",
                borderImage: `linear-gradient(135deg, #60a5fa 0%, #38bdf8 100%) 1`,
              }}
            >
              <h3
                className="font-bold text-lg mb-2"
                style={{
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {card.title}
              </h3>
              <p style={{ color: "#475569" }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
