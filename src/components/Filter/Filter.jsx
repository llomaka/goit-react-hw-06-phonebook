import PropTypes from "prop-types";
import styles from "./Filter.module.css";

export default function Filter({ filter, onChange }) {
    return (
      <>
        <h2 className={styles.header}>Find contacts by name</h2>
        <input
          className={styles.input}
          type="text"
          name="filter"
          onChange={onChange}
          value={filter}
          />
      </>
    )
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

