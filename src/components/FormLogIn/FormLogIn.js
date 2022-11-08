import { useContext } from "react";
import classNames from "classnames/bind";
import styles from "./FormLogIn.module.scss";
import Button from "~/components/Button";
import {
  QrIcon,
  UserIcon,
  FbIcon,
  GoogleIcon,
  TwitterIcon,
  LineIcon,
  TalkIcon,
  AppleIcon,
  InstarIcon,
  CloseIcon,
} from "~/components/Icon";
import { ActiveContext } from "./ActiveLogin";

const cx = classNames.bind(styles);
const data = [
  {
    leftIcon: <QrIcon />,
    children: "Use QR code",
  },
  {
    leftIcon: <UserIcon />,
    children: "Use phone / email / username",
  },
  {
    leftIcon: <FbIcon />,
    children: "Continue with Facebook",
  },
  {
    leftIcon: <GoogleIcon />,
    children: "Continue with Google",
  },
  {
    leftIcon: <TwitterIcon />,
    children: "Continue with Twitter",
  },
  {
    leftIcon: <LineIcon />,
    children: "Continue with LINE",
  },
  {
    leftIcon: <TalkIcon />,
    children: "Continue with KakaoTalk",
  },
  {
    leftIcon: <AppleIcon />,
    children: "Continue with Apple",
  },
  {
    leftIcon: <InstarIcon />,
    children: "Continue with Instagram",
  },
];
function FormLogIn() {
  const activeForm = useContext(ActiveContext);
  const handleCloseForm = () => {
    activeForm.toggleActive();
  };
  return (
    <div className={cx("wrapper", `${activeForm.active}`)}>
      <div className={cx("inner")}>
        <div className={cx("header")}>Log in to TikTok</div>
        <div className={cx("container")}>
          {data.map((item, index) => (
            <Button
              key={index}
              leftIcon={item.leftIcon}
              FormLogIn
              children={item.children}
            />
          ))}
        </div>
        <div className={cx("footer")}>
          <p> Don't have an account? </p>
          <span> Sign up </span>
        </div>
        <div className={cx("close-form")} onClick={handleCloseForm}>
          <CloseIcon />
        </div>
      </div>
    </div>
  );
}

export default FormLogIn;
