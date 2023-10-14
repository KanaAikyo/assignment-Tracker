//We talked about "toggle" and the "complete assigment" in class, but we could not figure out why its not working

import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import {useState} from "react" 

interface Assignment {
  asName:string,
  id: string,
  complete: boolean 

}


function App() {
  const[disbut, setDisbut]=useState<boolean>(true)
  const [inputVal, setInputVal] = useState<string>("");
  const [newArray, setNewArray] = useState<Assignment[]>([]);

  const unlockButton=(newValue:string)=>{
    setInputVal(newValue);
    setDisbut(newValue === "");
  }

  const addArray = (e: any) => {
    setNewArray((prevArray: any) => {
      const newArrayCopy = [
        ...prevArray,
        { asName: e, id: crypto.randomUUID(), complete: false }
      ];
    
      return newArrayCopy;
    });
  };
 
  const onDelete = (id: string) => {
    setNewArray((AssigmentArray) => {
      const updatedArray = AssigmentArray.filter((assignment: any) => assignment.id !== id);
      return updatedArray;
    });
  };
  

  // we talk togther in class
  const Toggled = (id: string) => {
    const updatedArray:Assignment[]=[];
    newArray.map((e)=>{
      if(e.id===id && e.complete===true){ 
        e.complete=false  
        updatedArray.push(e)
      }else if(e.id===id && e.complete===false){
        let newE = {...e}
        newE.complete=true
        console.log("test")
        updatedArray.push(newE)
      }else{
        updatedArray.push(e)
      }
      console.log(updatedArray)
      setNewArray(updatedArray)
    })   
      
  };



  return (
    <>
      <Header disbut={disbut} inputVal={inputVal} unlockButton={unlockButton} addArray={addArray}/>
      <Assignments newArray={newArray} onDelete={onDelete} Toggled={Toggled} />
    </>
  );


}
export default App;
