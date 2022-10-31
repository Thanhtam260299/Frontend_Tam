import styles from "./sidebarFooter.module.scss";

function FooterItem({ items }) {
  return (
    <div className={styles.wrapperItem}>
      {items.map((item) => (
        <span key={item} className={styles.item}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default FooterItem;
