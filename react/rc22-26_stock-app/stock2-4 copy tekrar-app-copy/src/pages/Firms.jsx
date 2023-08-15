import { useEffect } from "react"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import { useSelector } from "react-redux"
import useStockCall from "../hooks/useStockCall"
import FirmCard from "../components/FirmCard"
// import axios from "axios"
// import { useDispatch } from "react-redux"
// import { fetchFail, fetchStart, getFirmsSuccess } from "../features/stockSlice"

const Firms = () => {
  // const { token } = useSelector((state) => state.auth)
  // const dispatch = useDispatch()

  // const getFirms = async () => {
  //   dispatch(fetchStart())
  //   try {
  //     const { data } = await axios(
  //       `${import.meta.env.VITE_BASE_URL}/stock/firms/`,
  //       {
  //         headers: { Authorization: `Token ${token}` },
  //       }
  //     )
  //     dispatch(getFirmsSuccess(data))
  //     console.log(data)
  //   } catch (error) {
  //     dispatch(fetchFail())
  //     console.log(error)
  //   }
  // }

  const { getStockData } = useStockCall()
  const { firms } = useSelector((state) => state.stock)

  useEffect(() => {
    // getFirms()
    getStockData("firms")
  }, [])

  console.log(firms)
  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>
        Firms
      </Typography>
      <Button variant="contained">NEW FIRM</Button>

      <Grid container justifyContent={"center"} spacing={2}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Firms
