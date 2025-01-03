import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TrendPropertyCard = () => {
  return (
    <Stack className="trend-card-box">
      <Box
        component={"div"}
        className={"card-img"}
        style={{
          backgroundImage: `url(/img/banner/types/house.webp)`,
        }}
      >
        <div>$420000</div>
      </Box>
      <Box component={"div"} className={"info"}>
        <strong className={"title"}>Kingston Buildings</strong>
        <p className={"desc"}>Super View Apartments</p>
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
          <p>Rent</p>
          <div className="view-like-box">
            <IconButton color={"default"}>
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view-cnt">124</Typography>
            <IconButton color={"default"}>
              <FavoriteIcon style={{ color: "red" }}  />
            </IconButton>
            <Typography className="view-cnt">300</Typography>
          </div>
        </div>
      </Box>
    </Stack>
  );
};

export default TrendPropertyCard;
