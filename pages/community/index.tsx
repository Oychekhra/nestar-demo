import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
    console.log("COMMUNITY COMPONENT - PAGES ROUTER");
    const device = useDeviceDetect();
    const [title, setTitle] =useState<string>("hello");
    if (device === "mobile"){
        return(
            <div style={{margin: "20px"}}>
               <Stack className="container">COMMUNITY MOBILE </Stack>
            </div>
            );
    }else {
        return(
            <div style={{margin: "20px"}}>
               <Stack className="container">COMMUNITY</Stack>
            </div>
            );
    }
   
};

export default withLayoutBasic(Community);