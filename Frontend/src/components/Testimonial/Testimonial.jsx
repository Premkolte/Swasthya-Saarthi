import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "Swasthya Saarthi has been a game-changer for me. The resources provided are incredibly helpful, and I feel more informed about my health choices.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Steve Smith",
    text: "The platform is user-friendly and offers a wealth of information. I highly recommend it to anyone looking to improve their health literacy.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Kristen",
    text: "Thanks to Swasthya Saarthi, I was able to find the right healthcare services for my family. The testimonials and reviews helped me make informed decisions.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Ariana",
    text: "This platform has made accessing healthcare information so much easier. I appreciate the clear layout and the variety of resources available.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false, // Fixed arrow prop
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* Header Section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-600">
            OUR TESTIMONIALS
          </h1>
          <p className="font-semibold text-3xl">
            What Our Users Say About Us
          </p>
        </div>

        {/* Testimonial Cards Section */}
        <div>
          <Slider {...settings}>
            {TestimonialsData.map((item) => (
              <div key={item.id} className="px-4">
                <div className="flex flex-col gap-4 p-6 shadow-md rounded-xl bg-gray-100">
                  {/* Upper Section */}
                  <div className="flex items-center gap-5">
                    <img
                      src={item.img}
                      alt={`Profile of ${item.name}`}
                      className="w-16 h-16 rounded-full"
                    />
                    <p className="text-xl font-bold text-black/80">
                      {item.name}
                    </p>
                  </div>

                  {/* Bottom Section */}
                  <div className="py-4 space-y-2">
                    <p className="text-sm text-gray-600">{item.text}</p>
                    <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
