import React, { useState } from "react";
import { Stack, Box } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
// import PopularPropertyCard from "./PopularPropertyCard";

import Link from "next/link";
import PopularPropertyCard from "./PopularPropertyCard";

const PopularProperties = ({ initialInput, ...props }: any) => {
  const [popularProperties, setPopularProperties] =
    useState<number[]>(initialInput);

  return (
    <Stack className={"popular-properties"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box component={"div"} className={"left"}>
            <span>Popular properties</span>
            <p>Popularity is based on views</p>
          </Box>
          <Box component={"div"} className={"right"}>
            <div className={"more-box"}>
              <Link href={"/property"}>
                <span>See All Categories</span>
              </Link>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>
        <Stack className={"card-box"}>
          <Swiper
            className={"popular-property-swiper"}
            slidesPerView={"auto"}
            spaceBetween={25}
            navigation={{
              nextEl: ".swiper-popular-next",
              prevEl: ".swiper-popular-prev",
            }}
            pagination={{
              el: ".swiper-popular-pagination",
            }}
          >
            {popularProperties.map((property, index) => {
              return (
                <SwiperSlide key={index} className={"popular-property-slide"}>
                  <PopularPropertyCard />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
        <Stack className={"pagination-box"}>
          <WestIcon className={"swiper-popular-prev"} />
          <div className={"swiper-popular-pagination"}></div>
          <EastIcon className={"swiper-popular-next"} />
        </Stack>
      </Stack>
    </Stack>
  );
};

PopularProperties.defaultProps = {
  initialInput: [1, 2, 3, 4, 5, 6, 7],
};

export default PopularProperties;
