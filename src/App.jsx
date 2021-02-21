import { Component } from 'react';
import { connect } from 'react-redux';
// import contactsAction from 'redux/contactsRedux/contactsAction';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import FilterName from './Components/FilterName/FilterName';
import style from './App.module.css';
import classNames from 'classnames/bind';
import Logo from 'Components/Logo/Logo';
import Alert from 'Components/Alert/Alert';
import appearSlide from './transitionsCSS/appearSlide.module.css'; /**модули CSS указывать до CSSTransition */
import fade from './transitionsCSS/fade.module.css';
// import fadeScale from './transitionsCSS/fadeScale.module.css';
import { CSSTransition } from 'react-transition-group';

/* eslint react/prop-types: 1 */

let mixStyle = classNames.bind(style);

class App extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      }),
    ),
  };
  state = {
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    // filter: '',
    alertRepetition: '',
  };

  componentDidMount() {
    // TODO: 'При загрузке приложения, контакты, если таковые есть, считываются из локального хранилища и записываются в состояние'

    const listContacts = localStorage.getItem('listContacts');
    const parsedListContacts = JSON.parse(listContacts);

    if (parsedListContacts) {
      this.setState({ contacts: parsedListContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // TODO: 'При добавлении и удалении контакта, контакты сохраняются в локальное хранилище'

    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      // console.log(
      //   'Обновился список контактов, записываю список контактов в хранилище',
      // );
      localStorage.setItem('listContacts', JSON.stringify(nextContacts));
    }
  }

  // addContact = ({ name, number }) => {
  //   const { contacts } = this.state;
  //   /**создаём новый контакт и присвоим ему ID  */
  //   const phoneContact = {
  //     id: uuidv4(),
  //     name: name,
  //     number: number,
  //   };
  //   // ! не реализована проверка в редакс
  //   /**проверка на повторение имён */
  //   if (contacts.find(contactName => contactName.name === name)) {
  //     this.setState({ alertRepetition: `${name} is already in contacts!` });
  //     return;
  //   }
  //   /**добавляем новый контакт в в состояние контактов */
  //   this.setState(({ contacts }) => ({
  //     contacts: [phoneContact, ...contacts],
  //   }));
  // };
  onResetAlert = () => {
    this.setState({ alertRepetition: '' });
  };

  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // // !не реализовано через  редакс
  //   getVisibleContacts = () => {
  //     const { filter, contacts } = this.state;
  //     const normalizedFilter = filter.toLowerCase();

  //     return contacts.filter(contactName =>
  //       contactName.name.toLowerCase().includes(normalizedFilter),
  //     );
  //   };

  // onDeleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(
  //       contactPhone => contactPhone.id !== contactId,
  //     ),
  //   }));
  // };

  render() {
    const { alertRepetition } = this.state;
    const { contacts } = this.props;
    return (
      <>
        <CSSTransition
          //TODO добавляем анимацию появления Logo при загрузке страницы
          in={true}
          appear={true}
          timeout={500}
          classNames={appearSlide}
          unmountOnExit
        >
          <Logo />
        </CSSTransition>
        <CSSTransition
          //TODO Анимация появления-исчезания предупреждения о совпадении имён по условию
          in={alertRepetition.length > 0}
          timeout={3000}
          classNames={fade}
          unmountOnExit
          onEntered={() => this.onResetAlert()}
        >
          <Alert message={alertRepetition} />
        </CSSTransition>
        <Form
        // ? функция добавления контакта реализована через Redux
        /*onSubmitForm={this.addContact}*/
        ></Form>
        <CSSTransition
          //TODO Анимация появления-исчезания поля для фильтра контактов по условию
          in={contacts.length > 1}
          timeout={500}
          classNames={fade}
          unmountOnExit
        >
          <FilterName /*value={this.state.filter} onChange={this.changeFilter}*/
          />
        </CSSTransition>
        <h2 className={mixStyle('title', 'center')}>Contacts</h2>
        <ContactList
        // contacts={this.getVisibleContacts()}
        /**onClickDelete={this.onDeleteContact} */
        />
      </>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     changeFilter: value => dispatch(contactsAction.changeFilter(value)),
//   };
// };

const mapStateToProps = ({ contacts: { items } }) => {
  return {
    contacts: items,
  };
};

export default connect(mapStateToProps)(App);
