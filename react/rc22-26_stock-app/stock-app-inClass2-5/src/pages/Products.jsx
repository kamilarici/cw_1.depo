import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/FirmModal";
import ProductTable from "../components/ProductTable";

const Products = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({ name: "", phone: "", address: "", image: "" });
  };

  useEffect(() => {
    // getFirms()
    getStockData("firms");
  }, []);

  return (
    <div>
      <ProductTable />
    </div>
  );
};

export default Products;
