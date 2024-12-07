import { ClientLayout } from "../layouts";
import { Home } from "../routes/client";

const routesClient = [
  {
    path: "/",
    layout: ClientLayout,
    component: Home,
  },
  {
    path: "/home",
    layout: ClientLayout,
    component: Home,
  },
];

export default routesClient;
