import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
  <li className={styles.statsItem}>
    <span className={styles.statsName}>Followers</span>
    <span className={styles.statsValue}>{stats.followers}</span>
  </li>
  <li className={styles.statsItem}>
    <span className={styles.statsName}>Views</span>
    <span className={styles.statsValue}>{stats.views}</span>
  </li>
  <li className={styles.statsItem}>
    <span className={styles.statsName}>Likes</span>
    <span className={styles.statsValue}>{stats.likes}</span>
  </li>
</ul>

    </div>
  );
};

export default Profile;
