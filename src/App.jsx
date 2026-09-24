import EmpList from "./components/EmpList/EmpList";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Nabar";
import Order from "./components/Order/Order";

export default function App() {


  return (


    <div>
      <Hero/>
      <Navbar/>
      <Order/>
    <hr />

      <EmpList />
    </div>
  )
}
