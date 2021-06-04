import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import Drinks from './components/Drinks.jsx';
import Roulette from './components/Roulette.jsx';
import Register from './components/Register.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      drink: false,
      register: false,
    }
    this.updateWin = this.updateWin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  componentDidMount() {
    this.getAll()
  }

  handleRegister() {
    this.setState({
      register: true,
    });
  }

  getAll() {
    axios.get('/drinks')
      .then(({ data }) => {
        this.setState(
          { drinks: data.rows },
        );
      });
  }

  registerUser(info) {
    axios.post('/drinks', info)
  }

  updateWin(winner) {
    this.setState({
      drink: this.state.drinks[winner]
    })
  }

  render() {
    if (this.state.drink) {
      return (
        <div >
          <Nav handleRegister={this.handleRegister} />
          <div className='main'>
            <Drinks winningDrink={this.state.drink} />
          </div>
        </div>
      )
    }
    if (this.state.register) {
      return (
        <div id="registrationForm">
          <Register registerUser={this.registerUser} />
        </div>
      );
    }
      return (
        <div>
          <Nav handleRegister={this.handleRegister} />
          <div id='main'>
            <Roulette updateWin={this.updateWin} />
          </div>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));