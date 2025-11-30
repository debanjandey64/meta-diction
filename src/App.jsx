import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Dictionary from "./pages/Dictionary";
import UrbanDict from "./pages/UrbanDict";
import WordTools from "./pages/WordTools";
import NavBar from "./components/NavBar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="app-main">
        <header className="app-header">
          <span className="app-logo">MetaDiction</span>
        </header>

        <NavBar />

        <article className="app-body">
          <Routes>
            <Route path="/" element={<Dictionary />} />
            <Route path="/urban-dict" element={<UrbanDict />} />
            <Route path="/word-tools" element={<WordTools />} />
          </Routes>
        </article>
      </main>
    </QueryClientProvider>
  );
}

export default App;
