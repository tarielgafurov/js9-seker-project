import { Route, Routes } from "react-router-dom"
import User from "../User"

const SekerProject = ()=>{
    return (
        <Routes>
            <Route path="/User" element={<User/>}/>
        </Routes>
    )
}

export default SekerProject