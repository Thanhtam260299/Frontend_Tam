import classNames from "classnames/bind";
import styles from "./suggestAccount.module.scss";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import Image from "~/components/Image";
import AccountPreview from "./AccountPreview";
const cx = classNames.bind(styles);

function AccountItem({ data }) {
  const navigate = useNavigate();

  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <div>
          <PopperWrapper>
            <AccountPreview data={data} />
          </PopperWrapper>
        </div>
      </div>
    );
  };

  const handleNavigate = () => {
    navigate("/@" + data.nickname);
    window.scrollTo(0, 0);
  };

  return (
    // Using a wrapper <div> tag around the reference element solves
    // this by creating a new parentNode context.
    <div>
      <Tippy
        interactive
        delay={[1000, 800]}
        offset={[-15, 3]}
        placement="bottom"
        zIndex="9999"
        render={renderPreview}
      >
        <div className={cx("account-item")} onClick={handleNavigate}>
          <Image
            className={cx("account-image")}
            src={data.avatar}
            alt={data.nickname}
          />
          <div className={cx("account-content")}>
            <p className={cx("account-title")}>
              <span className={cx("nickname")}>{data.nickname}</span>
              {data.tick && (
                <FontAwesomeIcon className={cx("icon")} icon={faCheckCircle} />
              )}
            </p>
            <p className={cx("account-name")}>
              {`${data.last_name}${data.first_name}`}
            </p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
