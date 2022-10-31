import classNames from "classnames/bind";
import styles from "./followingAccount.module.scss";
import PropTypes from "prop-types";

import Image from "~/components/Image";
const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <div className={cx("account-item")}>
      <Image
        className={cx("account-image")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/1a42e2ba2657f2d65dd85d1d7fa7847b~c5_100x100.jpeg?x-expires=1665151200&x-signature=6ruA1ZO0zwm%2BPuMGgKczrRDlwMI%3D"
        alt="thanhtam"
      />
      <div className={cx("account-content")}>
        <p className={cx("account-title")}>
          <span className={cx("nickname")}>nick name</span>
        </p>
        <p className={cx("account-name")}>
          họ và tên
          {/* {`${data.last_name}${data.first_name}`} */}
        </p>
      </div>
    </div>
  );
}

export default AccountItem;
