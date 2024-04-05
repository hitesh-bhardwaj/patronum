import Hero from "@/components/PageLayout/Hero";
import MetaData from "@/components/PageLayout/MetaData";
import Layout from "@/components/Stairs";
import styles from '@/styles/cookie-policy.module.css'
import { wordpressUrl } from "@/utils/variables";

export default function Page({ title, content }) {

    return (
        <>  
            <MetaData 
                title={"Anti Slavery and Human Trafficking Statement - Patronum"}
                description={"This statement provides the steps Bespin Labs Limited have taken and continue to take to minimise the risk of modern slavery and human trafficking in its business and supply chain and is published in line with section 54(1) of the Modern Slavery Act 2015."}
                date_published={"2024-04-04T07:07"}
                date_modified={"2024-04-04T07:08"}
                url={"anti-slavery-and-human-trafficking-statement"}
                img={"Google-Workspace.png"}
            />
            <Layout>
                <Hero
                    pageTitle1={"Anti-Slavery and Human"}
                    pageTitle2={"Trafficking Statement"}
                    pagePara={"This policy explains the way in which cookies are used on our website."}
                    imgSrc={"anti-slavery-and-human-trafficking.svg"}
                />
                <section className="" id="second-section">
                    <div className="container">
                        <div className="content-2">
                            <div className="lg:mb-[2vw] md:mb-[5vw] mb-[6vw]">
                                <h2 className="title-4xl text-anim">
                                    <span>
                                        Human Trafficking Statement
                                    </span>
                                </h2>
                            </div>
                            <div 
                                className={styles.policy}
                                dangerouslySetInnerHTML={{ __html: content }} 
                            />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
  
export async function getServerSideProps(context) {
    try {
        const response = await fetch(`${wordpressUrl}/wp-json/wp/v2/pages?slug=anti-slavery-and-human-trafficking-statement`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // Assuming the data is an array and the first element contains the policy content
        const pageData = Array.isArray(data) && data.length > 0 ? data[0] : null;
  
        if (!pageData) {
            throw new Error('No data found');
        }
  
        const { title, content } = pageData;
  
        return {
            props: {
                title: title.rendered,
                content: content.rendered,
            },
        };
    }   catch (error) {
            console.error('Error fetching data:', error);
      return {
            props: {
                title: '',
                content: '',
            },
        };
    }
}
  