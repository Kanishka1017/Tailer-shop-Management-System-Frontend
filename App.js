import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginForm from './components/LoginForm/LoginForm';
import Register from './components/RegisterForm/Register';
import ForgetPassW from './components/Forgetpw/ForgetPassW';
import Home from'./components/HomePage/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ForgetPassW" element={<ForgetPassW/>} />
        <Route path="/Home" element={<Home/>} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;

