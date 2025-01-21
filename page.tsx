"use client";

import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any[]>([]);

  const getCarList_ = async () => {
    try {
      const result: any = await getCarsList();
      console.log("API Result:", result); // Debug log
      setCarsList(result?.carLists || []);
    } catch (error) {
      console.error("Error fetching car list:", error);
    }
  };

  useEffect(() => {
    getCarList_(); // Fetch car list
  }, []);

  console.log("carsList in Home:", carsList); // Debug log

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOption />
      <CarsList carsList={carsList} />
    </div>
  );
}



/*
"use client";

import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {


  const [carsList,setCarsList]=useState<any>([])
  useEffect(()=>{
    getCarList_();
  },[])
  const getCarList_ = async()=>{
    const result:any=await getCarsList();  
    setCarsList(result?.carsLists)
  }

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOption />
      <CarsList carsList={carsList}/> 
    </div>
  );
}
*/