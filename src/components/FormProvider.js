
import { createContext,useState } from "react";

export const FormContext = createContext();

export const FormProvider = () => {
    
    const [medName, setMedName] = useState("Medicine 1");
    const [medDes, setMedDes] = useState("Antibiotic");
    const [medPrice, setMedPrice] = useState("10.66");
    const [medQuant, setMedQuant] = useState("0");
    
        const medList = {
        medName: medName,
        medDes: medDes,
        medPrice: medPrice,
        medQuant : medQuant
    }
    
    return (
        <FormContext.Provider value={{ medList, setMedName, setMedDes, setMedPrice, setMedQuant }}>
            {children}
       </FormContext.Provider>
    );
}
