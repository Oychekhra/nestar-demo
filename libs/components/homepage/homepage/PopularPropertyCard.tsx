import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useRouter } from "next/router";

const PopularPropertyCard = () => {
  return (
    <Stack className="popular-card-box">
      <Box
        component={"div"}
        className={"card-img"}
        style={{
          backgroundImage: `url(/img/banner/types/apartment.webp)`,
        }}
      >
        <div className={"status"}>
          <img src="/img/icons/electricity.svg" alt="" />
          <span>top</span>
        </div>

        <div className={"price"}>$520000</div>
      </Box>
      <Box component={"div"} className={"info"}>
        <strong className={"title"}>Busan City Hall Apartment</strong>
        <p className={"desc"}>Good WIlls</p>
        <div className={"options"}>
          <div>
            <img src="/img/icons/bed.svg" alt="" />
            <span>3 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span>4 rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="" />
            <span>250 m2</span>
          </div>
        </div>
        <Divider sx={{ mt: "15px", mb: "17px" }} />
        <div className={"bott"}>
          <p>RENT</p>
          <div className="view-like-box">
            <IconButton color={"default"}>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">130</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default PopularPropertyCard;
