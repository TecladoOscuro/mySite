import './App.css';
import Video from './components/video'
import CountDown from './components/countdown'

function App() {
  return (
    <div className="App">
      <div className="countDownContainer">
        <CountDown/>
      </div>
      <div className='videoContainer'>
        <Video/>
      </div>
    </div>
  );
}

export default App;
