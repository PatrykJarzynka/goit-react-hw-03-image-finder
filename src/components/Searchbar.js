import { Component } from 'react';
import Notiflix from 'notiflix';
import styled from '@emotion/styled';

const FancySearch = styled.header({
  top: 0,
  left: 0,
  position: 'sticky',
  zIndex: 1100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '64px',
  padding: '12px 24px',
  color: '#fff',
  backgroundColor: '#3f51b5',
  boxShadow:
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
});

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
      <FancySearch className="searchbar">
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
      </FancySearch>
    );
  }
}

export default Searchbar;
