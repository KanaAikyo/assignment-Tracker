//hello Armaan, Sorry, I could not figure out what was the cause about following....
//We talked about "toggle" and the "complete assigment" in class, but we could not figure out why its not working

import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from 'react';
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface Assignment {
  asName:string,
  id: string,
  complete: boolean,
  duedate:Date,

}

function App() {
  const[disbut, setDisbut]=useState<boolean>(true)
  const [inputVal, setInputVal] = useState<string>("");
  const [newArray, setNewArray] = useState<Assignment[]>([]);
  const [selected, setSelected] = useState();
  const [isOpen, setIsOpen] = useState(false);
    
  function toggle(e:any) {
    e.preventDefault()
    console.log(e)
    setIsOpen(!isOpen);
  }

  function Calender() {
    let footer = <p>Please pick Due day.</p>;
    if (selected) {
      footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    const handleDateSelect = (date:any) => {
      setSelected(date);
      setIsOpen(false); 
    };
    
    return (

      <DayPicker
        mode="single"
        selected={selected}
        onSelect={handleDateSelect}
        footer={footer}
        className="calendar"
      />
    );
    
  }

  const unlockButton=(newValue:string)=>{
    setInputVal(newValue);
    setDisbut(newValue === "");
  }

  const addArray = (e: any) => {
    setNewArray((prevArray: any) => {
      const newArrayCopy = [
        ...prevArray,
        { asName: e, id: crypto.randomUUID(), complete: false, duedate:selected}
      ];
      console.log(newArrayCopy)
      return newArrayCopy;
    });
  };
 
  const onDelete = (id: string) => {
    setNewArray((AssigmentArray) => {
      const updatedArray = AssigmentArray.filter((assignment: any) => assignment.id !== id);
      return updatedArray;
    });
  };
  

  //we talk togther in class and could not figure out
  const Toggled = (id: string) => {
    const updatedArray:Assignment[]=[];
    newArray.map((e)=>{
      if(e.id===id && e.complete===true){ 
        e.complete=false    
        updatedArray.push(e)
      }else if(e.id===id && e.complete===false){
        e.complete=true
        updatedArray.push(e)
      }else{
        updatedArray.push(e)
      }
      console.log(updatedArray)
      setNewArray(updatedArray)
    })   
      
  }

  return (
    <>
      <Header 
       isOpen={isOpen}
       toggle = { toggle }
       Calender={Calender} 
       disbut={disbut}
       inputVal={inputVal} 
       unlockButton={unlockButton}
       addArray={addArray}/>
      <Assignments 
      newArray={newArray}
      onDelete={onDelete}
      Toggled={Toggled}
       />
    </>
  );


}
export default App;
