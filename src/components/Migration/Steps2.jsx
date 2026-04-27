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
      'A project ties together your source and destination. Set domain name rules for cross-Patronum moves. Projects can be archived when complete and reopened if you need to revisit them.',
    tags: ['Source → Destination', 'Domain rules'],
  },
  {
    title: "Discover What's There",
    description:
      'Run Discovery to pull the list of SharePoint sites, drives, and mailboxes from the source Patronum. Everything is saved as a snapshot so you’re mapping against real data - not guesswork.',
    tags: ['SharePoint sites', 'Drives & mailboxes', 'User & permissions'],
  },
  {
    title: 'Configure What Moves Where',
    description:
      'Map each SharePoint site or shared drive to its destination. Choose whether to create a new destination drive or map to an existing one. Set up mailbox batches and per-module options.This is all configuration - nothing runs yet.',
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
      'If the app closes mid-run - or your machine restarts - job state is already saved. Open Patronum again and it reconciles any interrupted work automatically. Long transfers also handle credential refreshes on their own.',
    tags: ['Saved state', 'Auto-recovery'],
  },
]

const Steps = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = typeof globalThis !== 'undefined' && globalThis.innerWidth <= 768
      const linePath = sectionRef.current?.querySelector('.step-line-path')
      const stepGroups = sectionRef.current?.querySelectorAll('.step-node-group')
      const stepContents = gsap.utils.toArray('.step-content')

      if (isMobile) {
        if (stepGroups.length) {
          gsap.set(stepGroups, { opacity: 1, y: 0 })
        }
        if (stepContents.length) {
          gsap.set(stepContents, { opacity: 1, y: 0 })
        }

        gsap.fromTo(
          sectionRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power1.out' }
        )
        return
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: '+=1700',
          scrub: 1,
        },
      })

      if (linePath) {
        const pathLength = linePath.getTotalLength()
        linePath.style.strokeDasharray = pathLength
        linePath.style.strokeDashoffset = pathLength

        tl.fromTo(
          linePath,
          { strokeDashoffset: pathLength },
          { strokeDashoffset: 0, ease: 'none', duration: 4 },
          0
        )
      }

      stepGroups.forEach((group, index) => {
        tl.fromTo(
          group,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power1.out' },
          index * 0.6 + 0.3
        )
      })

      stepContents.forEach((content, index) => {
        tl.fromTo(
          content,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power1.out' },
          index * 0.6 + 0.35
        )
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
                                A consistent, predictable path from first setup to jobs running - no surprises mid-project.
                            </span>
                        </p>
                    </div>

        <div className="mt-[8vw] flex justify-center ">
          <div className="flex flex-row items-start justify-center gap-[4vw] w-full max-w-[1200px] mx-auto flex-nowrap">
            <div className="relative flex-shrink-0 flex items-start justify-center lg:h-[207vh] h-[210vh] w-auto mx-auto">
              <svg width="81" className="w-full h-full max-w-[160px]" viewBox="0 0 81 1871" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M41 41L41.0001 1839"
                  stroke="black"
                  strokeWidth="1"
                  strokeLinecap="round"
                  className="step-line-path"
                />
                <g className="step-node-group" opacity="0">
                  <circle cx="40" cy="40" r="40" fill="#1069DF" />
                  <text x="40" y="50" textAnchor="middle" fontSize="28" fontWeight="700" fill="white">1</text>
                </g>
                <g className="step-node-group" opacity="0">
                  <circle cx="40" cy="391" r="40" fill="#1069DF" />
                  <text x="40" y="401" textAnchor="middle" fontSize="28" fontWeight="700" fill="white">2</text>
                </g>
                <g className="step-node-group" opacity="0">
                  <circle cx="40" cy="742" r="40" fill="#1069DF" />
                  <text x="40" y="752" textAnchor="middle" fontSize="28" fontWeight="700" fill="white">3</text>
                </g>
                <g className="step-node-group" opacity="0">
                  <circle cx="40" cy="1093" r="40" fill="#1069DF" />
                  <text x="40" y="1103" textAnchor="middle" fontSize="28" fontWeight="700" fill="white">4</text>
                </g>
                <g className="step-node-group" opacity="0">
                  <circle cx="40" cy="1444" r="40" fill="#1069DF" />
                  <text x="40" y="1454" textAnchor="middle" fontSize="28" fontWeight="700" fill="white">5</text>
                </g>
                <g className="step-node-group" opacity="0">
                  <circle cx="40" cy="1795" r="40" fill="#1069DF" />
                  <text x="40" y="1805" textAnchor="middle" fontSize="28" fontWeight="700" fill="white">6</text>
                </g>
              </svg>
            </div>

            <div className="flex-1 min-w-0 flex flex-col gap-[10vw]  lg:gap-[8vw]">
              {steps.map((step, index) => (
                <div key={step.title} className="step-item h-[35vh] lg:h-full">
                  <div className="step-content opacity-0">
                    <h3 className="lg:text-[2.5vw] aeonik text-[5vw]">{step.title}</h3>
                    <p className="content-p mt-[1vw] lg:w-[48%] w-full ">{step.description}</p>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps