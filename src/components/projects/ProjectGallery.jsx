import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectGallery = ({ singleProjectData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // or more depending on layout
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="mt-12">
      <Slider {...settings}>
        {singleProjectData?.ProjectImages.map((project) => (
          <div key={project.id} className="px-4">
            <img
				src={project.img}
				alt={project.title}
				className="rounded-xl cursor-pointer shadow-lg mx-auto"
				style={{
					height: 300, // or any fixed height you want
					objectFit: "contain",
					width: "100%",
				}}
			/>

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectGallery;