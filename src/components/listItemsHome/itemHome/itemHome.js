import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./itemHome.module.scss";
import Image from "~/components/Image";
import Button from "~/components/Button";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import AccountPreview from "~/components/suggestAccount/AccountPreview";
import {
  TymIcon,
  CommentIcon,
  ShareIcon,
  MusicNoteIcon,
} from "~/components/Icon";
const cx = classNames.bind(styles);

function ItemHome({ data }) {
  const navigate = useNavigate();

  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <div>
          <PopperWrapper>
            <AccountPreview data={data} suggest />
          </PopperWrapper>
        </div>
      </div>
    );
  };
  console.log(data);

  const handleNavigate = () => {
    navigate("/@" + data.user.nickname);
    window.scrollTo(0, 0);
  };

  return (
    <div className={cx("wrapper")}>
      <div>
        <Tippy
          interactive
          delay={[1000, 800]}
          offset={[125, 5]}
          placement="bottom"
          render={renderPreview}
        >
          <div>
            <Image
              onClick={handleNavigate}
              className={cx("avatar")}
              alt={data.user.nickname}
              src={data.user.avatar}
            />
          </div>
        </Tippy>
      </div>
      <div className={cx("content")}>
        <div className={cx("text-info-content")}>
          <div className={cx("name-info")}>
            <div>
              <Tippy
                interactive
                delay={[1000, 500]}
                offset={[30, 40]}
                placement="bottom"
                render={renderPreview}
              >
                <h3 className={cx("nickname")} onClick={handleNavigate}>
                  {data.user.nickname}
                </h3>
              </Tippy>
            </div>
            {data.user.tick && (
              <FontAwesomeIcon className={cx("icon")} icon={faCheckCircle} />
            )}
            <h4 className={cx("name")}>
              {`${data.user.first_name}${data.user.last_name}`}
            </h4>
          </div>
          <p className={cx("description")}>{data.description}</p>
          {data.music && (
            <div className={cx("title-video")}>
              <MusicNoteIcon />
              <p>{data.music}</p>
            </div>
          )}
          <div className={cx("button")}>
            <Button children="Follow" outLine />
          </div>
        </div>
        <div className={cx("video-content")}>
          <div className={cx("video-inner")}>
            <video className={cx("video")} controls src={data.file_url}></video>
          </div>
          <div className={cx("action-items")}>
            <div className={cx("item")}>
              <span className={cx("icon")}>
                <TymIcon />
              </span>
              <span className={cx("count")}>{data.likes_count}</span>
            </div>
            <div className={cx("item")}>
              <span className={cx("icon")}>
                <CommentIcon />
              </span>
              <span className={cx("count")}>{data.comments_count}</span>
            </div>
            <div className={cx("item")}>
              <span className={cx("icon")}>
                <ShareIcon />
              </span>
              <span className={cx("count")}>28M</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemHome;
