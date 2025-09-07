import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Details from "./Components/Pages/Details";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import ChangePassword from "./Components/Pages/Account/ChangePassword";
import WatchCourses from "./Components/Pages/Account/WatchCourses";
import MyCourses from "./Components/Pages/Account/MyCourses";
import Courses from "./Components/common/Courses";
import MyLearning from "./Components/Pages/Account/My learning";
import CoursesEnrolled from "./Components/Pages/Account/CoursesEnrolled";
import Dashboard from "./Components/Pages/Account/Dashboard";
import { Toaster } from "react-hot-toast";
import { RequireAuth } from "./Components/common/RequireAuth";
import CreateCourse from "./Components/CreateCourse";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/details" element={<Details />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/register" element={<Register />} />
          <Route path="/account/my-courses" element={<MyCourses />} />
          <Route path="/account/my-courses/create" element={<CreateCourse />} />
          <Route path="/account/my-learning" element={<MyLearning />} />
          <Route path="/account/change-password" element={<ChangePassword />} />
          
          <Route
            path="/account/courses-enrolled"
            element={<CoursesEnrolled />}
          />
          <Route path="/account/watch-courses" element={<WatchCourses />} />
          <Route
            path="/account/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="/account/dashboard" element={<CreateCourse />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
