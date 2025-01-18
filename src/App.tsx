import { Route, Routes } from "react-router"
import Main from "./pages/Main"
import About from "./pages/About"
import Task from "./pages/Task"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/task" element={<Task />} /> 
    </Routes>
  )
}

export default App
