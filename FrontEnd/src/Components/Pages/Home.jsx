import React from "react";
import Layout from "../common/Layout";
import Hero from "../common/Hero";
import FeaturedCaptured from "../common/FeaturedCaptured";
import FeaturedCourses from "../common/FeaturedCourses";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedCaptured />
      <FeaturedCourses />
    </Layout>
  );
};

export default Home;
