import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
    console.log("COMMUNITY COMPONENT - PAGES ROUTER");
    const [title, setTitle] =useState<string>("hello");
    return(
    <div style={{margin: "20px"}}>
       <Stack className="container">COMMUNITY</Stack>
    </div>
    );
};

export default withLayoutBasic(Community);