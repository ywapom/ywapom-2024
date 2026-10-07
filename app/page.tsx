import {
  Approach,
  Beyond,
  Contact,
  Experience,
  Footer,
  Header,
  Hero,
  SkillBand,
  Testimonials,
  Work,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <SkillBand />
        <Approach />
        <Work />
        <Experience />
        <Testimonials />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
