import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import {AiFillCheckCircle} from "react-icons/ai"


interface HeaderProps{
  asName: string
  id:number
  complete:boolean 
  onDelete:(id:number)=>void
  Toggled:(id:number)=>void
}

export function Assignment({asName,id,complete,onDelete,Toggled}:HeaderProps) {
 
  const handleDelete = () => {
    // Call the provided event handler to delete the assignment
    onDelete(id)
  };

const ToggleComplete =()=>{
  Toggled(id)
}
  
  return (

    <div className={styles.assignment} onClick={ToggleComplete} >
      <button className={styles.checkContainer} >
      <div></div>
      </button>
      <AiFillCheckCircle size={20} className={styles.checked} />

      <p className={complete ? "style.textCompleted":""}>{asName}</p>
      {/* //how they can detect the id ???*/}
      <button className={styles.deleteButton} onClick={handleDelete} >
        <TbTrash size={20}  className={styles.hideButton}/>
      </button>
    </div>

  );
}