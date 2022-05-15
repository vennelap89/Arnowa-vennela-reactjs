import Login from './components/Login';
import {Routes,Route} from "react-router-dom";
import {Container, Row,Col} from "react-bootstrap";
import Home from './components/Home'
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Home" element={<Home/>}/> 
         </Routes>
        </AuthContextProvider>       
      </Col>
      </Row>
    </Container>  
  );
}

export default App;
