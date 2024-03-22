import Footer from "../Footer";
import Header from "../Header";
import Hero from "./Hero";
import Stairs from "../Stairs";

export default function PageLayout( {pageTitle1, pageTitle2, pagePara, imgSrc, children} ){

    return(
        <Stairs>
          <Header />
          <main>
            <Hero
              pageTitle1={pageTitle1} 
              pageTitle2={pageTitle2} 
              pagePara={pagePara} 
              imgSrc={imgSrc}
            />
            {children}
          </main>
          <Footer />
        </Stairs>
    )
}