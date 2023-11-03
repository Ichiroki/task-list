import { useEffect, useState } from "react";
import ToDoList from "../components/ToDoList";
import axios from "axios";
import ModalBox from "../components/TaskListModal/ModalBox";
import Button from "../components/TaskListModal/Button";

interface ListData {
   id: number
   title: string
   desc: string
   created_at: string
}

// Colors that supported: blue, green,

function Todo() {
   const [list, setList] = useState<any>([])

   const getList = async() => {
      try {
         const response = await axios.get('http://localhost:8080/list')
         setList(response.data)
      } catch(e) {
         console.log(e)
      }
   }

   useEffect(() => {
      getList()
   }, [])

   return (
      <>
         <div className="flex h-full pt-16">
            <div className="bg-gray-300 w-[25%] px-12 py-7">
               <div className="bg-gray-200 w-full h-full rounded-2xl px-5 pt-3">
                  <h1 className="text-slate-800 text-xl border-b-4 border-slate-800 w-fit pb-1">Your Task List</h1>
                  <div>
                     {list.map((li: ListData) => <ToDoList title={li.title} desc={li.desc} key={li.id} id={li.id} created_at={li.created_at}/>)}
                  </div>
               </div>
            </div>
            <div className="bg-gray-300 w-[75%] px-12 py-7">
               <div className="bg-gray-200 w-full h-full rounded-2xl">
                  <div className="p-4">
                     <Button variant="green" text="Create Task" target="create-task-box" />
                     <ModalBox button="Create Task" title="Create Task" buttonColor="green" id="create-task-box" />
                  </div>
                  <div>

                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Todo;