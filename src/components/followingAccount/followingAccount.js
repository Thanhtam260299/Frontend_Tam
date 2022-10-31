import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./followingAccount.module.scss";
import AccountItem from "./AccountItem";
import { following } from "~/service/followingService";
const cx = classNames.bind(styles);

function FollowingAccount({ label }) {
  const [listSugges, setListSugges] = useState([]);
  // const [seeMore, setSeeMore] = useState([1]);
  const [changeText, setchangeText] = useState("See more");
  // useEffect(() => {
  //   following(1)
  //     .then((res) => console.log(res))
  //     .catch(console.log("eRR"));
  // }, []);
  const handleSeeMore = (e) => {
    let textFooter = e.target.innerText;
    if (textFooter == "See less") {
      // setSeeMore([1, 5]);
      setchangeText("See more");
    } else {
      // setSeeMore([1, 15]);
      setchangeText("See less");
    }
  };
  return (
    <div className={cx("wrapper")}>
      <p className={cx("header")}>{label}</p>
      {/* {listSugges.map((data) => (
        <AccountItem key={data.id} data={data} />
        ))} */}
      <AccountItem />
      <div className={cx("footer")} onClick={handleSeeMore}>
        {changeText}
      </div>
    </div>
  );
}

export default FollowingAccount;
