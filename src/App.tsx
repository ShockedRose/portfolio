import './app.scss'
import { Button } from './components/atoms/button/button'
import { Header } from './components/organisms/header/header'
import { Hero } from './components/template/hero/hero'
import { APP } from './utils/constants/app-constant'
import heroImage from './assets/images/hero-image.svg'
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
      <Hero
        title={APP.TITLE}
        subtitle={APP.SUB_TITLE}
        img={{ url: heroImage, alt: 'Hero vector image of a screen' }}
        actionSection={
          <div className="w-half">
            <Button text="READ MORE" type="secondary" onClick={() => {}} />
          </div>
        }
      />
    </>
  )
}

export default App
