
import ApiGet from "./components/ApiGet";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Score from "./components/Score";
import styled from "styled-components"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetDev from "./components/GetDev";

const Section = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #1e1e2f, #2d2d44);
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding-bottom: 40px;
`;


function App() {
  return (
    <Section>
        <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/score" element={<Score />} />
        <Route path="/ApiGet" element={<ApiGet />} />
         <Route path="/GetDev" element={<GetDev/>} />
      </Routes>
    </Router>
    </Section>

  );
}

export default App;
