import React, { useState } from "react";
import CarCard from "./CarCard";
import BookingModal from "../CarBooking/BookingModal";

function CarsList({
  carsList,
  isLoaded,
  initialLocations = [], // Optional locations prop
}: {
  carsList: any[];
  isLoaded: boolean;
  initialLocations?: any[]; // Optional
}) {
  const [selectedCar, setSelectedCar] = useState<any>(null);

  const openModal = (car: any) => {
    setSelectedCar(car);
    const modal = document.getElementById("my_modal_4") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Render Car Cards */}
      {carsList.map((car: any, index: number) => (
        <div key={car.id || index} onClick={() => openModal(car)}>
          <CarCard car={car} />
        </div>
      ))}

      {/* Modal */}
      <dialog id="my_modal_4" className="modal">
        {selectedCar && <BookingModal car={selectedCar} initialLocations={initialLocations} />}
      </dialog>
    </div>
  );
}

export default CarsList;
