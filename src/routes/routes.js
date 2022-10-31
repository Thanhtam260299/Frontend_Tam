// layout
import HeaderOnly from "../Layouts/HeaderOnly";
import routes from "../routerConfig/routes";

import Following from "~/pages/Following";
import HomePage from "~/pages/Home";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import Live from "~/pages/Live";
//tạo list Route để dễ quản lý

//public router
const publicRoutes = [
  { path: routes.home, component: HomePage, large: false },
  { path: routes.following, component: Following, large: false },
  { path: routes.live, component: Live, large: true },
  { path: routes.profile, component: Profile, large: true },
  { path: routes.upload, component: Upload, layout: HeaderOnly, large: false },
  { path: routes.search, component: Search, layout: null, large: false },
];

//private router
const privateRoutes = [];

export { publicRoutes, privateRoutes };
