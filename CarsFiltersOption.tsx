import React from "react";

function CarsFiltersOption() {
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
        >
          <option value="" disabled>
            Price
          </option>
          <option value="leastToMost">Least to Most</option>
          <option value="mostToLeast">Most to Least</option>
        </select>

        {/* Manufacturer Filter */}
        <select
          className="select select-bordered w-full max-w-xs md:block hidden"
          defaultValue=""
        >
          <option value="" disabled>
            Manufacturer
          </option>
          <option value="honda">Honda</option>
          <option value="lexus">Lexus</option>
          <option value="toyota">Toyota</option>
        </select>
      </div>
    </div>
  );
}

export default CarsFiltersOption;
