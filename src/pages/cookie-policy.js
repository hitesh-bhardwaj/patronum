import Hero from "@/components/PageLayout/Hero";
import MetaData from "@/components/PageLayout/MetaData";
import Layout from "@/components/Stairs";
import styles from '@/styles/cookie-policy.module.css'

export default function Page({ title, content }) {

    return (
        <>  
            <MetaData 
                title={"Cookie Policy - Patronum"}
                description={"This policy explains the way in which cookies are used on our website. Please ensure you have read and understood this policy before continuing to use our website."}
                date_published={"2024-04-04T07:07"}
                date_modified={"2024-04-04T07:08"}
                url={"cookie-policy"}
                img={"Google-Workspace.png"}
            />
            <Layout>
                <Hero
                    pageTitle1={title}
                    pagePara={"This policy explains the way in which cookies are used on our website."}
                    imgSrc={"cookie-policy.svg"}
                />
                <section className="" id="second-section">
                    <div className="container">
                        <div className="content-2">
                            <div className="lg:mb-[2vw] md:mb-[5vw] mb-[6vw]">
                                <h2 className="title-4xl text-anim">
                                    <span>
                                        Cookie Policy
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
        const response = await fetch('https://wordpress-156292-4361221.cloudwaysapps.com/wp-json/wp/v2/pages?slug=cookie-policy');
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
                modified: '',
                published: '',
                content: '',
                slug: ''
            },
        };
    }
}
  