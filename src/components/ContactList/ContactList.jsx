import css from './ContactList.module.css';
import PropTypes from 'prop-types';
export const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <span>{contact.name}: </span>
          <span>{contact.number}</span>
          <button onClick={() => removeContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};
