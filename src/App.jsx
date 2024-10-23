import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Footer from "./components/Footer";
import Vm from "./components/Pages/Vm";
import Education from "./components/Pages/Education";
import Health from "./components/Pages/Health";
import Livlihood from "./components/Pages/Livlihood";
import Gallery from "./components/Pages/Gallery";
import Vaasta from "./components/Pages/Vaasta";
import Yojna from "./components/Pages/Yojna";
import Contact from "./components/Pages/Contact";
import Work from "./components/Pages/Work";
import Member from "./components/Pages/Member";
import NotFound from "./components/Pages/NotFound";

import Donate from "./components/Donate";

import Navbar from "./components/Navbar";
import Intern from "./components/CareerPage/Intern";
import ScrollToTop from "./components/ScrollToTop";
import Shield from "./components/Pages/Shield";
import Event from "./components/Pages/Event";
import Asked from "./components/Pages/Asked";
import Story from "./components/CareerPage/Story";
import WorkStory from "./components/CareerPage/WorkStory";
import Login from "./components/admin/Login";
import Dashboard from "./components/admin/Dashboard";
import AddStory from "./components/admin/AddStory";
import AddNotice from "./components/admin/AddNotice";
import Header from "./components/Header";
import RunningNotice from "./components/admin/RunningNotice";
import DelStory from "./components/admin/DelStory";
import UpdateStory from "./components/admin/UpdateStory";
import NoticePage from "./components/NoticePage";
import DelNotice from "./components/admin/DelNotice";
import UpdateNotice from "./components/admin/UpdateNotice";
import AddDonor from "./components/admin/AddDonor";
import AddSponser from "./components/admin/AddSponser";
import ReliefCamp from "./components/CareerPage/ReliefCamp";
import EmpLogin from "./components/employee/EmpLogin";
import EmpDash from "./components/employee/EmpDash";
import MakeReport from "./components/employee/MakeReport";
import RegsEmp from "./components/admin/RegsEmp";
import GetEmp from "./components/admin/GetEmp";
import FutureMeeting from "./components/employee/FutureMeeting";
import UpcomingMeeting from "./components/admin/UpcomingMeeting";
import MeetingList from "./components/employee/MeetingList";
import GenerateReport from "./components/employee/GenerateReport";
import ReportByEmp from "./components/employee/ReportByEmp";
import SeeLocation from "./components/employee/SeeLocation";
import ToggleLocation from "./components/employee/ToggleLocation";
import EmpLocations from "./components/admin/EmpLocations";

import EmpMap from "./components/admin/Map";
import EmpProfile from "./components/employee/EmpProfile";

function App() {
  // const initialOptions = {
  //   "client-id":
  //     "AbKr4QlHgxgo1VG80TJRT8HIwOs4oemBr56goGd9UJILDVn0Hcl4HOOqwjFoDn8qxZ61orhzxlew_1kZ",
  //   currency: "USD",
  //   intent: "capture",
  // };

  const location = useLocation();
  const navbarPaths = ['/','/about','/about/vision','/work/education','/work/health','/gallery','/vaasta','/vaasta/yojna','/contact','/about/work','/work/saas','/vaasta/member'
    ,'/donate','/Internship','/events','/help','/story','/workstory'
  ];

  const shouldRender = navbarPaths.includes(location.pathname);

  return (
    <>
      <Header/>
      <RunningNotice/>
      {shouldRender && <Navbar />}
      <ScrollToTop />

      <Routes>
        {/* <ScrollToTop/> */}
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/about/vision"} element={<Vm />}></Route>
        <Route path={"/work/education"} element={<Education />}></Route>
        <Route path={"/work/health"} element={<Health />}></Route>
        <Route path={"/work/livlihood"} element={<Livlihood />}></Route>
        <Route path={"/gallery"} element={<Gallery />}></Route>
        <Route path={"/vaasta"} element={<Vaasta />}></Route>
        <Route path={"/vaasta/yojna"} element={<Yojna />}></Route>
        <Route path={"/contact"} element={<Contact />}></Route>
        <Route path={"/about/work"} element={<Work />}></Route>
        <Route path={"/work/saas"} element={<Shield />}></Route>
        <Route path={"/vaasta/member"} element={<Member />}></Route>
        <Route path={"/donate"} element={<Donate />}></Route>
        
        <Route path={"/Internship"} element={<Intern />}></Route>
        <Route path={"/events"} element={<Event />}></Route>
        <Route path={"/help"} element={<Asked />}></Route>
        <Route path={"/story"} element={<Story />}></Route>
        <Route path="/workstory" element={<WorkStory />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path='/uploadstory' element={<AddStory/>}></Route>
        <Route path="/story/:id/update" element={<UpdateStory/>}></Route>
        <Route path="/story/del" element={<DelStory/>}></Route>
        <Route path='/addnotice' element={<AddNotice/>}></Route>
        <Route path="/allnotices" element={<NoticePage/>}></Route>
        <Route path="/notice/del" element={<DelNotice/>}></Route>
        <Route path="/notice/:id/update" element={<UpdateNotice/>}></Route>
        <Route path="/adddonor" element={<AddDonor/>}></Route>
        <Route path="/addsponser" element={<AddSponser/>}></Route>
        <Route path="/reliefcamp" element={<ReliefCamp/>}></Route>
        <Route path="/emplogin" element={<EmpLogin/>}></Route>
        <Route path="/empdash" element={<EmpDash/>}></Route>
        <Route path="/makereport" element={<MakeReport/>}></Route>
        <Route path="/regsemp" element={<RegsEmp/>}></Route>
        <Route path="/empdetails" element={<GetEmp/>}></Route>
        <Route path="/meetings" element={<FutureMeeting/>}></Route>
        <Route path="/upcomingmeetingsbyadmin" element={<UpcomingMeeting/>} ></Route>
        <Route path="/upcomingmeetings" element={<MeetingList/>}></Route>
        <Route path="/reports" element={<GenerateReport/>}></Route>
        <Route path="/reportsbyemp" element={<ReportByEmp/>} ></Route>
        <Route path="/locations" element={<SeeLocation/>}></Route>
        <Route path="/sharelocation" element={<ToggleLocation/>}></Route>
        <Route path="/getemplocations" element={<EmpLocations/>}></Route>
        <Route path="/maponemp" element={<EmpMap/>}></Route>
        <Route path="/empprofile" element={<EmpProfile/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
