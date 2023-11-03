import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navbar";
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      <Navigation />
        <Routes>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
    </>
  );
}

export default App;