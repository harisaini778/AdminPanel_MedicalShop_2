import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = (props) => {
  const [med, setMed] = useState({
    medName: "",
    medDes: "",
    medPrice: "",
    medQuant: "",
    id: Date.now(),
  });

  const [medList, setMedList] = useState([]);

  const addMedicine = () => {
    setMedList((prevMedList) => [...prevMedList, med]);
    setMed({
      medName: "",
      medDes: "",
      medPrice: "",
      medQuant: "",
      id: Date.now(),
    });
  };

  const setMedName = (name) => {
    setMed((prevMed) => ({ ...prevMed, medName: name }));
  };

  const setMedDes = (des) => {
    setMed((prevMed) => ({ ...prevMed, medDes: des }));
  };

  const setMedPrice = (price) => {
    setMed((prevMed) => ({ ...prevMed, medPrice: price }));
  };

  const setMedQuant = (quant) => {
    setMed((prevMed) => ({ ...prevMed, medQuant: quant }));
  };

  const contextValue = {
    medList,
    addMedicine,
    setMedName,
    setMedDes,
    setMedPrice,
    setMedQuant,
  };

  return (
    <FormContext.Provider value={contextValue}>
      {props.children}
    </FormContext.Provider>
  );
};
