import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

import { Link, useLocation } from 'react-router-dom';

import {
  Routes,
  Route
} from 'react-router-dom';

import './App.scss';
import Dictionary from './pages/Dictionary';
import WordTools from './pages/WordTools';

const queryClient = new QueryClient();

function App() {
  const loc = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-main">
        <header className="app-header">
          <span className="app-logo">
            MetaDiction
          </span>

          <Link to={loc.pathname === "/word-tools" ? "/" : "/word-tools"}>
            Go to {loc.pathname === "/word-tools" ? "Dictionary" : "Word Tools"}
          </Link>
        </header>

        <article className="app-body">
          <Routes>
            <Route path="/" element={<Dictionary />} />
            <Route
              path="/word-tools"
              element={<WordTools />}
            />
          </Routes>
        </article>
      </div>
    </QueryClientProvider>
  );
}

export default App;
