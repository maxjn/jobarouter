import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Faq from "./pages/Help/Faq";
import Contact, { formAction } from "./pages/Help/Contact";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetail, { careerLoader } from "./pages/careers/CareerDetail";
//Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareerLayout from "./layouts/CareerLayout";
import CareersError from "./pages/careers/CareersError";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route
          path="careers"
          element={<CareerLayout />}
          errorElement={<CareersError />}
        >
          <Route index element={<Careers />} loader={careersLoader} />
          <Route path=":id" element={<CareerDetail />} loader={careerLoader} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} action={formAction} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
