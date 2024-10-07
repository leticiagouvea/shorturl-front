import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Resources } from "./pages/Resources";
import { Footer } from "./components/Footer";

function App() {
  return (
    <PageContainer>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </ContentWrapper>
        <Footer />
      </BrowserRouter>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

export default App;
