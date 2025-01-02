import React from "react";
import { useRouter } from "next/router";
import { Stack } from "@mui/material";

const TopAgentCard = () => {
  return (
    <Stack className="top-agent-card">

      <img src="/img/profile/defaultUser.svg" alt="" />

      <strong>John</strong>
      <span>Agent</span>
    </Stack>
  );
};

export default TopAgentCard;
