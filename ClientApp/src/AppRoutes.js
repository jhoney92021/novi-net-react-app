import { Home } from "./components/Home";
import { MemberTypes } from "./components/MemberTypes";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/fetch-member-types',
    element: <MemberTypes />
  }
];

export default AppRoutes;
