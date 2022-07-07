
import './App.css'
import Carousel from './components/Carousel'
import Contacto from './components/Contacto'
import Feature from './components/Feature'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import Products from './components/products'
import Team from './components/Team'

function App() {

  return (
    <div className='vtblackligth'>
      <NavBar /> 
      <HeroSection />
      <Feature />
      <Carousel />
      <Products />
      <Team />
      <Contacto/>
      <Footer />

    </div>
  )
}

export default App
