import { Button } from "@chakra-ui/button"
import { Container } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import Userpage from "./pages/Userpage.jsx"
import Postpage from "./pages/Postpage.jsx"
import Header from "./components/Header.jsx"

function App() {
  

  return (
    <Container maxW={"620px"} >
      <Header/>
         <Routes>
            <Route path="/:username" element={<Userpage/>} />
            <Route path="/:username/post/:pid" element={<Postpage/>} />

         </Routes>
      </Container>
  )
}

export default App
 