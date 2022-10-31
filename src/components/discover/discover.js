import classNames from "classnames/bind";
import styles from "./discover.module.scss";
import Button from "~/components/Button";
import { OtherIcon, MusicNoteIcon } from "~/components/Icon";

const cx = classNames.bind(styles);
function Discover({ label }) {
  return (
    <div className={cx("wrapper")}>
      <h4 className={cx("title")}>{label}</h4>
      <div className={cx("content")}>
        <Button hagTag leftIcon={<OtherIcon />} children="suThatLa" />
        <Button hagTag leftIcon={<MusicNoteIcon />} children="macKeDoi" />
        <Button hagTag leftIcon={<OtherIcon />} children="sansangthaydoi" />
        <Button
          hagTag
          leftIcon={<MusicNoteIcon />}
          children="Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng"
        />
        <Button
          hagTag
          leftIcon={<OtherIcon />}
          children="Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham"
        />
        <Button hagTag leftIcon={<OtherIcon />} children="7749hieuung" />
        <Button hagTag leftIcon={<MusicNoteIcon />} children="genzlife" />
        <Button
          hagTag
          leftIcon={<MusicNoteIcon />}
          children="Tình Đã Đầy Một Tim - Huyền Tâm Môn"
        />
        <Button
          hagTag
          leftIcon={<OtherIcon />}
          children="Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham"
        />
        <Button
          hagTag
          leftIcon={<MusicNoteIcon />}
          children="Thiên Thần Tình Yêu - RICKY STAR"
        />
      </div>
    </div>
  );
}

export default Discover;
