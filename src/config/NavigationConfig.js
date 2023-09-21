import Home from "../views/pages/home/Index";
import Stack from "../views/pages/stack/Index";

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
];
export default NavigationConfig;
