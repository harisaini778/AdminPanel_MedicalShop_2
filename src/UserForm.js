import { useContext } from "react";
import { FormContext } from "./components/FormProvider";

const UserForm = () => {

    const [setMedName, setMedDes, setMedPrice, setMedQuant] = useContext(FormContext);


  
    const submitFormHandeler = (e) => {
        e.preventDefault();
        console.log("form submitted");
    }
    
    <div>

        <form onSubmit = {submitFormHandeler}>
            <label for="name">Medicine Name : </label>
            <input id="name" type="text" onChange={setMedName(e.target.value)}></input>

            <label for="description">Medicine Description : </label>
            <input id="description" type="text" onChange={setMedDes(e.target.value)}></input>

            <label for="price">Medicine Price : </label>
            <input id="price" type="number" onChange={setMedPrice(e.target.value)}></input>

            <label for="add"> + </label>
            <input id="add" type="number" onChange={setMedQuant(e.target.value)}></input>

        </form>
    </div>
}
export default UserForm;