import { Box, List, Stack, Typography } from "@mui/material";

import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { UserRole } from "@/types";
import { drawerItems } from "@/utils/generateSidebarItems";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={1}
        py={1}
        gap={1}
        component={Link}
        href={"/"}
      >
        <Image src={assets.svgs.logo} alt="logo" height={40} width={40} />
        <Typography variant="h6" component="h6">
          PH HealthCare
        </Typography>
      </Stack>
      <List>
        {drawerItems("doctor" as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
