import { Rocket } from "lucide-react";

const Services = () => {
  const features = [
    {
      title: "Global Logistics Solutions",
      description:
        "Streamline your international shipping with our comprehensive logistics network, ensuring seamless delivery across borders.",
    },
    {
      title: "Real-Time Tracking",
      description:
        "Monitor your shipments 24/7 with our advanced tracking system, providing complete visibility of your cargo's journey.",
    },
    {
      title: "Custom Clearance",
      description:
        "Navigate complex customs procedures effortlessly with our expert team handling all documentation and compliance.",
    },
    {
      title: "Warehousing Services",
      description:
        "Optimize your supply chain with our strategic warehousing solutions, offering secure storage and efficient distribution.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-red-600">What we have to offer</p>
          <h2 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto">
            Comprehensive Logistics Solutions for Global Success
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Transform your supply chain with our end-to-end logistics services.
            We combine industry expertise with cutting-edge technology to
            deliver reliable, efficient, and cost-effective solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="size-12 border rounded-lg flex items-center justify-center mx-auto">
                <Rocket className="size-6 stroke-red-600" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
