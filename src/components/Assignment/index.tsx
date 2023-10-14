import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import {AiFillCheckCircle} from "react-icons/ai"


interface HeaderProps{
  asName: string
  id:string
  complete:boolean 
  onDelete:(id:string)=>void
  Toggled:(id:string)=>void
}

export function Assignment({asName,id,complete,onDelete,Toggled}:HeaderProps) {
 
  const handleDelete = () => {
    onDelete(id)
  };

const ToggleComplete =()=>{
  Toggled(id)
}
  
  return (

    <div className={styles.assignment}  >
    <button  className={complete ? "":styles.checkContainer} onClick={ToggleComplete}>
    <div/>
    <AiFillCheckCircle size={20} className={complete ? "":styles.checked} onClick={ToggleComplete}/>
    </button>
      

      <p className={complete ? styles.textCompleted:""}>{asName}</p>
      <button className={styles.deleteButton} onClick={handleDelete} >
        <TbTrash size={20}  className={styles.hideButton}/>
      </button>
    </div>

  );
}