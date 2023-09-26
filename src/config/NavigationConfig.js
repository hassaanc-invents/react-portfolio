import Home from "../views/pages/home/Index";
import Contact from "../views/pages/contact/Index";
import Stack from "../views/pages/stack/Index";
import Projects from "../views/pages/projects/index";

const NavigationConfig = [
  {
    id: "home",
    title: "Home",
    path: "/",
    icon: "Utilize Later",
    component: <Home />,
  },
  {
    id: "Stack",
    title: "Stack",
    path: "/stack",
    icon: "Utilize Later",
    component: <Stack />,
  },
  {
    id: "projects",
    title: "Projects",
    path: "/projects",
    icon: "Utilize Later",
    component: <Projects />,
  },
  {
    id: "Contact",
    title: "Contact",
    path: "/contact",
    icon: "Utilize Later",
    component: <Contact />,
  },
];
export default NavigationConfig;