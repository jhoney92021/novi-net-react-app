import { Home } from "./components/Home";
import { Members } from "./components/Members";
import { MemberTypes } from "./components/MemberTypes";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/fetch-members',
    element: <Members />  
  },
  {
    path: '/fetch-member-types',
    element: <MemberTypes />
  }
];

export default AppRoutes;
