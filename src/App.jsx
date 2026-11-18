import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Writing from "./components/Writing";
import usePageMeta from "./lib/usePageMeta";

const HOME_DESCRIPTION =
  "Muhammed Sahal K C, SDE 2 at FantaCode in Kozhikode. A designer turned software engineer building Asset Build, ExtenD, Adahly and Simple Header Editor.";

const App = () => {
  usePageMeta({ description: HOME_DESCRIPTION });

  return (
    <Layout>
      <Hero />
      <Projects />
      <Work />
      <Experience />
      <Writing />
      <Contact />
    </Layout>
  );
};

export default App;
