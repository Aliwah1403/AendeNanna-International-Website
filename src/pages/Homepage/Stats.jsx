import { WorldMap } from "@/components/ui/world-map";
import { Separator } from "@/components/ui/separator";

const Stats = () => {
  const stats = [
    {
      value: "15M+",
      label: "Shipments Delivered",
      description:
        "Successfully delivered packages across global supply chains",
    },
    {
      value: "120+",
      label: "Countries Served",
      description:
        "Providing logistics solutions worldwide with local expertise",
    },
    {
      value: "99.8%",
      label: "On-time Delivery",
      description: "Maintaining exceptional delivery accuracy and reliability",
    },
    {
      value: "5000+",
      label: "Business Partners",
      description: "Trusted by leading companies for their logistics needs",
    },
  ];

  return (
    <section className="bg-red-600 text-white py-24 px-4">
      <div className="container mx-auto">
        <div className="space-y-4 mb-16">
          <p className="text-red-200">Global Logistics Excellence</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl">
            Delivering innovation across borders, reliably.
          </h2>
        </div>

        {/* Map Section */}
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-4">
              <div className="text-5xl lg:text-6xl font-bold">{stat.value}</div>
              {/* <Separator orientation="horizontal" className="h-[0.5px]" /> */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{stat.label}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
