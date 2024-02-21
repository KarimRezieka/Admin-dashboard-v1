import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./data";
import Header from "../../Header";
export default function Invoices() {
  return (
    <div>
      <Box>
      <Header title="INVOICES" subTitle="List of Invoice Balances" />

        <Box sx={{ height: 650, mx: "auto" }}>
          <DataGrid
            checkboxSelection
            rows={rows}
            // @ts-ignore
            columns={columns}
          />
        </Box>
      </Box>
    </div>
  );
}
