import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  children,
  href,
  to,
  rightIcon,
  leftIcon,
  primary = false,
  text = false,
  hagTag = false,
  outLine = false,
  logIn = false,
  FormLogIn = false,
  className,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (href) {
    props.href = href;
    Comp = "a";
  } else if (to) {
    props.to = to;
    Comp = Link;
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    href,
    text,
    hagTag,
    outLine,
    logIn,
    FormLogIn,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
  rightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
  primary: PropTypes.bool,
  hagTag: PropTypes.bool,
  text: PropTypes.bool,
  outLine: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
