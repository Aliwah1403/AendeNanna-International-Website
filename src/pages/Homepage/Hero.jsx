import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroBgImage from "@/assets/HeroBG.svg";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight capitalize">
          Your trusted partner in global shipping solutions
        </h1>
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-muted-foreground">
            We provide customized, flexible logistics solutions designed to meet
            your unique needs, ensuring efficiency and reliability at every step
            of your supply chain.
          </p>
        </div>
      </div>
      <div className="mt-16 aspect-[2/1] w-full overflow-hidden rounded-lg bg-muted">
        <img
          src={HeroBgImage}
          alt="Logistics illustration"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
