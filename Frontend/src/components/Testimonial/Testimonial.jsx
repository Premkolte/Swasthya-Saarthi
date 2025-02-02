import React from "react";
import Slider from "react-slick";

const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "Swasthya Saarthi has been a game-changer for me. The resources provided are incredibly helpful, and I feel more informed about my health choices.",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Steve Smith",
    text: "The platform is user-friendly and offers a wealth of information. I highly recommend it to anyone looking to improve their health literacy.",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Kristen",
    text: "Thanks to Swasthya Saarthi, I was able to find the right healthcare services for my family. The testimonials and reviews helped me make informed decisions.",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
  },
  {
    id: 4,
    name: "Ariana",
    text: "This platform has made accessing healthcare information so much easier. I appreciate the clear layout and the variety of resources available.",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = TestimonialsData.length;

  const setting = {
    dots: true,
    arrow: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    beforeChange: (current, next) => setCurrentSlide(next), // Update current slide

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
          initialSlide: 2,
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
  const handleNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  return (
    <div className="py-14 mb-10">
      <div className="container">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-600">
            OUR TESTIMONIALS
          </h1>
          <p className="font-semibold text-3xl ">
            What Our Students Say About Us
          </p>
        </div>
        {/* Testimonial cards section */}
        <div>
          <Slider {...setting}>
            {TestimonialsData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                    {/* upper section */}
                    <div className="flex justify-start items-center gap-5">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="text-xl font-bold text-black/80">
                          {item.name}
                        </p>
                        <p>{item.name}</p>
                      </div>
                    </div>
                    {/* bottom section */}
                    <div className="py-6 space-y-4">
                      <p className="text-sm text-gray-500">{item.text}</p>
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
