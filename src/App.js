import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Resources } from "./pages/Resources";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
