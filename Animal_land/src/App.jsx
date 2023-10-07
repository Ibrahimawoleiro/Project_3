
import './App.css';
import Card from './components/Card';


const App = () => {

  

  return (
    <div className="App" >
      <h1 className='header'>The ultimate Animal Guessing Game</h1>
      <p className='About'>This is an Animal guessing game. There are total number of 10 cards displayed randomly</p>
      <Card></Card>
    </div>
  )
}

export default App