import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/styles';

const Header = styled.header`
  display: flex;
  grid-area: header;
  border-bottom: 1px solid #000;
  padding: 1.4rem 2rem;
  font-size: 1.9rem;
  background-color: #f3f3f3;
  position: ${props => (props.scrollDown ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  z-index: 2;
  a {
    color: #000;
    text-decoration: none;
    display: inline-block;
    &:nth-child(3) {
      text-align: right;
      margin-left: auto;
    }
  }
`;

const Title = styled.a`
  float: left;
`;

const BmcButton = styled.a`
  line-height: 30px;
  height: 32px;
  text-decoration: none;
  color: #ffffff !important;
  background-color: #000000;
  border-radius: 3px;
  border: 1px solid transparent;
  padding: 1px 9px 1px 7px;
  font-size: 17px;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  margin: -3px 0 0 10px;
  font-family: 'Cookie', cursive;
  box-sizing: border-box;
  transition: 0.3s all linear;
  display: inline-block;
  float: left;
  img {
    width: 21px;
    margin-bottom: 1px;
    box-shadow: none;
    border: none;
    vertical-align: middle;
  }
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color: #ffffff !important;
  }
  span{
  ${media.phone`display: none; `}
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
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <Header scrollDown={this.state.y > 0}>
        <>
          <Link href="/">
            <Title>{this.props.title || 'Secret Thoughts'}</Title>
          </Link>



          <BmcButton
            target="_blank"
            href="https://www.buymeacoffee.com/mjHJCSyoD"
          >
            <img
              src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg"
              alt="Buy me a coffee"
            />
            <span style={{ marginLeft: 5 }}>Buy me a coffee</span>
          </BmcButton>
        </>
        {this.props.children}
      </Header>
    );
  }
}
