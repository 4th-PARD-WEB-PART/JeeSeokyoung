import './App.css';
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import FeedPage from "./Pages/FeedPage/FeedPage";
import { BrowserRouter } from 'react-router-dom';
import MyRouter from './MyRouter';



function App() {
  return(
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>
    // <div>
    //     {/* <RegisterPage/> */}
    //     <FeedPage/>
    // </div>
   
  );
}

export default App;
