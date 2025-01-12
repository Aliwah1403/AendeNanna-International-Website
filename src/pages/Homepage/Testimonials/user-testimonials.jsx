import { useState } from "react";
import { TestimonialIcons } from "./testimonial-icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I'm impressed by the global reach and efficiency of this logistics company. They've made international shipping a breeze for our business!",
    name: "Alice Johnson",
    username: "@alicejohnson",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Their real-time tracking system has significantly improved our supply chain visibility. We always know where our shipments are!",
    name: "David Smith",
    username: "@davidsmith",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/kaDy9hV.jpeg",
    text: "The customs clearance service is a game-changer. They handle all the paperwork, making international shipping hassle-free.",
    name: "Emma Chen",
    username: "@emmachen",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/cRwFxtE.png",
    text: "Their warehousing solutions have optimized our inventory management. It's like they've streamlined our entire logistics operation!",
    name: "James Wilson",
    username: "@jameswilson",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/TQIqsob.png",
    text: "The speed and reliability of their express shipping service is unmatched. Our customers are always satisfied with the quick deliveries.",
    name: "Sophia Lee",
    username: "@sophialee",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/3ROmJ0S.png",
    text: "Their eco-friendly shipping options align perfectly with our company's sustainability goals. It's great to work with a forward-thinking logistics partner.",
    name: "Michael Müller",
    username: "@michaelmuller",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/6fKCuVC.png",
    text: "The customer service team is incredibly responsive. They've helped us navigate complex shipping scenarios with ease.",
    name: "Emily Patel",
    username: "@emilypatel",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/Jjqe7St.png",
    text: "Their specialized handling for fragile items is excellent. We've seen a significant decrease in transit damage since switching to their service.",
    name: "Robert Kim",
    username: "@robertkim",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/bG88vHI.png",
    text: "The integration of their shipping API with our e-commerce platform was seamless. It's revolutionized our order fulfillment process.",
    name: "Sarah Taylor",
    username: "@sarahtaylor",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/tjmS77j.png",
    text: "Their bulk shipping rates have significantly reduced our transportation costs. It's had a positive impact on our bottom line.",
    name: "Kevin White",
    username: "@kevinwhite",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/yTsomza.png",
    text: "The flexibility of their services is impressive. They've been able to accommodate our unique shipping requirements without any issues.",
    name: "Rachel García",
    username: "@rachelgarcia",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
  {
    image: "https://i.imgur.com/pnsLqpq.png",
    text: "Their cold chain logistics service has been crucial for our pharmaceutical shipments. The temperature control is consistently reliable.",
    name: "Brian Nakamura",
    username: "@briannakamura",
    social: "https://i.imgur.com/VRtqhGC.png",
  },
];

const Testimonials = () => {
  const maxDisplayed = 6;
  const [showAll, setShowAll] = useState(false);

  const openInNewTab = (url) => {
    window.open(url, "_blank")?.focus();
  };

  return (
    <section className="bg-background text-foreground py-12 sm:py-24 md:py-32 px-0">
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        {/* section header */}
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            Trusted by thousands of happy customers worldwide
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            Join thousands of satisfied clients who trust Aendananna in their
            business growth
          </p>
        </div>

        {/* content */}
        <div className="relative">
          <div
            className={cn(
              "flex justify-center items-center gap-5 flex-wrap px-4",
              !showAll &&
                testimonials.length > maxDisplayed &&
                "max-h-[720px] overflow-hidden"
            )}
          >
            {testimonials
              .slice(0, showAll ? undefined : maxDisplayed)
              .map((testimonial, index) => (
                <Card
                  key={index}
                  className="w-80 h-auto p-5 relative bg-card border-border"
                >
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex flex-col pl-4">
                      <span className="font-semibold text-base">
                        {testimonial.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {testimonial.username}
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 mb-5">
                    <p className="text-foreground font-medium">
                      {testimonial.text}
                    </p>
                  </div>
                  <button
                    onClick={() => openInNewTab(testimonial.social)}
                    className="absolute top-4 right-4 hover:opacity-80 transition-opacity"
                  >
                    {/* might remove the icons */}
                    <TestimonialIcons.logo
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </button>
                </Card>
              ))}
          </div>

          {testimonials.length > maxDisplayed && !showAll && (
            <>
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                <Button variant="secondary" onClick={() => setShowAll(true)}>
                  Load More
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
