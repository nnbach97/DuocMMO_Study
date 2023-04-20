import logo from './logo.svg'
import './App.css'
import BareInput from './BareInput'
import Form from './Form/Form'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* <BareInput type='text' /> */}
        <Form />
      </header>
    </div>
  )
}

export default App
