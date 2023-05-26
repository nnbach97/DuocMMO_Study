import { Provider } from 'react-redux';
import './App.css';
import Blog from './pages/Blogs';
import { store } from './store';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Blog />
      </Provider>
    </div>
  );
}

export default App;
