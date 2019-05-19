import React from 'react';
import Link from 'next/link';
import Header from '../components/layout/header';
import Sidebar from '../components/sidebar';
import ListEntry from '../components/list-entry';
import TwitterIcon from '../icons/twitter';
import InstagramIcon from '../icons/instagram';
import { media } from '../utils/styles';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f3f3f3;
  }
`;

const Main = styled.main`
  font-size: 1.4rem;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 1s;
  padding: 55px 75px 0 0;


  @media (hover: none) and (pointer: coarse) {
    padding: 55px 70px 0 0;
  }

  &.loaded {
    opacity: 1;
  }

  ${media.phone`
    overflow: inherit;
    display: block;
    position: relative;
    padding: 55px 0 56px 0;
  `}
`;

const Content = styled.section`
  position: relative;
  z-index: 1;
  margin: 0 0 0;
  background-color: #f3f3f3;
  width: 100%;

  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    padding-bottom: 29px;
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
        <GlobalStyle />
        <Main ref="main" className="main">
          <Header />
          <Content ref="content">
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
