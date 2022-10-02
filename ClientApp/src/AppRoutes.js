import { Home } from "./components/Home";
import { MemberList } from "./components/MemberList";
import { MemberTypes } from "./components/MemberTypes";
import { MemberDetails } from "./components/MemberDetails";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/render-details',
    element: <MemberDetails />  
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
