import { useState, useEffect } from "react";

function ToDoList() {

  const [task, setTask] = useState(() => {
    
    const storedTasks = localStorage.getItem("todo-tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });


  const [search, setSearch] = useState("");

  // let's save to localStorage whenever task changes
  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(task));
  }, [task]);



  // Let's Filter the tasks based on search input
  let filteredTasks = task.filter(task => task.toLowerCase().includes(search.toLowerCase()));


  function handleSearch(e) {
    setSearch(e.target.value);
  }



  // Logic to add a new task
  function handleAdd() {
    let newtask = document.querySelector("#task").value;
    setTask(task => [...task, newtask]);
    document.querySelector("#task").value = "";

  }

  // Logic to delete a task
  function handleDelete(index) {

    setTask(task => task.filter((_, i) => i !== index));

  }




  return (
    <>
      <div className=" rounded-[6px] w-screen h-screen p-2 bg-[rgba(255,255,255,0.2)] backdrop-blur-[2px] flex flex-col items-start justify-center gap-1  sm:w-[450px] sm:h-auto sm:items-center" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}>
        <header className="border-b-2 border-black w-full h-[10%]  p-1  text-3xl font-semibold flex items-center justify-center sm:h-auto">
          To-Do List
        </header>

        <main className="w-full h-[78%] px-1 flex flex-col items-center justify-center gap-2 sm:h-auto">
          <input type="search" value={search} placeholder="Search Task..." className=" rounded-[4px] outline-none w-full h-[35px]  text-[18px] text-white pl-1 bg-[rgba(0,0,0,0.3)] placeholder:text-gray-300" onChange={handleSearch} />

          <ul className={` w-full h-[500px]  overflow-auto sm:h-[450px] ${task.length ? " " : "flex justify-center items-center"} `} >

            {/* If the task array is empty, lets display a empty state message otherwise lets map the filtered task */}

            {
              task.length ?
                filteredTasks.map((filteredTasks, index) => <li key={index} className="bg-[rgba(255,255,255,0.2)] w-full h-[40px] flex items-center justify-between px-1 my-[2px] rounded-[4px] text-[18px] hover:cursor-pointer hover:bg-[rgba(0,0,0,0.2)] hover:text-white "> <span>{filteredTasks}</span> <span> <i class="fa-solid fa-pen-nib text-[20px] hover:underline hover:text-blue-600 " title="Edit"></i> | <i class="fa-solid fa-trash text-[20px] hover:text-red-600 " title="Delete" onClick={() => handleDelete(index)}></i></span></li>) :
                <li className="w-full h-[40px] text-3xl text-[rgba(255,255,255,0.4)] font-normal flex items-center justify-center gap-2 ">No task available <i class="fa-solid fa-box-open text-4xl"></i></li>
            }



          </ul>
        </main>

        <footer className=" w-full h-[10%] p-1 flex flex-wrap items-center justify-between sm:h-auto ">
          <input id="task" type="text" placeholder="Enter Task" className="outline-none rounded-[4px] w-[75%] h-[35px] pl-1 text-[18px] text-white   bg-[rgba(0,0,0,0.3)] placeholder:text-gray-300 sm:w-[78%]  " />
          <button className="border-[1px] rounded-[4px] w-[23%] h-[35px]  text-black border-black font-medium hover:bg-black  hover:text-white sm:w-[20%]" onClick={handleAdd}>Add Task</button>
        </footer>
      </div>

    </>
  );
}
export default ToDoList;