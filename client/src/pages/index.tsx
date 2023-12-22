import React from "react";
import { Link } from "react-scroll";
import { ResponsiveAppBar, HeroSection, FooterSection, AboutSection, ServiceSection, PersonSection, ContactSection } from "../components";

export default function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <HeroSection id="home"/>
      <AboutSection id="sobre"/>
      <ServiceSection id="serviços"/>
      <PersonSection id="time" />
      <ContactSection id="contato" />
      <FooterSection linkedin="https://www.linkedin.com/company/movesbrasil/" facebook="https://www.facebook.com/movesbrasill" instagram="https://instagram.com/movesbrasil?igshid=MzMyNGUyNmU2YQ=="/>
    </div>
  );
}