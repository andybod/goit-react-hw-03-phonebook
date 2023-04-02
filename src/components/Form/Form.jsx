import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';
export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChecked = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <div className={css.containerForm}>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <div className={css.wrap}>
            {' '}
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChecked}
              value={this.state.name}
            />
          </div>
          <div className={css.wrap}>
            <label htmlFor="number">Namber</label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChecked}
              value={this.state.number}
            />
          </div>

          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  createContact: PropTypes.func.isRequired,
};
