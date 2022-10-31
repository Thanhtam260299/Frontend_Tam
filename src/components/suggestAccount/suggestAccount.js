import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./suggestAccount.module.scss";
import AccountItem from "./AccountItem";
import { suggested } from "~/service/suggesService";
const cx = classNames.bind(styles);

function SuggestAccount({ label }) {
  const [listSugges, setListSugges] = useState([]);
  const [seeAll, setSeeAll] = useState([1, 5]);
  const [changeText, setchangeText] = useState("See all");
  useEffect(() => {
    suggested(...seeAll)
      .then((res) => setListSugges(res))
      .catch(console.log("eRR"));
  }, [seeAll]);
  const handleSeeAll = (e) => {
    let textFooter = e.target.innerText;
    if (textFooter == "See less") {
      setSeeAll([1, 5]);
      setchangeText("See all");
    } else {
      setSeeAll([1, 15]);
      setchangeText("See less");
    }
  };
  console.log(listSugges);
  return (
    <div className={cx("wrapper")}>
      <p className={cx("header")}>{label}</p>

      {listSugges.map((data) => (
        <AccountItem key={data.id} data={data} />
      ))}
      <div className={cx("footer")} onClick={handleSeeAll}>
        {changeText}
      </div>
    </div>
  );
}

export default SuggestAccount;
