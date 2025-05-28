import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { LinksProvider } from "./contexts/LinksContext";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <LanguageProvider>
    <LinksProvider>
      <RouterProvider router={router} />
    </LinksProvider>
  </LanguageProvider>
);
