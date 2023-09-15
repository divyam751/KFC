import { useState } from "react";
import "./App.css";

import Navbar from "./pages/navbar/Navbar";
import CustomDrawer from "./components/drawer/Drawer";
import Footer from "./pages/footer/Footer";
import AllRoutes from "./routes/AllRoutes";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const initialPurchase = {
    quantity: 0,
    subTotal: 0,
    hopePrice: 5,
    totalAmount: 0,
  };
  const [burger, setBurger] = useState(false);
  const [purchase, setPurchase] = useState(initialPurchase);

  // const totalAmount = 565.71;
  // const cartIconCount = 2;
  const toggleDrawer = () => {
    setBurger(!burger);
  };

  return (
    <div className='App'>
      {burger ? (
        <CustomDrawer
          isOpen={burger}
          onClose={toggleDrawer}
          // cartIconCount={cartIconCount}
          purchase={purchase}
        />
      ) : (
        <Navbar setBurger={setBurger} burger={burger} purchase={purchase} />
      )}
      <AllRoutes purchase={purchase} />
      {/* <Footer /> */}
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  );
}

export default App;
