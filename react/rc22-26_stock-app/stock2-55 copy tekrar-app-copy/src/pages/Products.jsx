import ProductTable from "../components/ProductTable";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";

import ProductModal from "../components/ProductModal";
const Products = () => {
  const { getStockData } = useStockCall();
  const { products } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getStockData("products");
  }, []);
  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mb: 4 }}>
        NEW PRODUCT
      </Button>

      <ProductModal open={open} handleClose={handleClose} />
      <ProductTable />
    </div>
  );
};

export default Products;
