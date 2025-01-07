import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack, Container} from "@mui/material";
import { green, brown } from "@mui/material/colors";
import { NextPage } from "next";

const PropertyDetail: NextPage = () => {
    const device = useDeviceDetect();
    if (device === "mobile") {
        return (
            <Container>PROPERTY DETAIL MOBILE </Container>
        )
    }else {
        return (
            <Container>PROPERTY DETAIL</Container>
        )
    }
   
};

export default withLayoutBasic(PropertyDetail);