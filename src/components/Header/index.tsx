import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import {ChangeEvent} from "react" 


interface HeaderProps{
  disbut:boolean,
  inputVal:string,
  unlockButton:(value:string)=>void,
  addArray:(value:string)=>void
}

export function Header({disbut,inputVal,unlockButton,addArray}:HeaderProps) {
  
  const handleChange = (e:ChangeEvent<HTMLInputElement>  ) => {
    unlockButton(e.target.value);
  }
  
  const createList = (e:any ) => {
    e.preventDefault()
    addArray(e.target[0].value)
    unlockButton("")
  
  }

  return (
    <header className={styles.header}>
      
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={createList}>
        <input placeholder="Add a new assignment" 
        type="text" 
        value={inputVal} 
        onChange={handleChange}/>
        <button  disabled={disbut}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
