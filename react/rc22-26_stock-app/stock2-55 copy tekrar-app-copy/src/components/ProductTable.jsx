import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const columns = [
  { field: "id", headerName: "#", headerAlign: "center", fex: 0.5 },
  {
    field: "category",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "brand",
    headerName: "brand",
    width: 150,
    editable: true,
  },
  {
    field: "name",
    headerName: "name",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "stock",
    headerName: "stock",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

export default function ProductTable() {
  const { products } = useSelector((state) => state.stock);
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
