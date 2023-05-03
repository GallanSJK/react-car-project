import { Header, Footer, OurService, Banner, Faq, Cover } from './components'
import './App.css'

function App() {
  
  return (
    <div className="App">
      <Header />
        <Cover />
        <OurService />
        <Banner />
        <Faq />
      <Footer />
    </div>
  )
}

export default App
