import Home from "../views/pages/home/Index";
import About from "../views/pages/about/Index";
import Projects from "../views/pages/projects/Index";

const NavigationConfig = [
  {
    id: "home",
    title: "Home",
    path: "/",
    icon: "Utilize Later",
    component: <Home />,
  },
  {
    id: "about",
    title: "About",
    path: "/about",
    icon: "Utilize Later",
    component: <About />,
  },
  {
    id: "projects",
    title: "Projects",
    path: "/projects",
    icon: "Utilize Later",
    component: <Projects />,
  }
];
export default NavigationConfig;
