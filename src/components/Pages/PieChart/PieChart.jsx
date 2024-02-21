import Pie from "./Pie";
import Header from "../../Header";
import { Box} from "@mui/material";
export default function PieChart() {
  return (
  <Box>
  <Header title="Pie Chart" subTitle="Simple Pie Chart" />

  <Pie />
</Box>
  );
}
