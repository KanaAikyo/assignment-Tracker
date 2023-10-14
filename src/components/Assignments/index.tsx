import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface Assignment {
  asName:string,
  id: string,
  complete: boolean 

}


interface HeaderProps{
  newArray:Assignment[]
  onDelete:(id:string)=>void
  Toggled:(id:string)=>void
}


export function Assignments({newArray,onDelete,Toggled}:HeaderProps) {
const counting = newArray.filter((e:any)=>{e.complete === true }).length

  
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{newArray.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
           {/* we talk togther in class */}
          <span>{counting} of {newArray.length}</span>
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
