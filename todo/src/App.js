import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import TodoList from './components/TodoList';
import { add } from './actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList todos={this.props.todos}/>
        <form onSubmit={(event) => {
            event.preventDefault();
            this.props.add(event.target[0].value)
            event.target.reset();}
        }>
          <input type="text"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

// The mapStateToProps function specifies which portion of the 
// state tree this component needs to receive. In this case, 
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
  return {
      todos: state.todos
  };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, {add})(App);
