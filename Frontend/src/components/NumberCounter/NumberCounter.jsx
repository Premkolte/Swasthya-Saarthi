import React from "react";
import CountUp from "react-countup";

const NumberCounter = () => {
  return (
    <div className="bg-blue-600 text-white py-12">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl font-bold">
            <CountUp
              start={0}
              end={500}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              separator=","
              suffix="+"
            />
          </p>
          <p className="mt-2 text-lg">Hospitals Covered</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl font-bold">
            <CountUp
              start={0}
              end={10000}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              separator=","
              suffix="+"
            />
          </p>
          <p className="mt-2 text-lg">Users Benefited</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl font-bold">
            <CountUp
              start={0}
              end={12}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              suffix="+"
            />
          </p>
          <p className="mt-2 text-lg">Languages Supported</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl font-bold">
            <CountUp
              start={0}
              end={3000}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              separator=","
              suffix="+"
            />
          </p>
          <p className="mt-2 text-lg">Medicines Scanned</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
