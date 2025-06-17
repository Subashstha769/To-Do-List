import ToDoList from "./ToDoList"
function App() {


  return (
    <>
      <div className="w-screen h-screen bg-no-repeat bg-cover bg-center  flex justify-center items-start  lg:pl-36 lg:justify-start sm:items-center " style={{backgroundImage: `url("./src/assets/todoBG.jpeg")`}}>
        <ToDoList />
      </div>
    </>
  )
}

export default App
