import React from 'react'
import CarCard from './CarCard'

function CarsList(props:any) {
  return (
    <div>
        {props.carsList.map((car:any,index:number)=>(
            <div>
                <CarCard car={car} />
            </div>
        ))}
    </div>
  )
}

export default CarsList