import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css"
import Main from "./main/pages/Main";
import Error from "./error/page/Error";
import Layout from "./layouts/Layout";
import NoticeList from "./community/pages/NoticeList";
import NoticeInfo from "./community/pages/NoticeInfo";
import Join from "./member/pages/Join";
import Login from "./member/pages/Login";
import ServiceCenter from "./community/pages/ServiceCenter";
import SearchId from "./member/pages/SearchId";
import SearchPwd from "./member/pages/SearchPwd";
import SearchResultId from "./member/pages/SearchResultId";
import SearchResultPwd from "./member/pages/SearchResultPwd";
import Mypage from "./member/pages/Mypage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/notices" element={<NoticeList />}/>
          <Route path="/notices/:1" element={<NoticeInfo />} />
          <Route path="/join" element={<Join />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/serviceCenter" element={<ServiceCenter />}/>
          <Route path="/idsearch" element={<SearchId />}/>
          <Route path="/pwdsearch" element={<SearchPwd />}/>
          <Route path="/idresult" element={<SearchResultId />}/>
          <Route path="/pwdresult" element={<SearchResultPwd />}/>
          <Route path="/mypage" element={<Mypage />}/>
          <Route path="/*" element={<Error />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
