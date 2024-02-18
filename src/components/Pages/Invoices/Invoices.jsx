import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./data";
export default function Invoices() {
  return (
    <div>
      <Box>
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
