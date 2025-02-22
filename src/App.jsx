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
export default function App() {
  return (
    <div>
      <Header/>,
      <HomePage />
      < Thesis />
      <Criteria />
      <Team />
      <Portfolio />
      <Media />
      <Contacts />
      <Footer />
    </div>
  );
}