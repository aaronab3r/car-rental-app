import React, { useEffect, useState } from "react";

function CarsFiltersOption({ carsList, setBrand, orderCarList }: any) {
  const [brandList, setBrandList] = useState<string[]>([]);

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    const BrandSet = new Set<string>();
    carsList.forEach((element: any) => {
      BrandSet.add(element.carBrand);
    });
    console.log(BrandSet);
    setBrandList(Array.from(BrandSet));
  };

  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore our cars you might like</h2>
      </div>
      <div className="flex gap-5">
        {/* Price Filter */}
        <select
          className="select select-bordered w-full max-w-xs"
          defaultValue=""
          onChange={(e) => orderCarList(Number(e.target.value))}
        >
          <option value="" disabled>
            Price
          </option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>

        {/* Brand Filter */}
        <select
          className="select select-bordered w-full max-w-xs md:block hidden"
          onChange={(e) => setBrand(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            Car Brand
          </option>
          {brandList.length > 0
            ? brandList.map((brand: string, index: number) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))
            : null}
        </select>
      </div>
    </div>
  );
}

export default CarsFiltersOption;
