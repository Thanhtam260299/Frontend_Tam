import classNames from "classnames";
import { useState, forwardRef } from "react";
import PropTypes from "prop-types";

import images from "~/asset/images";
import styles from "./Image.module.scss";

const Image = forwardRef(
  (
    { className, src, alt, fallback: customFallback = images.noImg, ...props },
    ref
  ) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={classNames(styles.wrapper, className)}
        src={fallback || src}
        ref={ref}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
