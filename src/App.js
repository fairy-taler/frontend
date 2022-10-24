import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css"
import Main from "./main/pages/Main";
import Error from "./error/page/Error";
import Layout from "./layouts/Layout";
import Notice from "./community/pages/Notice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/notice" element={<Error />}/>
          <Route path="/*" element={<Error />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
