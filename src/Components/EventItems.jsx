import React, { useEffect, useLayoutEffect, useState } from "react";

const EventItems = () => {
  const [current, setCurrent] = useState(0);

  useLayoutEffect(() => {}, [current]);
  function getRandomColor() {
    // Generate random values for red, green, and blue channels
    // Ensure that the sum of RGB values is higher than a threshold to avoid dark colors close to black
    let r, g, b;
    do {
      r = Math.floor(Math.random() * 256); // 0-255
      g = Math.floor(Math.random() * 256); // 0-255
      b = Math.floor(Math.random() * 256); // 0-255
    } while (r + g + b < 200); // Adjust the threshold as needed

    // Convert to hex and return the color code
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  function generateColors(n) {
    const colors = new Set();
    while (colors.size < n) {
      colors.add(getRandomColor());
    }
    return Array.from(colors);
  }

  return (
    <section className="bg-[#121212] py-12">
      <div className="w-screen   md:w-50% ">
        <h2 className=" text-[28px] md:text-[40px] text-center text-white ">
          If you missed something, access it right here
        </h2>

        {/* <div className="flex mx-auto  no-wrap md:flex-wrap gap-4 justify-center p-4 max-w-screen   md:max-w-3xl overflow-x-scroll no-scrollbar">
         */}
        <div className="flex gap-4 px-2 max-w-screen overflow-scroll py-4 md:max-w-3xl mx-auto md:flex-wrap md:justify-center">
          {eventsData.map((d, i) => {
            return (
              <button
                onClick={() => setCurrent(i)}
                className={`${
                  current === i
                    ? "pastEventPageActiveButton"
                    : "pastEventPageInactiveButton"
                } `}
              >
                {d.domain}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 px-4  md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto mt-6 md:max-w-5xl">
          {eventsData[current]["companies"].map((d, i) => {
            return (
          
                <div
                  className='cursor-pointer'
                  
                >
                    <a href={d.url} target="_blank" className="underline !text-blue-400 text-[20px] text-white">{d.name}</a>

                </div>
            
   
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventItems;

const eventsData = [
  {
    domain: "Agriculture",
    companies: [
      {
        name: "Greenbliss Agro",
        url: "https://greenblissagro.com/",
        color: "#FF5733",
      },
      {
        name: "Natupro Agri Solutions",
        url: "",
        color: "#33FF57",
      },
      {
        name: "Trustgrow fertilizers",
        url: "https://www.trustgrow.in/",
        color: "#3357FF",
      },
      {
        name: "Plasil Organics",
        url: "http://www.plasilorganics.com",
        color: "#F1C40F",
      },
      {
        name: "Krishitantra",
        url: "https://ag-hub.co/krishitantra/",
        color: "#E74C3C",
      },
      {
        name: "Blueleaves farms",
        url: "https://www.blueleaves.farm/",
        color: "#8E44AD",
      },
      {
        name: "5S Farms",
        url: "https://www.youtube.com/channel/UCNjjnFqpRL6qu71optrmsQw",
        color: "#3498DB",
      },
      {
        name: "Celebrating Farmers",
        url: "",
        color: "#1ABC9C",
      },
      {
        name: "Khethari Agritech",
        url: "https://khethari.com/",
        color: "#2ECC71",
      },
      {
        name: "Agromate",
        url: "https://www.agromate.com.my/",
        color: "#E67E22",
      },
    ],
  },
  {
    domain: "Food",
    companies: [
      {
        name: "Greenbliss",
        url: "https://greenblissagro.com/",
        color: "#D35400",
      },
      {
        name: "Basically Good",
        url: "",
        color: "#C0392B",
      },
      {
        name: "Gani Foods",
        url: "",
        color: "#7F8C8D",
      },
      {
        name: "Fruitoniq",
        url: "https://www.zomato.com/hyderabad/fruitoniq-begumpet",
        color: "#27AE60",
      },
      {
        name: "Ammae Foods",
        url: "https://www.ammae.in/",
        color: "#2980B9",
      },
    ],
  },
  {
    domain: "Civil",
    companies: [
      {
        name: "Sri Integrity Homes",
        url: "https://sreeintegrity.com/",
        color: "#9B59B6",
      },
      {
        name: "Vamsiram Builders",
        url: "https://www.vamsirambuilders.com/",
        color: "#8E44AD",
      },
      {
        name: "Sumadhura Constructions",
        url: "https://sumadhuragroup.com/",
        color: "#E74C3C",
      },
    ],
  },
  {
    domain: "Electronics",
    companies: [
      {
        name: "NGE Industries",
        url: "",
        color: "#16A085",
      },
      {
        name: "Ilonnati Innovations",
        url: "https://ilonnatiinnovations.com/",
        color: "#F39C12",
      },
      {
        name: "Kritsnam",
        url: "https://kritsnam.com/",
        color: "#D35400",
      },
      {
        name: "Smartterra",
        url: "https://www.smartterra.io/",
        color: "#C0392B",
      },
    ],
  },
  {
    domain: "Information Technology",
    companies: [
      {
        name: "Appizion IT Solutions",
        url: "https://www.appizion.com/",
        color: "#BDC3C7",
      },
      {
        name: "Bluebase",
        url: "https://blubase.com/en/",
        color: "#34495E",
      },
      {
        name: "8fx",
        url: "https://8fx.in/",
        color: "#1ABC9C",
      },
      {
        name: "Leantech Labs Pvt Ltd",
        url: "https://leantechlabs.in/",
        color: "#2ECC71",
      },
      {
        name: "Cysigma Pvt Ltd",
        url: "https://cysigma.com",
        color: "#3498DB",
      },
      {
        name: "Rats Technologies Pvt Ltd",
        url: "http://ratstechnologies.com/",
        color: "#9B59B6",
      },
      {
        name: "Deep Armor Pvt Ltd",
        url: "https://www.deeparmor.com/",
        color: "#8E44AD",
      },
      {
        name: "INFI Tech Pvt Ltd",
        url: "https://www.infitechsolutions.co.uk/",
        color: "#E74C3C",
      },
      {
        name: "Cybel’Art",
        url: "https://www.cybelart.com",
        color: "#F1C40F",
      },
      {
        name: "Peta Byte",
        url: "https://petabyte.pro/",
        color: "#E67E22",
      },
      {
        name: "Crystal Cube",
        url: "https://crystalcube.in/",
        color: "#2980B9",
      },
    ],
  },
  {
    domain: "Edu-Tech",
    companies: [
      {
        name: "Capullo School Pvt Ltd",
        url: "https://capulloschool.blogspot.com/",
        color: "#16A085",
      },
      {
        name: "Eduinar Education",
        url: "https://eduinar.in/",
        color: "#F39C12",
      },
      {
        name: "Goal Street",
        url: "https://www.goalstreet.in/",
        color: "#D35400",
      },
      {
        name: "Code Kids",
        url: "https://www.codekids.org.uk/",
        color: "#C0392B",
      },
    ],
  },
  {
    domain: "Marketing",
    companies: [
      {
        name: "Colabr Nation",
        url: "https://collabornation.net/login",
        color: "#27AE60",
      },
      {
        name: "Sugar Marketing",
        url: "https://www.sugarcrm.com/",
        color: "#2980B9",
      },
    ],
  },
];
