import { useRef } from "react";
import "./goToHome.scss";
import { GoHomeIcon } from "../Icon/index";
import Button from "../Button";

function GoToHome() {
  const handleGoHome = () => {
    window.scrollTo(0, 0);
  };

  const homeRef = useRef(null);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      homeRef.current.style.display = "inline-flex";
    } else {
      homeRef.current.style.display = "none";
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="wrapper">
      <div onClick={handleGoHome} ref={homeRef} className="go-Home">
        <GoHomeIcon />
      </div>
      <Button children={"Get app"} className="get-app" />
    </div>
  );
}

export default GoToHome;
