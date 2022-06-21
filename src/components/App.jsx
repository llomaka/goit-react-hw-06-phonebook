import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from "./Filter/Filter";
import styles from './App.module.css';

export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1 className={styles.header}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.subheader}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
