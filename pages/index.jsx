import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
import icons from "../utils/icons";
import projects from "../utils/projects";
import socialmediaicons from "../utils/socialmedia";
import Head from "next/head";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Head>
        <title>Anıl Er</title>
      </Head>

      <AnimatePresence exitBeforeEnter>
        {loading === true ? (
          <motion.div key="loader">
            <Loading setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Navbar />
            <Sidebar />
            <Home />
            <About icons={icons} />
            <Projects projects={projects} />
            <Contact socialmediaicons={socialmediaicons} />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      icons,
      projects,
      socialmediaicons,
    },
  };
}
