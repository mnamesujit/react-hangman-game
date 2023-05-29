
import './App.css'
import HangmanImg from './components/HangmanImg'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <div className="hangman-img">
        <HangmanImg />
      </div>
    </>
  )
}

export default App
