import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import Form from 'components/Form/Form';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount = () => {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts) {
      this.setState({ contacts: JSON.parse(localContacts) });
    }
  };

  componentDidUpdate = prevProps => {
    if (prevProps.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  checkNewName = newName => {
    return this.state.contacts.find(
      ({ name }) => name.toLowerCase() === newName.toLowerCase()
    );
  };
  createContact = ({ name, number }) => {
    if (!this.checkNewName(name)) {
      const contact = {
        name,
        number,
        id: nanoid(),
      };
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    } else {
      alert(`${name} is already in contacts!`);
    }
  };
  handleFilter = e => {
    this.setState({ filter: e.target.value.trim() });
  };
  filteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form createContact={this.createContact} />
        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter} value={this.state.value} />
        <ContactList
          contacts={this.filteredContacts()}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}
