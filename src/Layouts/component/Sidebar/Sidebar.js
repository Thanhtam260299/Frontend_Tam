import classNames from "classnames/bind";
import Menu, { MenuItem } from "./Menu";
import routes from "~/routerConfig/routes";

import {
  HomeSibaIcon,
  FollowSibaIcon,
  LiveSibaIcon,
  LiveActiveIcon,
  FollowSibaActiveIcon,
  HomeActiveIcon,
} from "~/components/Icon";
import styles from "./Sidebar.module.scss";
import SuggestAccount from "~/components/suggestAccount/";
import FollowingAccount from "~/components/followingAccount/";
import Discover from "~/components/discover/";
import SidebarFooter from "~/components/sidebarFooter/";
import { currentUser } from "~/Layouts/component/Header/Header";
import LogIn from "./LogIn";
const cx = classNames.bind(styles);

function Sidebar({ large, activeSideBar }) {
  console.log(activeSideBar);
  return (
    <div
      className={cx("wrapper", {
        large,
        activeSideBar,
      })}
    >
      <aside
        className={cx("inner", {
          large,
        })}
      >
        <Menu>
          <MenuItem
            title="For You"
            to={routes.home}
            icon={<HomeSibaIcon />}
            activeIcon={<HomeActiveIcon />}
            responsive={true}
          ></MenuItem>
          <MenuItem
            title="Following"
            to={routes.following}
            icon={<FollowSibaIcon />}
            activeIcon={<FollowSibaActiveIcon />}
            responsive={true}
          ></MenuItem>
          <MenuItem
            title="LIVE"
            to={routes.live}
            icon={<LiveSibaIcon />}
            activeIcon={<LiveActiveIcon />}
            responsive={true}
          ></MenuItem>
        </Menu>
        {!currentUser && <LogIn />}
        {/* <SuggestAccount label="Suggested accounts" /> */}
        {currentUser && <SuggestAccount label="Suggested accounts" />}
        {currentUser && <FollowingAccount label="Following accounts" />}
        <Discover label="Discover" />
        <SidebarFooter />
      </aside>
    </div>
  );
}

export default Sidebar;
