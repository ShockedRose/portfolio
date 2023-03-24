import './app.scss'
import { Header } from './components/organisms/header/header'
import { HomePage } from './components/pages/home/home'
import logo from './assets/images/logo.svg'

function App() {
  const navLinks = [
    { text: 'Home', url: '#home' },
    { text: 'About', url: '#about' },
    { text: 'Projects', url: '#projects' },
    { text: 'Contact', url: '#contact' }
  ]

  return (
    <>
      <Header logo={{ alt: 'Rose logo', url: logo }} links={navLinks} />
      <HomePage />
    </>
  )
}

export default App
