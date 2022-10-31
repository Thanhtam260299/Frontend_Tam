import ItemHome from "./itemHome";
import styles from "./listItemsHome.module.scss";
import { useEffect, useState, useRef } from "react";

import { videos } from "~/service/videoService";

function ListItemsHome() {
  const [listVideo, setListVideo] = useState([]);
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [userList, setUserList] = useState([]);
  const [wasLastList, setWasLastList] = useState(false);

  useEffect(() => {
    videos(currPage).then((res) => setListVideo(res));
  }, [currPage]);
  return (
    <div ref={listInnerRef} className={styles.wrapper}>
      {listVideo.map((data, index) => (
        <ItemHome key={index} data={data} />
      ))}
      \
    </div>
  );
}

export default ListItemsHome;
