import { Component } from 'react';
import Notiflix from 'notiflix';

class Searchbar extends Component {
  state = {
    name: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name.trim() === '') {
      Notiflix.Notify.warning('Enter something dude');
      return;
    }
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };

  handleChange = event => {
    this.setState({ name: event.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleChange}
            value={this.state.name}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
