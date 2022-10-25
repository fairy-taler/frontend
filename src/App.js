import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css"
import Main from "./main/pages/Main";
import Error from "./error/page/Error";
import Layout from "./layouts/Layout";
import NoticeList from "./community/pages/NoticeList";
import NoticeInfo from "./community/pages/NoticeInfo";
import ServiceCenter from "./community/pages/ServiceCenter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/notices" element={<NoticeList />}/>
          <Route path="/notices/:1" element={<NoticeInfo />} />
          <Route path="/serviceCenter" element={<ServiceCenter />}/>
          <Route path="/*" element={<Error />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
