import Home from "../views/pages/home/Index";
import Contect from "../views/pages/contact/Index";

const NavigationConfig = [
  {
    id: "home",
    title: "Home",
    path: "/",
    icon: "Utilize Later",
    component: <Home />,
  },
  {
    id: "contect",
    title: "Contect",
    path: "contect/",
    icon: "Utilize Later",
    component: <Contect />,
  },
];
export default NavigationConfig;
