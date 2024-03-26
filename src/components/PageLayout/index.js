import PageLoader from "../PageLoader";
import Hero from "./Hero";
import Stairs from "@/components/Stairs";

export default function PageLayout( {pageTitle1, pageTitle2, pagePara, imgSrc, children} ){

    return(
      <>
      <Stairs>
        {/* <PageLoader /> */}
        <main>
        <Hero
            pageTitle1={pageTitle1} 
            pageTitle2={pageTitle2} 
            pagePara={pagePara} 
            imgSrc={imgSrc}
          />
          {children}
        </main>
      </Stairs>
      </>
    )
}