"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const initialState = null;

function ReservationProvider({ children }) {
  const [selected, setSelected] = useState(initialState);
  const resetSelected = () => setRange(initialState);

  return (
    <ReservationContext.Provider
      value={{ selected, setSelected, resetSelected }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { ReservationProvider, useReservation };
