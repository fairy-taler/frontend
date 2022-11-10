import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css"
import Main from "./main/pages/Main";
import Error from "./error/page/Error";
import Layout from "./layouts/Layout";
import NoticeList from "./community/pages/NoticeList";
import NoticeListForManagement from "./community/pages/NoticeListForManagement";
import NoticeInfo from "./community/pages/NoticeInfo";
import NoticeInfoForManagement from "./community/pages/NoticeInfoForManagement";
import ForumDetail from "./community/pages/ForumDetail";
import InquiryInfo from "./community/pages/InquiryInfo";
import FAQInfo from "./community/pages/FAQInfo";
import Join from "./member/pages/Join";
import Login from "./member/pages/Login";
import ServiceCenter from "./community/pages/ServiceCenter";
import SearchId from "./member/pages/SearchId";
import SearchPwd from "./member/pages/SearchPwd";
import SearchResultId from "./member/pages/SearchResultId";
import SearchResultPwd from "./member/pages/SearchResultPwd";
import Mypage from "./member/pages/Mypage";
import InsertInquiry from "./community/pages/InsertInquiry";
import InsertNotice from "./community/pages/InsertNotice";
import InquiryList from "./community/pages/InquiryList";
import InquiryResponse from "./community/pages/InquiryResponse";
import Forums from "./community/pages/Forums"; 
import InsertForum from "./community/pages/InsertForum";
import JoinResult from "./member/pages/JoinResult"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/notices" element={<NoticeList />}/>
          <Route path="/insertNotice" element={<InsertNotice />}/>
          <Route path="/managementNotices" element={<NoticeListForManagement />}/>
          <Route path="/notices/:1" element={<NoticeInfo/>} />
          <Route path="/managementNotices/:1" element={<NoticeInfoForManagement/>} />
          <Route path="/faq/:1" element={<FAQInfo />} />'
          <Route path="/forums/:1" element={<ForumDetail />} />'
          <Route path="/myInquiry/:1" element={<InquiryInfo />} />
          <Route path="/insertInquiry" element={<InsertInquiry />} />
          <Route path="/insertForum" element={<InsertForum />} />
          <Route path="/join" element={<Join />}/>
          <Route path="/joinResult" element={<JoinResult/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/serviceCenter" element={<ServiceCenter />}/>
          <Route path="/idsearch" element={<SearchId />}/>
          <Route path="/pwdsearch" element={<SearchPwd />}/>
          <Route path="/idresult" element={<SearchResultId />}/>
          <Route path="/pwdresult" element={<SearchResultPwd />}/>
          <Route path="/mypage" element={<Mypage />}/>
          <Route path="/inquirylist" element={<InquiryList />}/>
          <Route path="/inquiryresponse/:1" element={<InquiryResponse/>} />
          <Route path="/forums" element={<Forums />}/>
          <Route path="/*" element={<Error />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
