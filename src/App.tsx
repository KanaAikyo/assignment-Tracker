import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import {useState} from "react" 

function App() {
  const[disbut, setDisbut]=useState<boolean>(true)
  const [inputVal, setInputVal] = useState<string>("");
  const [newArray, setNewArray]= useState<any>([])
  // const [onDelete, setOndelete]= useState<any>('')

  const unlockButton=(newValue:string)=>{
    setInputVal(newValue);
    setDisbut(newValue === "");
  }

  const addArray = (e: any) => {
    // Use the state updater function to ensure you work with the updated state
    setNewArray((prevArray: any) => {
      const newArrayCopy = [
        ...prevArray,
        { asName: e, id: newArray.length, complete: false }
      ];
      console.log(newArrayCopy);
      return newArrayCopy;
    });
  };
 
  const onDelete = (id: number) => {
    setNewArray((prevArray: any) => {
      const updatedArray = prevArray.filter((assignment: any) => assignment.id !== id);
      return updatedArray;
    });
  };

  const Toggled = (id: number) => {
    setNewArray((prevArray: any) => {
      const updatedArray = [...prevArray];
      if (updatedArray[id].complete === false) {
        console.log("True<false")
        updatedArray[id].complete = true;
      } else if (updatedArray[id].complete === true) {
        console.log("True>false")
        updatedArray[id].complete = false;
      } else {
        console.log("error");
      }
      return updatedArray;
    });
  };

  //const Toggled=(id:number)=>{
  //Why do we need to use a lot of array and need to return Array? 
    // const updatedArray=[...preArray]
    //   {if(updatedArray[id].complete===false){
    //     updatedArray[id].complete=true
    //   }else if(updatedArray[id].complete===true){
    //     updatedArray[id].complete=false
    //   }else{
    //     console.log("error")
    //   }}
    //   console.log(updatedArray)
    //   return updatedArray
    // })
  //}

  

  return (
    <>
      <Header disbut={disbut} inputVal={inputVal} unlockButton={unlockButton} addArray={addArray}/>
      <Assignments newArray={newArray} onDelete={onDelete} Toggled={Toggled} />
    </>
  );


}
export default App;
