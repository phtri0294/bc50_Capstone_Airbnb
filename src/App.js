import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { Suspense } from "react";

import Loader from "./components/loader";
import renderRoutes from './routes';

function App() {
  return (
    <Suspense
      fallback={<Loader />}
    >
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
