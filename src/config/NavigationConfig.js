import Home from "../views/pages/home/Index";
import About from "../views/pages/stack/Index";

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
];
export default NavigationConfig;
