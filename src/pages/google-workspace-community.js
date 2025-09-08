import Layout from '@/components/Layout'
import Features from '@/components/PageComponents/CommunityPage/Features'
import Group from '@/components/PageComponents/CommunityPage/Group'
import Hero from '@/components/PageComponents/CommunityPage/Hero'
import Hosting from '@/components/PageComponents/CommunityPage/Hosting'
import JoinCommunity from '@/components/PageComponents/CommunityPage/JoinCommunity'
import Network from '@/components/PageComponents/CommunityPage/Network'
import UpcomingWebinars from '@/components/PageComponents/CommunityPage/UpcomingWebinars'
import Webinars from '@/components/PageComponents/CommunityPage/Webinars'
import Faqs from '@/components/PageComponents/FeaturesPage/Faq'
import Testimonial from '@/components/PageLayout/Testimonial'
import React from 'react'

const page = () => {
  return (
    <>
    <Layout>
        <main>
             <Hero/>
             <Network/>
             <Webinars/>
             <UpcomingWebinars/>
             <Features/>
             <Testimonial/>
             <JoinCommunity/>
             <Group/>
             <Hosting/>
             <Faqs featureName={"community"}/>
        </main>
    </Layout>
    </>
  )
}

export default page