import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import ProductModal from "../components/ProductModal";
import ProductTable from "../components/Producttable";

const Products = () => {
  const { getStockData } = useStockCall();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // ? bilgileri apiden çekiyoruz
  useEffect(() => {
    getStockData("products");
    getStockData("categories");
    getStockData("brands");
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        NEW PRODUCT
      </Button>

      <ProductModal open={open} handleClose={handleClose} />
      <ProductTable />
    </div>
  );
};

export default Products;
