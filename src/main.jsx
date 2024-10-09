import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { LinksProvider } from './contexts/LinksContext';
import './index.css';
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LanguageProvider>
      <LinksProvider>
        <App />
      </LinksProvider>
    </LanguageProvider>
  </BrowserRouter>
);
