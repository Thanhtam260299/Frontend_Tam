import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  MessageIcon,
  NotificationIcon,
  ProfileIcon,
  CoinsIcon,
  LiveIcon,
  SettingIcon,
  LanguageIcon,
  HelpIcon,
  KeyboardIcon,
  LogoutIcon,
} from "~/components/Icon";
import { useContext } from "react";

import { ActiveContext } from "../../../components/FormLogIn/ActiveLogin";

import styles from "./Header.module.scss";
import images from "~/asset/images";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import Image from "~/components/Image";
import Search from "../Search";
import routes from "~/routerConfig/routes";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vn",
          title: "Viet Nam",
        },
        {
          code: "pa",
          title: "France",
        },
        {
          code: "ja",
          title: "JaPan",
        },
        {
          code: "ci",
          title: "China",
        },
        {
          code: "ko",
          title: "Korea",
        },
        {
          code: "ia",
          title: "Italy",
        },
        {
          code: "nd",
          title: "India",
        },
        {
          code: "in",
          title: "indonesia",
        },
        {
          code: "ge",
          title: "Germany",
        },
        {
          code: "ja",
          title: "JaPan",
        },
        {
          code: "ci",
          title: "China",
        },
        {
          code: "ko",
          title: "Korea",
        },
        {
          code: "ia",
          title: "Italy",
        },
        {
          code: "nd",
          title: "India",
        },
        {
          code: "in",
          title: "indonesia",
        },
        {
          code: "ge",
          title: "Germany",
        },
        {
          code: "ia",
          title: "Italy",
        },
        {
          code: "nd",
          title: "India",
        },
        {
          code: "in",
          title: "indonesia",
        },
        {
          code: "ge",
          title: "Germany",
        },
        {
          code: "ja",
          title: "JaPan",
        },
        {
          code: "ci",
          title: "China",
        },
        {
          code: "ko",
          title: "Korea",
        },
        {
          code: "ia",
          title: "Italy",
        },
        {
          code: "nd",
          title: "India",
        },
        {
          code: "in",
          title: "indonesia",
        },
        {
          code: "ge",
          title: "Germany",
        },
      ],
    },
  },
  {
    icon: <HelpIcon />,
    title: "Feedback and Help",
    href: routes.feddback,
  },
  {
    icon: <KeyboardIcon />,
    title: "Keyboard shortcuts",
  },
];
export let currentUser = true;

let userMenu = [
  {
    icon: <ProfileIcon />,
    title: "View profile",
    href: routes.feddback,
  },
  {
    icon: <CoinsIcon />,
    title: "Get coins",
    href: routes.feddback,
  },
  {
    icon: <LiveIcon />,
    title: "LIVE studio",
    href: routes.feddback,
  },
  {
    icon: <SettingIcon />,
    title: "Settings",
    href: routes.feddback,
  },
  ...MENU_ITEMS,
  {
    icon: <LogoutIcon />,
    title: "Log out",
    href: routes.feddback,
    separate: true,
  },
];

function Header() {
  const activeContext = useContext(ActiveContext);
  const handleActive = () => {
    console.log("active");
    activeContext.toggleActive();
  };
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={routes.home} className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={cx("action")}>
          <Button
            href={routes.upload}
            leftIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            Upload
          </Button>
          {!currentUser ? (
            <>
              <Button onClick={handleActive} primary>
                Log in
              </Button>
            </>
          ) : (
            <>
              <Tippy content="Message" placement="bottom" delay={[0, 200]}>
                <button className={cx("action-item")}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy
                content="Notification"
                offset={[0, 6]}
                placement="bottom"
                delay={[0, 200]}
              >
                <button className={cx("action-item")}>
                  <NotificationIcon />
                </button>
              </Tippy>
            </>
          )}

          <Menu menuItem={currentUser ? userMenu : MENU_ITEMS}>
            {!currentUser ? (
              <button className={cx("action-more")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            ) : (
              <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/1f80f7908e5c06ede1449bc9cf7f6960~c5_100x100.jpeg?x-expires=1664676000&x-signature=JIAx%2BZtxIxp%2BZFhDt7qipBSne6Y%3D"
                className={cx("avatar-user")}
                alt="nguyenvana"
              />
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
