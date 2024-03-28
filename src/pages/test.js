import PreLoader from "@/components/PreLoader";
import SideMenu from "@/components/SideMenu";

export default function Test() {

    const sections = [
        { name: "Intro", id: "intro" },
        { name: "Features", id: "features" },
        { name: "Use Cases", id: "use-cases" }, // Note the slug format for IDs
        { name: "Pricing", id: "pricing" },
        { name: "About", id: "about" },
        { name: "FAQ's", id: "faqs" },
      ];

    return(
    <>
        <SideMenu sections={sections}/>
        <main>
            <section className="h-screen w-screen" id="intro">
                <div className="w-full h-full bg-gray-100 flex justify-center items-center text-9xl">Intro</div>
            </section>
            <section className="h-[120vh] w-screen" id="features">
                <div className="w-full h-full bg-gray-200 flex justify-center items-center text-9xl">Features</div>
            </section>
            <section className="h-screen w-screen" id="use-cases">
                <div className="w-full h-full bg-gray-300 flex justify-center items-center text-9xl">Use Cases</div>
            </section>
            <section className="h-screen w-screen" id="testimonial">
                <div className="w-full h-full bg-gray-300 flex justify-center items-center text-9xl">Testimonial</div>
            </section>
            <section className="h-screen w-screen" id="pricing">
                <div className="w-full h-full bg-gray-400 flex justify-center items-center text-9xl">Pricing</div>
            </section>
            <section className="h-screen w-screen" id="about">
                <div className="w-full h-full bg-gray-500 flex justify-center items-center text-9xl">About</div>
            </section>
            <section className="h-[160vh] w-screen" id="faqs">
                <div className="w-full h-full bg-gray-600 flex justify-center items-center text-9xl">FAQ's</div>
            </section>
        </main>
    </>
    )
}