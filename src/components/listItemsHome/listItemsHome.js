import ItemHome from "./itemHome";
import styles from "./listItemsHome.module.scss";
import { useEffect, useState, useRef } from "react";

import axios from "axios";

import { videos } from "~/service/videoService";

function ListItemsHome() {
  const [listVideo, setListVideo] = useState([]);
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://tiktok.fullstack.edu.vn/api/videos?page=1&type=for-you")
      .then((res) => setListVideo(res.data.data));
    // videos(currPage).then((res) => setListVideo(res));
  }, [currPage]);
  console.log(listVideo);
  return (
    <div ref={listInnerRef} className={styles.wrapper}>
      {listVideo.map((data, index) => (
        <ItemHome key={index} data={data} />
      ))}
    </div>
  );
}

export default ListItemsHome;
