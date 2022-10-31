//t thèn này là layout chung, chính của home, chung của 3 thèn home, following, profile,
import Header from "~/Layouts/component/Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
        {/* //sẽ code thèn body content trong này */}
      </div>
    </div>
  );
}

export default DefaultLayout;
