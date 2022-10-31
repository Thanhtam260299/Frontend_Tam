import styles from "./AccountPreview.module.scss";
import classNames from "classnames/bind";
import Image from "~/components/Image";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview({ data, suggest }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Image className={cx("image")} src={data.avatar || data.user.avatar} />
        <Button primary className={cx("button")}>
          Follow
        </Button>
      </div>
      <div className={cx("title")}>
        <span className={cx("content-title")}>
          {data.nickname || data.user.nickname}
        </span>
        {suggest == true
          ? data.user.tick && (
              <FontAwesomeIcon
                className={cx("icon-title")}
                icon={faCheckCircle}
              />
            )
          : false}
        {data.tick ? (
          <FontAwesomeIcon className={cx("icon-title")} icon={faCheckCircle} />
        ) : (
          false
        )}
      </div>
      <h5 className={cx("nickName")}>
        {`${data.last_name}${data.first_name}`}
      </h5>
      <div className={cx("interactive")}>
        <span className={cx("fllower-count")}>
          {suggest == true ? data.user.followers_count : data.followers_count}
        </span>
        <span className={cx("fllower")}>Followers</span>
        <span className={cx("like-count")}>
          {suggest == true ? data.user.likes_count : data.likes_count}
        </span>
        <span className={cx("like")}>Likes</span>
      </div>
      {suggest == true
        ? data.user.bio && <div className={cx("bio")}>{data.user.bio}</div>
        : false}
    </div>
  );
}

export default AccountPreview;
