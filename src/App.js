import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';

function App() {
  return (
    <div className='d-flex align-items-center justify-content-center w-100 flex-column'
    style={{height:"100vh"}}>
      <div className='d-flex align-items-center justify-content-center flex-column p-5 rounded'
      style={{backgroundColor:"white"}}>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
