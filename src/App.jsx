import { Contact } from "lucide-react"
import Criteria from "./components/Criteria"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import Team from "./components/Team"
import Thesis from "./components/Thesis"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import Portfolio from "./components/Portfolio"
import Media from "./components/Media"
import AboutUs from "./components/AboutUs"
import Charter from "./components/Charter"
export default function App() {
  return (
    <div>
      <div className="bg-[#ebe6e0] overflow-x-hidden">
      <Header/>
      <HomePage />
      <AboutUs/>
      < Thesis />
      <Criteria />
      <Team />
      <Charter />
      <Portfolio />
      <Media />
      <Contacts />
      <Footer />
      </div>
     
    </div>
  );
}