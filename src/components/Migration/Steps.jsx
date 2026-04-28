import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    title: 'Set Up Your Connectors',
    description:
      'Enter your Microsoft 365 and Google Workspace credentials once. Connectors are saved globally and reused across every project - no re-entering credentials for each migration.',
    tags: ['Microsoft 365', 'Google Workspace'],
  },
  {
    title: 'Create A Project',
    description:
      'A project ties together your source and destination. Set domain name rules for cross-tenant/domain moves. Projects can be archived when complete and reopened if you need to revisit them.',
    tags: ['Source → Destination', 'Domain rules'],
  },
  {
    title: "Discover What's There",
    description:
      "Run Discovery to pull the list of SharePoint sites, drives, and mailboxes from the source platform. Everything is saved as a snapshot so you're mapping against real data - not guesswork.",
    tags: ['SharePoint sites', 'Drives & mailboxes', 'User & permissions'],
  },
  {
    title: 'Configure What Moves Where',
    description:
      'Map each SharePoint site or shared drive to its destination. Choose whether to create a new destination drive or map to an existing one. Set up mailbox batches and per-module options. This is all configuration - nothing runs yet.',
    tags: ['Site mapping', 'Mailbox batches', 'Copy or sync'],
  },
  {
    title: 'Start Jobs And Watch Them Run',
    description:
      'Switch to Migrate and see every job in one table - files, email, calendar, contacts, and OneDrive. Hit Start All or start individual jobs. Live progress, current file, and errors update in real time.',
    tags: ['One unified view', 'Start All / Stop All', 'Live progress'],
  },
  {
    title: 'Restart Any Time, Pick Up Where You Left Off',
    description:
      'If the app closes mid-run - or your machine restarts - job state is already saved. Open Patronum Migrate again and it reconciles any interrupted work automatically. Long transfers also handle credential refreshes on their own.',
    tags: ['Saved state', 'Auto-recovery'],
  },
]

const CIRCLE_SIZE = 48

const Steps = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepNodes = gsap.utils.toArray('.step-node')
      const stepContents = gsap.utils.toArray('.step-content')
      const lineFills = gsap.utils.toArray('.step-line-fill')

      const isMobile =
        typeof globalThis !== 'undefined' && globalThis.innerWidth <= 768

      if (isMobile) {
        gsap.set(stepNodes, {
          opacity: 1,
          scale: 1,
          clearProps: 'willChange',
        })

        gsap.set(stepContents, {
          opacity: 1,
          y: 0,
        })

        gsap.set(lineFills, {
          scaleY: 1,
        })

        return
      }

      gsap.set(stepNodes, {
        opacity: 0,
        scale: 0.85,
        transformOrigin: 'center center',
        willChange: 'transform, opacity',
      })

      gsap.set(stepContents, {
        opacity: 0,
        y: 30,
        willChange: 'transform, opacity',
      })

      gsap.set(lineFills, {
        scaleY: 0,
        transformOrigin: 'top center',
        willChange: 'transform',
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 75%',
          scrub: 1.2,
        },
      })

      lineFills.forEach((line, index) => {
        tl.to(
          line,
          {
            scaleY: 1,
            ease: 'none',
            duration: 0.9,
          },
          index * 1
        )
      })

      stepNodes.forEach((node, index) => {
        tl.to(
          node,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'power3.out',
          },
          index * 1 
        )
      })

      stepContents.forEach((content, index) => {
        tl.to(
          content,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
          },
          index * 1 + 0.25
        )
      })

      tl.set([...stepNodes, ...stepContents, ...lineFills], {
        clearProps: 'willChange',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="steps-section" ref={sectionRef} className="py-[10vw]">
      <div className="container mx-auto">
        <div className="lg:flex items-start justify-between">
          <h2 className="title-4xl text-anim">
            <span>Six Steps, Every </span>
            <br />
            <span>Migration</span>
          </h2>

          <p className="content-p lg:w-1/3 w-[95%] lg:mt-[1vw] mt-[5vw] text-anim-2">
            <span>
              A consistent, predictable path from first setup to jobs running -
              no surprises mid-project.
            </span>
          </p>
        </div>

        <div className="mt-[8vw] flex flex-col gap-[8vw] lg:gap-[6vw]">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1

            return (
              <div
                key={step.title}
                className="relative lg:grid-cols-[48px_1fr] grid-cols-[55px_1fr] grid gap-[4vw] lg:gap-[2vw]"
              >
                <div
                  className="relative flex justify-center lg:w-[48px] w-[55px]"
                >
                  <div
                    className="step-node relative z-10 flex items-center justify-center rounded-full bg-[#1069DF] lg:w-[48px] lg:h-[48px] w-[55px] h-[55px]"
                  >
                    <span className="text-white font-bold lg:text-[18px] text-[20px] leading-none select-none">
                      {index + 1}
                    </span>
                  </div>

                  {!isLast && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-[1px] overflow-hidden lg:top-[48px] top-[55px] lg:-bottom-[6vw] -bottom-[10vw]"
                    >
                      <div className="step-line-fill h-full w-full bg-black origin-top" />
                    </div>
                  )}
                </div>

                <div className="step-content flex-1">
                  <h3 className="lg:text-[2.5vw] aeonik text-[5vw]">
                    {step.title}
                  </h3>

                  <p className="content-p mt-[1vw] lg:w-[48%] w-full">
                    {step.description}
                  </p>

                  <div className="flex flex-wrap lg:gap-[1vw] lg:mt-[1.5vw] gap-[2vw] mt-[2.5vw]">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#D3D8E3] lg:px-[1vw] lg:py-[0.5vw] lg:text-[0.9vw] text-[2.8vw] text-[#4D5760] px-[2vw] py-[1vw]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Steps