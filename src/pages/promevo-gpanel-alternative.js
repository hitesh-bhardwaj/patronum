import Comparison from '@/components/PageComponents/AlternativePage/Comparison';
import ProductFeatures from '@/components/PageComponents/PricePage/ProductFeature';
import PageLayout from '@/components/PageLayout';

const rowData = [
    {
      col1: "Simple Pricing",
      col2: "Understand your commercial commitments clearly and transparently.",
      img1: true, 
      img2: false, 
      info2:"gPanel offers several packages and bundles."
    },
    {
      col1: "Free 30 Day Free Trial Available",
      col2: "Fully experience how you can better manage Google Workspace before committing",
      img1: true, 
      img2: false, 
      info2:"14 day trial for only 5 users."
    },
    {
      col1: "Automated Billing",
      col2: "Automatically Renew subscription",
      img1: false, 
      img2: true, 
    },
    {
        col1: "Simple Install via Google Workspace Marketplace",
        col2: "All apps in the Google Workspace Marketplace are reviewed by Google before they are published. This helps to ensure that the apps are secure and reliable.",
        img1: true, 
        img2: true, 
      },
      {
        col1: "Integration with 3rd party SaaS applications",
        col2: "Manage 3rd party license provisioning and deprovisioning",
        img1: false, 
        img2: false, 
        info1:"Patronum is exclusively for Google Workspace, with extremely deep integration."
      },
      {
        col1: "Centralised User Management",
        col2: "Grants administrators granular access over their Google Workspace environment.",
        img1: true, 
        img2: true, 
      },
      {
        col1: "Real-time Google Workspace administration",
        col2: "Manage your Google Workspace user directly, in real-time. No need to wait for reindexing or database synchronisation",
        img1: true, 
        img2: false, 
      },
      {
        col1: "Role Based Access",
        col2: "Create Google admin roles, to enable delegate administration via extensive permission customisation.",
        img1: true, 
        img2: true, 
      },
      {
        col1: "People Directory",
        col2: "User-centric people finder, enables employees to locate and connect with colleagues effectively.",
        img1: true, 
        img2: false , 
      },
      {
        col1: "Mobile Contact Sync",
        col2: "Sync Google Directory Contact information with user mobile devices for native experience.",
        img1: true, 
        img2: true, 
      },
      {
        col1: "Google Drive Management",
        col2: "Manage your users Google Drive and Shared Drives with full rights and text searching capabilities.",
        img1: true, 
        img2: true, 
      },
      {
        col1: "Bulk Operations",
        col2: "Perform user updates on mass with bulk actions.",
        img1: true, 
        img2: true, 
        info2:"gPanel Starter only support updating 50 resources."
      },
      {
        col1: "Group Management",
        col2: "Manage all your Google Groups",
        img1: true, 
        img2: true, 
      },
      {
        col1: "Dynamic Groups",
        col2: "Automatically manage Google Group membership based on custom criteria.",
        img1: true, 
        img2: true, 
      },
      {
        col1: "Automated Onboarding",
        col2: "Create policies to seamlessly onboard new users or to perform actions on existing users on the account",
        img1: true, 
        img2: true, 
      },
      {
        col1: "Automated Offboarding",
        col2: "Create policies to seamlessly offboard leavers",
        img1: true, 
        img2: true, 
        info2:"gPanel Starter does not support Offboarding"

      },
      {
        col1: "Reporting",
        col2: "Comprehensive reports",
        img1: true, 
        img2: true, 
      },
      {
        col1: "Email Signature Management",
        col2: "Automatically deploy Gmail email signatures directly to users.",
        img1: true, 
        img2: true, 
      },
      {
        col1: "Email Signature Templates",
        col2: "Create email signature templates in order to make managing different email signature branding simple.",
        img1: true, 
        img2: true, 
      },
      {
        col1: "Email Archiving and Migration",
        col2: "Migrate and archive email for leavers",
        img1: false, 
        img2: false,
        info1:"Patronum does not recommend archiving email into an external system when a user leaves as more often than not an ex-employee has deleted emails, and so you're not archiving all information, better to use a trusted backup solution." 
      },
      {
        col1: "Google Drive Compliance",
        col2: "Unshare files from both internal and external users in order to keep data safe and secure.",
        img1: true, 
        img2: true, 
      },
      {
        col1: "Real-time 24x7 support via chat",
        col2: "Get support from an expert right when and where you need it.",
        img1: true, 
        img2: false, 
      },


  ];

export default function BetterCloud() {

    return (
        <>
            <PageLayout
                pageTitle1="Look no further,"
                pageTitle2="your alternative to Promevo is here!!"
                pagePara=" "
                imgSrc=""
                title={"Pricing for Patronum: A Google Workspace Manager"}
                description={"Patronum provides a better way to manage Google Workspace (G Suite). It fully automates all administrator and user tasks to ensure an efficient, effective, and secure process. For pricing information, please visit our website."}
                url={"cloudm-manage-alternative"}
                img={""}
                date_published={"2023-04-24T12:00"}
                date_modified={"2024-04-04T12:00"}
                keywords={"Google Workspace"}
            >
                <Comparison data={rowData} product={"Promevo gPanel"} productprice={"$19"} productpriceInfo={"$19 for gPanel Standard, $10 for gPanel Starter"}/>
                <ProductFeatures/>

            </PageLayout>
        </>
    )
}