import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import {AiFillCheckCircle} from "react-icons/ai"


interface HeaderProps{
  asName: string
  id:string
  complete:boolean 
  onDelete:(id:string)=>void
  Toggled:(id:string)=>void
  duedate:Date
}

export function Assignment({asName,id,complete,onDelete,Toggled,duedate}:HeaderProps) {
 
  const handleDelete = () => {
    onDelete(id)
  };

  const ToggleComplete =()=>{
    Toggled(id)
  }
  const duedateCalc =(e:Date)=>{
    const today = new Date()
    const due = new Date(e)
    const dayLeft = due.getTime() -today.getTime() 
    const countdown = (Math.floor(dayLeft/(1000 * 60 * 60 * 24)))
    console.log(countdown)
    if(countdown===0){
      return<span className="soon">Due: today</span>
    }else if(countdown===1){
      return<span className="soon">Due: tomorrow</span>
    }else if(countdown<0){
      return<span className="soon">over due</span>
    }else{
      return<span className="havetime" >Due: {countdown}days</span>
    }
  }



  
  return (

    <div className={styles.assignment}  >
    <button  className={complete ? "":styles.checkContainer} onClick={ToggleComplete}>
    <div/>
    <AiFillCheckCircle size={20} className={complete ? "":styles.checked} onClick={ToggleComplete}/>
    </button>
      

      <p className={complete ? styles.textCompleted:""}>{asName} {duedateCalc(duedate)}</p>
      <button className={styles.deleteButton} onClick={handleDelete} >
        <TbTrash size={20}  className={styles.hideButton}/>
      </button>
    </div>

  );
}