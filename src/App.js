import "./App.css";
import background from "./Assets/Images/main2.jpg";
import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div
      className="w-full bg-cover min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
