import { BrowserRouter, Routes, Route } from "react-router-dom";


import Main from "./main/pages/Main";
import Error from "./error/page/Error";
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/*" element={<Error />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
