import classNames from "classnames/bind";
import styles from "./sidebarFooter.module.scss";

import FooterItem from "./FooterItem";

const cx = classNames.bind(styles);
const listItems = {
  item1: [
    "About",
    "TikTok",
    "Browse",
    "Newsroom",
    "Contact",
    "Careers",
    "ByteDance",
  ],
  item2: [
    "TikTok for Good",
    "Advertlse",
    "Developers",
    "Transparence",
    "TikTok Rewards",
  ],
  item3: [
    "Help",
    "Safety",
    "Terms",
    "Privacy",
    "Creator Portal",
    "Communlty Guldellnes",
  ],
};
function SidebarFooter() {
  return (
    <div className={cx("wrapper")}>
      <FooterItem items={listItems.item1} />
      <FooterItem items={listItems.item2} />
      <FooterItem items={listItems.item3} />
      <span className={cx("footer")}>© 2022 TikTok</span>
    </div>
  );
}

export default SidebarFooter;
