import React, { useEffect, useState } from "react";
import { getStoreLocations } from "@/services";

function Form({ car, initialLocations = [] }: { car: any; initialLocations: any[] }) {
  const [storeLocation, setStoreLocation] = useState<any[]>(initialLocations);
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  useEffect(() => {
    if (initialLocations.length === 0) {
      const getStoreLocation_ = async () => {
        const resp: any = await getStoreLocations();
        setStoreLocation(resp.storesLocations || []);
      };
      getStoreLocation_();
    }
  }, [initialLocations]);

  return (
    <div className="p-5 max-w-md mx-auto">
      {/* Pick Up Location */}
      <div className="mb-4">
        <label htmlFor="pickUpLocation" className="block text-lg font-medium mb-2">
          Pick Up Location
        </label>
        {storeLocation.length > 0 ? (
          <select
            id="pickUpLocation"
            value={pickUpLocation}
            onChange={(e) => setPickUpLocation(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Select a location
            </option>
            {storeLocation.map((loc: any) => (
              <option key={loc.id || loc.address} value={loc.address}>
                {loc.address}
              </option>
            ))}
          </select>
        ) : (
          <p>Loading locations...</p>
        )}
      </div>

      {/* Pick Up Date */}
      <div className="mb-4">
        <label htmlFor="pickUpDate" className="block text-lg font-medium mb-2">
          Pick Up Date
        </label>
        <input
          type="date"
          id="pickUpDate"
          value={pickUpDate}
          onChange={(e) => setPickUpDate(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Drop Off Date */}
      <div className="mb-4">
        <label htmlFor="dropOffDate" className="block text-lg font-medium mb-2">
          Drop Off Date
        </label>
        <input
          type="date"
          id="dropOffDate"
          value={dropOffDate}
          onChange={(e) => setDropOffDate(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Pick Up Time */}
      <div className="mb-4">
        <label htmlFor="pickUpTime" className="block text-lg font-medium mb-2">
          Pick Up Time
        </label>
        <input
          type="time"
          id="pickUpTime"
          value={pickUpTime}
          onChange={(e) => setPickUpTime(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Drop Off Time */}
      <div className="mb-4">
        <label htmlFor="dropOffTime" className="block text-lg font-medium mb-2">
          Drop Off Time
        </label>
        <input
          type="time"
          id="dropOffTime"
          value={dropOffTime}
          onChange={(e) => setDropOffTime(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Contact Number */}
      <div className="mb-4">
        <label htmlFor="contactNumber" className="block text-lg font-medium mb-2">
          Contact Number
        </label>
        <input
          type="tel"
          id="contactNumber"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );
}

export default Form;
