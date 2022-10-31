import styles from "./VideoItem.module.scss";

function VideoItem({ data }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.video}>
        <video controls src={data.file_url}></video>
      </div>
      <div className={styles.title}>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default VideoItem;
