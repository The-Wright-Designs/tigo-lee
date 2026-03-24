import { Metadata } from "next";

import AboutComponent from "@/_components/home-page/about-component";
import ContactComponent from "@/_components/home-page/contact/contact-component";
import GalleryComponent from "@/_components/home-page/gallery/gallery-component";
import HeroComponent from "@/_components/home-page/hero/hero-component";

export const metadata: Metadata = {
  title: "Tigo-Lee Professional Make-up Artist",
};

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <div
        className="scroll-mt-16 tablet:scroll-mt-16 desktop:scroll-mt-20"
        id="about"
      ></div>
      <AboutComponent />
      <GalleryComponent />
      <div
        className="scroll-mt-16 tablet:scroll-mt-16 desktop:scroll-mt-20"
        id="contact"
      ></div>
      <ContactComponent />
    </div>
  );
}
