import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface HeaderProps{
  newArray:(number | string| boolean)[]
  onDelete:(id:number)=>void
  Toggled:(id:number)=>void
}


export function Assignments({newArray,onDelete,Toggled}:HeaderProps) {
const counting = newArray.filter((e:any)=>{e.complete === true })

  
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{newArray.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{counting.length} of {newArray.length}</span>
        </div>
      </header>

      <div className={styles.list}>

     
      {newArray.map((assignment:any) => (
          <Assignment 
          onDelete={onDelete}
          asName={assignment.asName}
          id={assignment.id}
          complete={assignment.complete}
          Toggled={Toggled} />
        ))}
    
      </div>
    </section>
  );
}
