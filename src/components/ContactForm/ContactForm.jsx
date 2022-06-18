import React, { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';
import styles from "./ContactForm.module.css";

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    resetForm();
  };

  return (
      <form
        className={styles.form}
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <div className={styles.fields}>
          <label
            className={styles.label}
            htmlFor={nameInputId}>
            Name *
          </label>
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={nameInputId}
            placeholder="John Smith"
            onChange={handleInputChange}
            value={name}
          />
        </div>
        <div className={styles.fields}>
          <label
            className={styles.label}
            htmlFor={numberInputId}>
            Number *
          </label>
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={numberInputId}
            placeholder="050-123-23-23"
            onChange={handleInputChange}
            value={number}
          />
        </div>
        <button
        className={styles.button}
        type="submit"
        name="submit_button"
        >
          Add contact
        </button>
      </form>
    )};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
