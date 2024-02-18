import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./data";


const Contacts = () => {
  return (
    <Box>
         <h2>Contacts</h2>
      <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Contacts;