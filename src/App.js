import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css"
import Main from "./main/pages/Main";
import Error from "./error/page/Error";
import Layout from "./layouts/Layout";
import Notice from "./community/pages/Notice";

import Join from "./member/pages/Join";
import Login from "./member/pages/Login";
import ServiceCenter from "./community/pages/ServiceCenter";
import SearchId from "./member/pages/SearchId";
import SearchPwd from "./member/pages/SearchPwd";
import SearchResultId from "./member/pages/SearchResultId";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/notice" element={<Notice />}/>
          <Route path="/join" element={<Join />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/serviceCenter" element={<ServiceCenter />}/>
          <Route path="/idsearch" element={<SearchId />}/>
          <Route path="/pwdsearch" element={<SearchPwd />}/>
          <Route path="/idresult" element={<SearchResultId />}/>
          <Route path="/*" element={<Error />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
