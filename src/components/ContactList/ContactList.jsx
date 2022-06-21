import { useDispatch, useSelector } from "react-redux";
import { contactsReducer, deleteContact } from "redux/store";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch(contactsReducer);
  const renderContactList = () => contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul>
      {renderContactList().map(contact =>
      (<li
        key={contact.id}
        id={contact.id}
        className={styles.item}
      >
        {contact.name}: {contact.number}
        <button
          className={styles.button}
          type="button"
          onClick={() => dispatch(deleteContact(contact.id))}
        >
          Delete
        </button>
      </li>)
      )}
    </ul>
  )
};
