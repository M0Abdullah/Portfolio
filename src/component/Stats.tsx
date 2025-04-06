"use client";
import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    { value: 2, suffix: "+", label: "Years of Experience" },
    { value: 10, suffix: "+", label: "Completed Projects" },
    { value: 10, suffix: "", label: "Satisfied Clients" },
  ];

  return (
    <div className="bg-gray-900 text-white p-10  flex  w-full justify-center gap-10">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <h2 className="text-4xl font-bold">
            <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
          </h2>
          <p className="text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
