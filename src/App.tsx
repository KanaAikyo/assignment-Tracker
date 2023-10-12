import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import {useState} from "react" 


function App() {
  const[disbut, setDisbut]=useState<boolean>(true)
  const [inputVal, setInputVal] = useState<string>("");
  const [newArray, setNewArray]= useState<any>([])

  const unlockButton=(newValue:string)=>{
    setInputVal(newValue);
    setDisbut(newValue === "");
  }

  const addArray = (e: string) => {
    setNewArray((prevArray:(number | string| boolean)[]) => {
      const newArrayCopy = [
        ...prevArray,
        { asName: e, id: newArray.length, complete: false }
      ];
      return newArrayCopy;
    });
  };
 
  const onDelete = (id: number) => {
    setNewArray((prevArray:(number | string| boolean)[]) => {
      const updatedArray = prevArray.filter((assignment: any) => assignment.id !== id);
      return updatedArray;
    });
  };

  const Toggled = (id: number) => {
    setNewArray((prevArray:any) => {
      const updatedArray = [...prevArray];
      updatedArray[id].complete = !updatedArray[id].complete; 
      console.log(updatedArray[id].complete)

      return updatedArray;
    });
  };



  return (
    <>
      <Header disbut={disbut} inputVal={inputVal} unlockButton={unlockButton} addArray={addArray}/>
      <Assignments newArray={newArray} onDelete={onDelete} Toggled={Toggled} />
    </>
  );


}
export default App;
