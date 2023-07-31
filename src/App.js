import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import ProductProvider from "./context/ProductProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ProductProvider>
        <RouterProvider router={routes} />
      </ProductProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
