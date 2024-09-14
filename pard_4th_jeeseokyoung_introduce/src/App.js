import logo from './logo.svg';
import './App.css';

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let me introduce myself!</h1>
        <Introduce /> 
      </header>
    </div>
  );
}

function Introduce(){
  return (
    <div className='Introduce'>
      <h2>Hello! My name is Seokyoung Jee.<br></br>Nice to meet you!</h2>
      <img src='/Me.jpg' alt='me' />
      <div className="info">
        <p>Pardy - Web Developer</p>
        <p>Name: Seokyoung Jee</p>
        <p>Student number: 22100718</p>
        <p>Major: Computer Science Engineering</p>
        <p>Interest: Web develop, Sports, Travel, Music</p>
        <p>Personality: Adaptable, Energetic, Cheerful, Amusing</p>
      </div>
    </div>
  );
}

export default App;
