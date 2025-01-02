import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import FavoriteIcon from "@mui/icons-material/Favorite";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { useRouter } from "next/router";

const TopPropertyCard = () => {
  return (
    <Stack className="top-card-box">
      <Box
        component={"div"}
        className={"card-img"}
        style={{ backgroundImage: `url(/img/banner/types/villa.webp)` }}
      >
        <div>$420 000</div>
      </Box>
      <Box component={"div"} className={"info"}>
        <strong className={"title"}>Remian Stay Apartment</strong>
        <p className={"desc"}>Gimho Staya</p>
        <div className={"options"}>
          <div>
            <img src="/img/icons/bed.svg" alt="" />
            <span>4 bed</span>
          </div>
          <div>
            <img src="/img/icons/room.svg" alt="" />
            <span>5rooms</span>
          </div>
          <div>
            <img src="/img/icons/expand.svg" alt="" />
            <span>270 m2</span>
          </div>
        </div>
        <Divider sx={{ mt: "15px", mb: "17px" }} />
        <div className={"bott"}>
          <p>Sale</p>
          <div className="view-like-box">
            <IconButton color={"default"}>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">250</Typography>
            <IconButton color={"default"}>
              <FavoriteIcon />
            </IconButton>
            <Typography className="view-cnt">401</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default TopPropertyCard;
