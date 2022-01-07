import React from "react";

import Seo from "../components/Seo";
import Layout from "../layout/Layout";
import Hero from "../sections/Hero";
import HomeCustomerLogos from "../sections/HomeCustomerLogos";

const IndexPage = ({ location }) => {
  return (
    <>
      <Seo location={location} />
      <Layout>
        <main>
          <Hero />
          <HomeCustomerLogos />
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;
