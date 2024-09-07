'use client';
import Feature from "@/components/feature";
import Hero from "@/components/Hero";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/testimonial";
import React from "react";


export default function Home() {
 

  return (
    <section>
      <Hero/>
      <Feature/>
      <Testimonial/>
      <Subscribe/>
    </section>
  );
}
