import "./App.css";
import background from "./Assets/Images/mainbg.jpg";
import Header from "./Components/Header/Header";
import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Routes/Routes";

function App() {
  return (
    <div
      className="w-full bg-cover h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
