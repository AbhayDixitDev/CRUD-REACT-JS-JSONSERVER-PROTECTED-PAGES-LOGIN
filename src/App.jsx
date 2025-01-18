import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header"
import Create from "./Create"
import Read from "./Read"
import Update from "./Update"
import Login from "./Login"
const App=()=>{
  return(
    <>

    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/read" element={<Read/>}/>
      <Route path="/update/:id" element={<Update/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App