import { Home } from "./components/Home";
import { MemberList } from "./components/MemberList";
import { MemberTypes } from "./components/MemberTypes";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/fetch-members',
    element: <MemberList />  
  },
  {
    path: '/fetch-member-types',
    element: <MemberTypes />
  }
];

export default AppRoutes;
