import { useState } from "react"
import FlimInfo from "../components/FlimInfo"
import FlimYear from "../components/FlimYear"
import { data } from "../helper/data"

const Main = () => {
    const [info, setInfo] = useState("2022")
    return (
        <div className="main d-flex gap-5 p-3">
            <FlimYear data ={data} setInfo={setInfo}/>
            <FlimInfo data ={data} info={info}/>
        </div>
    )
}

export default Main