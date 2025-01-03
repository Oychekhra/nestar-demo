import React from "react";
import { Stack } from "@mui/material";

const TopAgentCard = () => {
  return (
    <Stack className={"top-agent-card"}>
      <img
        style={{ width: "209px", height: "209px" }}
        src="/img/profile/girl.svg" 
        alt=""
      />
      <strong>Oyxon</strong>
      <span>AGENT</span>
    </Stack>
  );
};

export default TopAgentCard;
