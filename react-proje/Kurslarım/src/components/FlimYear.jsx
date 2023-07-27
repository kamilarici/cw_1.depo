import React from 'react'


const FlimYear = ({setInfo,data}) => {

    return (

        <div className="years d-flex py-2 gap-4 flex-column ">
            {
                data.map((item) => <div key={item.id} className="border-0 fs-4 fw-bold text-secondary year"
                onClick={()=>setInfo(item.date)}
                >{item.date}</div>)
            }
        </div>


    )
}

export default FlimYear