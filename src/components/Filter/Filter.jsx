import { useDispatch, useSelector } from 'react-redux';
import contactsReducer, { changeFilter } from 'redux/contactsSlice';
import styles from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch(contactsReducer);

  const onChange = event => dispatch(changeFilter(event.target.value));

    return (
      <>
        <h2 className={styles.header}>Find contacts by name</h2>
        <input
          className={styles.input}
          type='text'
          name='filter'
          onChange={onChange}
          value={filter}
          />
      </>
    )
};

