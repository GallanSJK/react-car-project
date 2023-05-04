import { Header, Footer, OurService, Banner, Faq, Cover, WhyUs, Testimonial } from './components'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <Header />
        <Cover />
        <OurService />
        <WhyUs />
        <Testimonial />
        <Banner />
        <Faq />
      <Footer />
    </div>
  )
}

export default App
