import './App.css';
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import FeedPage from "./Pages/FeedPage/FeedPage";
import { BrowserRouter } from 'react-router-dom';
import MyRouter from './MyRouter';
import { RecoilRoot } from 'recoil';



function App() {
  return(
    <RecoilRoot>
      <BrowserRouter>
        <MyRouter />
      </BrowserRouter>
    </RecoilRoot>
    // <div>
    //     {/* <RegisterPage/> */}
    //     <FeedPage/>
    // </div>
   
  );
}

export default App;
