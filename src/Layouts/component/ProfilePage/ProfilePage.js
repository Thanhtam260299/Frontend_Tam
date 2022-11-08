import classNames from "classnames/bind";
import styles from "./ProfilePage.module.scss";
import { useEffect, useState } from "react";
import Image from "../../../components/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";
import {
  ShareIconOutLine,
  MoreIcon,
  ReportIcon,
  BlockIcon,
  EmbedIcon,
  FacebookIcon,
  WhatAppIcon,
  TwittIcon,
  LinkIcon,
  LinkedIcon,
  RedditIcon,
  TelegramIcon,
  EmailIcon,
  LineShareIcon,
  PinterestIcon,
  ArrowDownIcon,
} from "../../../components/Icon";
import VideoItem from "../../../components/VideoItem/VideoItem";
import { profileService } from "../../../service/profileService";
import { useParams } from "react-router-dom";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import MenuItem from "../../../components/Popper/Menu/MenuItem";

const cx = classNames.bind(styles);
const more = [
  { title: "Report", icon: <ReportIcon />, separate: false },
  { title: "Block", icon: <BlockIcon />, separate: true },
];
const share = [
  { title: "Embed", icon: <EmbedIcon /> },
  { title: "Share to Facebook", icon: <FacebookIcon /> },
  { title: "Share to WhatsApp", icon: <WhatAppIcon /> },
  { title: "Share to Twitter  ", icon: <TwittIcon /> },
  { title: "Copy link", icon: <LinkIcon /> },
  { title: "Share to Linkedln  ", icon: <LinkedIcon /> },
  { title: "Share to Reddit  ", icon: <RedditIcon /> },
  { title: "Share to Telegram  ", icon: <TelegramIcon /> },
  { title: "Share to Email  ", icon: <EmailIcon /> },
  { title: "Share to Line  ", icon: <LineShareIcon /> },
  { title: "Share to Pinterest  ", icon: <PinterestIcon /> },
];

function ProfilePage() {
  const slug = useParams().nickname;
  const [data, setData] = useState([]);
  const [seeMore, setSeeMore] = useState([4]);
  const [active, setActive] = useState(false);
  useEffect(() => {
    profileService(slug).then((res) => setData(res));
  }, [slug]);
  console.log(data);

  const handleSeeMore = () => {
    setSeeMore(share.length - 1);
    setActive(true);
  };

  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <div>
          <PopperWrapper menuMore>
            {more.map((item, index) => (
              <MenuItem key={index} data={item} menuMore />
            ))}
          </PopperWrapper>
        </div>
      </div>
    );
  };
  const renderSharePreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <div>
          <PopperWrapper shareMore>
            <div className={cx("shareMore")}>
              {share.map((item, index) =>
                index <= seeMore ? (
                  <MenuItem key={index} data={item} menuShare />
                ) : (
                  false
                )
              )}
              <div
                className={cx("see-more", {
                  active,
                })}
                onClick={handleSeeMore}
              >
                <ArrowDownIcon />
              </div>
            </div>
          </PopperWrapper>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("header")}>
          {data && (
            <div className={cx("header-left")}>
              <div className={cx("info")}>
                <Image className={cx("image")} src={data.avatar} />
                <div className={cx("title")}>
                  <div className={cx("name")}>
                    <h4>{data.nickname}</h4>
                    <FontAwesomeIcon
                      className={cx("icon")}
                      icon={faCheckCircle}
                    />
                  </div>
                  <h4
                    className={cx("full-name")}
                  >{`${data.first_name} ${data.last_name}`}</h4>
                  <Button className={cx("button")} primary>
                    {" "}
                    Follow{" "}
                  </Button>
                </div>
              </div>
              <div className={cx("action")}>
                <span className={cx("item")}>
                  <strong>{data.followings_count}</strong>
                  Following
                </span>
                <span className={cx("item")}>
                  <strong>{data.followers_count}</strong>
                  Follower
                </span>
                <span className={cx("item")}>
                  <strong>{data.likes_count}</strong>
                  Likes
                </span>
              </div>
              <p className={cx("describe")}>{data.bio}</p>
              <p className={cx("link")}>{data.facebook_url}</p>
            </div>
          )}
          <div className={cx("header-right")}>
            <div>
              <Tippy
                interactive
                placement="bottom"
                offset={[-120, 0]}
                render={renderSharePreview}
              >
                <div>
                  <ShareIconOutLine className={cx("header-right-icon")} />
                </div>
              </Tippy>
            </div>
            <div>
              <Tippy
                interactive
                placement="bottom"
                offset={[-70, 0]}
                render={renderPreview}
              >
                <div>
                  <MoreIcon className={cx("header-right-icon")} />
                </div>
              </Tippy>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("body")}>
        <div className={cx("body-title")}>
          <span>Videos</span>
          <span>Linked</span>
        </div>
        <div className={cx("body-content")}>
          {data.videos &&
            data.videos.map((item, index) => (
              <VideoItem key={index} data={item} />
            ))}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
