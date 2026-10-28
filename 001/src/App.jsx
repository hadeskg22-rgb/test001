import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Info from './perso.jsx' 
import Competences from './competences.jsx'
import Experiences from './experiences.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
<div>
  <h1>Curriculum vitae</h1>
<Info></Info>
<hr />
<Competences></Competences>
<Experiences></Experiences>
</div>
  )
}

export default App
