import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import ContentGrid from "./components/ContentGrid.jsx";
import ReaderModal from "./components/ReaderModal.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";
import useScrollReveal from "./hooks/useScrollReveal.js";
import { blogs, webcontents, profile } from "./data/content.js";

export default function App() {
  const [reader, setReader] = useState({ item: null, type: null });

  useScrollReveal([]);

  function openReader(item, type) {
    setReader({ item, type });
  }

  function closeReader() {
    setReader({ item: null, type: null });
  }

  return (
    <>
      <Header />
      <Hero profile={profile} blogCount={blogs.length} webCount={webcontents.length} />
      <About profile={profile} />

      <ContentGrid
        id="blogs"
        eyebrow="Selected Writing"
        title="Blogs"
        description="Long-form, SEO-first articles written to bring organic traffic and keep readers on the page."
        items={blogs}
        type="blog"
        onOpen={openReader}
        emptyLabel="Add entries to the blogs array in src/data/content.js"
      />

      <ContentGrid
        id="webcontent"
        eyebrow="Client Work"
        title="Web Content"
        description="Homepage, service, and product page copy built for conversion as much as for search."
        items={webcontents}
        type="webcontent"
        onOpen={openReader}
        emptyLabel="Add entries to the webcontents array in src/data/content.js"
      />

      <ContactForm />
      <Footer />

      <ReaderModal item={reader.item} type={reader.type} onClose={closeReader} />
    </>
  );
}
