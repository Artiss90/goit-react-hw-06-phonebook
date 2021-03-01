import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import FilterName from './Components/FilterName/FilterName';
import style from './App.module.css';
import classNames from 'classnames/bind';
import Logo from 'Components/Logo/Logo';
import appearSlide from './transitionsCSS/appearSlide.module.css'; /**модули CSS указывать до CSSTransition */
import fade from './transitionsCSS/fade.module.css';
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

  render() {
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
        <Form
        // ? функция добавления контакта реализована через Redux
        ></Form>
        <CSSTransition
          //TODO Анимация появления-исчезания поля для фильтра контактов по условию
          in={contacts.length > 1}
          timeout={500}
          classNames={fade}
          unmountOnExit
        >
          <FilterName />
        </CSSTransition>
        <h2 className={mixStyle('title', 'center')}>Contacts</h2>
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = ({ contacts: { items } }) => {
  return {
    contacts: items,
  };
};

export default connect(mapStateToProps)(App);
