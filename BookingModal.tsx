import React from "react";
import CarCard from "../Home/CarCard";
import Form from "./Form";

function BookingModal({
  car,
  initialLocations = [], // Default to an empty array if not provided
}: {
  car: any;
  initialLocations?: any[];
}) {
  return (
    <div className="modal-box w-11/12 max-w-5xl">
      <div className="border-b-[1px] pb-2">
        <h3 className="text-[30px] font-light text-gray-400">Rent A Car Now!</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <CarCard car={car} />
        </div>
        <div>
          <Form car={car} initialLocations={initialLocations} />
        </div>
      </div>
      <div className="modal-action">
        <button className="btn" onClick={() => (document.getElementById("my_modal_4") as HTMLDialogElement)?.close()}>Close</button>
        <button className="btn bg-blue-500 text-white hover:bg-blue-800">Save</button>
      </div>
    </div>
  );
}

export default BookingModal;
