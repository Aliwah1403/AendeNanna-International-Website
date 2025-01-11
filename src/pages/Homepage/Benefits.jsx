import { Package, Globe, Clock, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Package className="size-10 stroke-1 text-red-400" />,
      title: "Safe Packing",
      description: "Regulations must be circumvented in global supply chains.",
    },
    {
      icon: <Globe className="size-10 stroke-1 text-red-400" />,
      title: "Ship Everywhere",
      description:
        "Regulations are frequently contested in global supply chains.",
    },
    {
      icon: <Clock className="size-10 stroke-1 text-red-400" />,
      title: "In Time Delivery",
      description: "International supply chains involve difficult regulations.",
    },
    {
      icon: <Plane className="size-10 stroke-1 text-red-400" />,
      title: "Fastest Shipping",
      description:
        "International supply chains are subject to stringent regulations.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-red-400 font-medium">WHY AENDENANNA</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Why should you choose our services, here are the advantages we
              offer
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We take great pride in offering the best shipping and
              transportation services available anywhere in the world, utilizing
              software for tracking, processing, and communications, along with
              our knowledgeable staff's decades of experience!
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md">
              Get a Free Quote
            </Button>
          </div>

          {/* Right Column */}
          <div className="grid gap-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">{benefit.title}</h3>
                  <p className="text-gray-400 font-light">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
