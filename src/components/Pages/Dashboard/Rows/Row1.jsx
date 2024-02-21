import { Stack } from "@mui/material";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@emotion/react";
import { data1, data2, data3, data4 } from "./data";
export default function Row1() {
  const theme = useTheme();
  return (

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={0.5}
        justifyContent={{ xs: "center", sm: "space-between" }}
        >
        <Card
          Icon={
            <EmailIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          Title={"12.361"}
          SubTitle={"Emils sent"}
          Increase={"+14%"}
          data={data1}
          scheme={"category10"}
        />
        <Card
          Icon={
            <EmailIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          Title={"12.361"}
          SubTitle={"Emils sent"}
          Increase={"+14%"}
          data={data2}
          scheme={"accent"}
        />
        <Card
          Icon={
            <EmailIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          Title={"12.361"}
          SubTitle={"Emils sent"}
          Increase={"+14%"}
          data={data3}
          scheme={"dark2"}
        />
        <Card
          Icon={
            <EmailIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
          Title={"12.361"}
          SubTitle={"Emils sent"}
          Increase={"+14%"}
          data={data4}
          scheme={"paired"}
        />
      </Stack>
    
  );
}
