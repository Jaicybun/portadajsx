import './App.css'
import { Footer } from './components/footer'
import { Logo } from './components/Logo'
import { Titulo } from './components/titulo'
import { Winner } from './components/winner'

function App() {
  return (
    <article className="todo">
      <Footer />
      <Logo />
      <Titulo />
      <Winner />
    </article>
  )
}

export default App
