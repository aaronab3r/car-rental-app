import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";
import { AiOutlineArrowRight } from "react-icons/ai";

function CarCard(props: any) {
  const [car, setCar] = useState<any>();

  useEffect(()=>{
    if(props.car)
    {
      setCar(props.car)
    }
  },[props.car])

  return car&&(
    <div className="group bg-gray-50 p-4 hover:bg-white hover:border-[1px] cursor-pointer duration-300 border-blue-500 relative">
      {/* Car Details */}
      <h2 className="text-[25px] font-medium mb-2">{car?.name}</h2>
      <span className="text-[22px] font-medium">${car.price}</span>
      <span className="text-[18px] font-light"> /day</span>

      {/* Image */}
      <div className="image-container">
        <Image
          src={car.image?.url}
          alt={car.name}
          width={300}
          height={200}
          className="w-[250px] h-[150px] mb-3 object-contain"
        />

        {/* Hover Button */}
        <button className="absolute bottom-0 left-0 w-full bg-blue-500 text-white text-sm py-2 opacity-0 group-hover:opacity-100 flex items-center justify-center duration-300">
          Rent now <AiOutlineArrowRight className="ml-2" />
        </button>
      </div>

      {/* Car Info */}
      <div className="flex justify-between items-center text-gray-500 mt-3">
        <div className="flex flex-col items-center">
          <PiSteeringWheelFill className="text-[22px] mb-1" />
          <h2 className="text-[14px] font-light">{car.carType}</h2>
        </div>
        <div className="flex flex-col items-center">
          <MdAirlineSeatReclineNormal className="text-[22px] mb-1" />
          <h2 className="text-[14px] font-light">{car.seats} Seats</h2>
        </div>
        <div className="flex flex-col items-center">
          <FaGasPump className="text-[22px] mb-1" />
          <h2 className="text-[14px] font-light">{car.carAvg} MPG</h2>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
