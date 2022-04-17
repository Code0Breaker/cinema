import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import img from "./photo.avif";
import style from "./style.module.css";
import { Select } from "./models";
import { useContext } from "react";
import { Context } from "../context";
import Link from 'next/link'
export default function Slider() {
  const { criteriaSlider, setCriteriaSlider, sliderData } = useContext(Context);
  return (
    <Box padding={1}>
      <Typography color={"white"} variant={"caption"} fontSize={16}>
        Show
      </Typography>
      <Select
        className={style.select}
        onChange={(e) => setCriteriaSlider(e.target.value)}
      >
        <option defaultValue={""}>all</option>
        <option value={"foreign-movie"}>films</option>
        <option value={"foreign-serial"}>serials</option>
        <option value={"cartoon-serial"}>cartoons</option>
        <option value={"anime-serial"}>anime</option>
      </Select>
      <Carousel
        additionalTransfrom={0}
        autoPlay={false}
        arrows
        centerMode={false}
        draggable
        focusOnSelect={false}
        ssr={true}
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 5,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        swipeable
      >
        {sliderData &&
          sliderData.map((item) => {
            return (
              <Link href={"/"} key={item.id}>
                <Box
                  className={style.card}
                  margin={1}
                  position={"relative"}
                  borderRadius={10}
                >
                  <img
                    src={item?.material_data?.poster_url}
                    style={{ borderRadius: 10 }}
                    width={"370px"}
                    height={"270px"}
                  />
                  <Box
                    position={"absolute"}
                    borderRadius={"0 0 10px 10px"}
                    zIndex={5}
                    bottom={0}
                    padding={2}
                    width={"100%"}
                  >
                    <Typography variant={"h5"} color={"white"}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant={"caption"}
                      color={"white"}
                      marginRight={2}
                    >
                      Free
                    </Typography>
                    <Typography
                      variant={"caption"}
                      color={"white"}
                      marginRight={2}
                    >
                      Action
                    </Typography>
                    <Typography
                      variant={"caption"}
                      color={"white"}
                      marginRight={2}
                    >
                      2021
                    </Typography>
                  </Box>
                </Box>
              </Link>
            );
          })}
      </Carousel>
    </Box>
  );
}
