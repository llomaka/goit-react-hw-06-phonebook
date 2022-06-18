import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

export default function ContactList({ contacts, handleClick }) {
  return (
    <ul>
      {contacts.map(contact =>
      (<li
        key={contact.id}
        id={contact.id}
        className={styles.item}
      >
        {contact.name}: {contact.number}
        <button
          className={styles.button}
          type="button"
          onClick={() => handleClick(contact.id)}
        >
          Delete
        </button>
      </li>)
      )}
    </ul>
  )
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })).isRequired,
  handleClick: PropTypes.func.isRequired,
};
