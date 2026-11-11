import About from "./components/About";
import Building from "./components/Building";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Work from "./components/Work";
import Writing from "./components/Writing";

const App = () => (
  <Layout>
    <Hero />
    <Building />
    <Work />
    <Experience />
    <Writing />
    <About />
    <Contact />
  </Layout>
);

export default App;
