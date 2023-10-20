import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import {ChangeEvent} from "react" 
import {SlCalender} from "react-icons/sl";

interface HeaderProps{
  disbut:boolean,
  inputVal:string,
  unlockButton:(value:string)=>void,
  addArray:(value:string)=>void,
  Calender:any,
  toggle:any,
  isOpen:any
}

export function Header({disbut,inputVal,unlockButton,addArray,Calender,toggle,isOpen}:HeaderProps) {
  
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    unlockButton(e.target.value);
  }
  
  const createList = (e: any ) => {
    e.preventDefault();
    addArray(e.currentTarget[0].value)
    unlockButton("");
  };

  
  return (
    <header className={styles.header}>
      
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={createList}>
        <input placeholder="Add a new assignment" 
        type="text" 
        value={inputVal} 
        onChange={handleChange}/>
        <div className="calenderParent">
        <div className="parent"></div>
          <button onClick={toggle}><SlCalender />
          </button> {isOpen && Calender()}
        </div>
        <button  disabled={disbut}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
     
    </header>
  );
}
