import React from "react";

import Seo from "../components/Seo";
import Layout from "../layout/Layout";
import Hero from "../sections/Hero";
import HomeCustomerLogos from "../sections/HomeCustomerLogos";
import HomeTestimonials from "../sections/HomeTestimonials";
import Divider from "../components/Divider";
import HomeMorePatients from "../sections/HomeMorePatients";
import HomeFeatures from "../sections/HomeFeatures";
import HomeProblems from "../sections/HomeProblems";
import HomeFounder from "../sections/HomeFounder";
import HomeScale from "../sections/HomeScale";
import HomeMarketing from "../sections/HomeMarketing";

const IndexPage = ({ location }) => {
  return (
    <>
      <Seo location={location} />
      <Layout>
        <main>
          <Hero />
          <HomeCustomerLogos />
          <HomeTestimonials />
          <Divider />
          <HomeMorePatients />
          <HomeFeatures />
          <HomeProblems />
          <HomeFounder />
          <HomeScale />
          <HomeMarketing />
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;
