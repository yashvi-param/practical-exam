import AddUser from "./Component/AddUser";
import EditUser from "./Component/EditUser";
import UpdateTable from "./Component/UpdateTable";
import Home from "./Component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add" element={<AddUser />} />
        <Route path="/Edit" element={<EditUser />} />
        <Route path="/Update" element={<UpdateTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;