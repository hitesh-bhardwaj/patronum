import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NextSeo } from "next-seo";

export default function Page404() {
    return (
        <>
            <NextSeo 
                title="404 - Page Not Found"
                description="404 error page."
                additionalLinkTags={
                    [
                        {
                            rel: 'canonical',
                            href: 'https://www.patronum.io/404'
                        },
                        {
                            rel : 'alternate',
                            href : 'https://www.patronum.io/404',
                            hrefLang: 'x-default'
                        },
                    ]
                }
            />
            <Header />
                <div className="w-screen h-screen flex justify-center items-center">
                    <div className="text-center -mt-20">
                        <h1 className="text-[10vw] font-medium leading-[1.2] text-primary">404</h1>
                        <p className="content-p">Uh Oh!</p>
                        <p className="content-p">
                            We could not find the page you're looking for.
                        </p>
                        <p className="content-p">Don’t Worry! We can Take You{" "}
                            <a href="/"class="relative after:absolute after:bg-primary after:h-[2px] after:left-0 after:bottom-[-2%] after:scale-0 hover:after:scale-100 after:duration-300 after:w-full text-primary">Home</a>
                        </p>
                    </div>
                </div>
            <Footer />
        </>
    )
}