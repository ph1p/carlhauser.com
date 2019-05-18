import React from 'react';
import Link from 'next/link';
import Header from '../components/layout/header';
import Sidebar from '../components/sidebar';
import ListEntry from '../components/list-entry';
import TwitterIcon from '../icons/twitter';
import InstagramIcon from '../icons/instagram';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Main = styled.main`
  display: grid;
  grid-template-areas:
    'header header header'
    'content content sidebar';
  grid-template-rows: 55px 1fr;
  grid-template-columns: 1fr;
  font-size: 1.4rem;
  height: 100%;
  opacity: 0;
  transition: opacity 1s;

  &.loaded {
    opacity: 1;
  }

  @media (max-width: 700px) {
    padding: 55px 0 0;
    display: block;
  }
`;

const Content = styled.section`
  grid-area: content;
  grid-column: 1;
  position: relative;
  z-index: 1;
  overflow-y: scroll;
  margin: 0 0 0;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  background-color: #f3f3f3;

  &::-webkit-scrollbar {
    width: 5px;
    height: 0;
  }
  &::-webkit-scrollbar-track {
    background-color: #f3f3f3;
  }
  &::-webkit-scrollbar-thumb {
    background: #000;
  }

  @media (max-width: 700px) {
    padding-bottom: 55px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
`;
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'all'
    };
  }

  getEntries() {
    const { filter } = this.state;

    return this.props.entries.length
      ? this.props.entries.filter(
          e =>
            filter === 'all' ||
            (filter === 'done' && e.done) ||
            (filter === 'drafts' && !e.done)
        )
      : [];
  }

  setFilter = option => {
    this.setState(state => ({
      filter: state.filter === option ? 'all' : option
    }));
  };

  componentDidMount() {
    this.refs.main.classList.add('loaded');
  }

  render() {
    const { filter } = this.state;
    const { clientHeight } = this.props;

    return (
      <>
        <Main ref="main" className="main">
          <Header />
          <Content>
            {this.getEntries().map(e => (
              <ListEntry {...e} key={'entry-' + e.id} />
            ))}
          </Content>
          <Sidebar setFilter={this.setFilter} filter={filter} />
        </Main>
      </>
    );
  }
}

export default connect(state => ({
  entries: state.entries.data
}))(Home);
