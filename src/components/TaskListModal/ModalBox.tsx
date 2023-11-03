import { useState } from "react"

interface ModalBoxType {
   id: string
   title: string
   button: string
   buttonColor: string
}

function TaskAddModalBox(props: ModalBoxType) {

   const [title, setTitle] = useState('')
   const [desc, setDesc] = useState('')
   const [createdAt, setCreatedAt] = useState('')

   const handleSubmit = async (e) => {
      e.preventDefault()
      const task = {title, desc, createdAt}

      console.log(task)
   }

   const curr = new Date()
   curr.setDate(curr.getDate())
   const dateNow = curr.toISOString().substring(0,10)

   return (
      <>
         <div id={props.id} tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-md max-h-full">

               <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                     <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide={props.id}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                     </button>
                     <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">{props.title}</h3>
                        <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                           <div>
                              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                              <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={(e) => setTitle(e.target.value)} required/>
                           </div>
                           <div className="hidden">
                              <input type="hidden" name="created_at" id="created_at" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required value={dateNow} onChange={(e) => setCreatedAt(e.target.value)}/>
                           </div>
                           <div>
                              <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                              <textarea id="desc" name="desc" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." onChange={(e) => setDesc(e.target.value)}></textarea>
                           </div>
                           <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Task</button>
                        </form>
                     </div>
               </div>
            </div>
         </div> 
      </>
   );
}

export default TaskAddModalBox;