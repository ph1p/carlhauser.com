import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Head from '../components/head';
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
    grid-template-areas:
      'header'
      'content'
      'sidebar';
    grid-template-rows: 55px 1fr 55px;
    grid-template-columns: 1fr;
  }
`;

const Header = styled.header`
  grid-area: header;
  border-bottom: 1px solid #000;
  justify-content: center;
  padding: 1.4rem 2rem;
  font-size: 1.9rem;
  a {
    color: #000;
    text-decoration: none;
  }
  @media (max-width: 700px) {
    header {
      position: fixed;
      width: 100%;
      background-color: #f3f3f3;
    }
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

  &::-webkit-scrollbar {
    width: 5px;
    height: 0;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #000;
  }

  @media (max-width: 700px) {
    height: auto;
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
          <Header>
            <Link href="/">
              <a>Secret Thoughts</a>
            </Link>
          </Header>
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
