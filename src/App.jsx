import { Header, Footer, OurService, Banner, Faq, Cover, WhyUs } from './components'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <Header />
        <Cover />
        <OurService />
        <WhyUs />
        <Banner />
        <Faq />
      <Footer />
    </div>
  )
}

export default App
