import React, { useEffect, useState } from "react";
import { createBooking, getStoreLocations } from "@/services";

function Form({ car, initialLocations = [] }: { car: any; initialLocations: any[] }) {
  const [storeLocation, setStoreLocation] = useState<any[]>(initialLocations);
  const [formValue, setFormValue] = useState({
    pickUpLocation: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpTime: "",
    dropOffTime: "",
    contactNumber: "",
    userName: "Aaron Aberasturia",
    carId: "", // Keep carId as a string
  });

  useEffect(() => {
    // Fetch store locations if not provided
    if (initialLocations.length === 0) {
      const getStoreLocation_ = async () => {
        const resp: any = await getStoreLocations();
        setStoreLocation(resp.storesLocations || []);
      };
      getStoreLocation_();
    }
  }, [initialLocations]);

  useEffect(() => {
    // Update carId when a car is provided
    if (car && car.id) {
      setFormValue((prev) => ({
        ...prev,
        carId: car.id, // Update carId as a simple string
      }));
    }
  }, [car]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit=async()=>{
    console.log(formValue); // Log form values, including carId
    const resp=await createBooking(formValue);
    console.log(resp)
  };

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
            name="pickUpLocation"
            onChange={handleChange}
            value={formValue.pickUpLocation}
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
          name="pickUpDate"
          onChange={handleChange}
          value={formValue.pickUpDate}
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
          name="dropOffDate"
          onChange={handleChange}
          value={formValue.dropOffDate}
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
          name="pickUpTime"
          onChange={handleChange}
          value={formValue.pickUpTime}
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
          name="dropOffTime"
          onChange={handleChange}
          value={formValue.dropOffTime}
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
          name="contactNumber"
          onChange={handleChange}
          value={formValue.contactNumber}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your phone number"
        />
      </div>

      {/* Buttons */}
      <div className="modal-action">
        <button
          className="btn"
          onClick={() => (document.getElementById("my_modal_4") as HTMLDialogElement)?.close()}
        >
          Close
        </button>
        <button
          className="btn bg-blue-500 text-white hover:bg-blue-800"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Form;
