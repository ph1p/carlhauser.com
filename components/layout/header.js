import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  grid-area: header;
  border-bottom: 1px solid #000;
  justify-content: center;
  padding: 1.4rem 2rem;
  font-size: 1.9rem;
  background-color: #f3f3f3;
  position: ${props => props.scrollDown ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  z-index: 2;
  a {
    color: #000;
    text-decoration: none;
  }
`;

export default class Head extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      y: 0
    };
  }

  handleScroll = () => {
    this.setState({
      y: window.pageYOffset
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <Header scrollDown={this.state.y > 0}>
        <Link href="/">
          <a>{this.props.title || 'Secret Thoughts'}</a>
        </Link>
      </Header>
    );
  }
}
