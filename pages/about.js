import React from 'react';
import Link from 'next/link';
import Header from '../components/layout/header';
import Sidebar from '../components/sidebar';
import ListEntry from '../components/list-entry';
import TwitterIcon from '../icons/twitter';
import InstagramIcon from '../icons/instagram';
import { media } from '../utils/styles';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    position:relative;
    background-color: #000;
    &::-webkit-scrollbar {
      background-color: #fff;
      border-left: 1px solid #fff;
      ${media.phone`
        width: 0;
        height: 0;
      `}
      ${media.tablet`
        width: 0;
        height: 0;
      `}
    }
    &::-webkit-scrollbar-track {
      background-color: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background: #000;
    }
  }
  #__next {
    height: inherit;
    ${media.tablet`
      height: auto;
    `}
  }
`;

const Main = styled.main`
  font-size: 1.4rem;
  padding: 55px 0 0;
  height: 100%;
  ${media.phone`
    display: block;
  `}
`;

const Content = styled.section`
  display: grid;
  grid-template-areas:
    'text text text text'
    'contact contact title title';
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-area: content;
  overflow: auto;
  margin: 0;
  background-color: #000;
  color: #fff;
  padding: 60px;
  grid-gap: 30px;
  position: relative;
  height: 100%;

  a {
    display: inline;
    text-decoration: underline;
    color: #fff;
  }
  .text {
    grid-area: text;
    font-size: 4rem;
    line-height: 5rem;
    p {
      margin: 0;
    }
  }
  .close {
    grid-area: close;
    text-align: right;
    text-decoration: underline;
  }
  .contact {
    grid-area: contact;
    font-size: 4rem;
    line-height: 5rem;
    align-self: end;
    p {
      font-size: 1rem;
      line-height: 2.8rem;
      color: #999;
      margin: 0;
    }
  }
  .title {
    grid-area: title;
    font-size: 26rem;
    line-height: 26rem;
    text-align: right;
    align-self: end;
    transition: all 0.3s;
  }

  &::-webkit-scrollbar {
    width: 5px;
    height: 0;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #fff;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    grid-template-areas:
      'text text text title'
      'contact contact contact title';
    .title {
      transform: rotate(-90deg);
      position: absolute;
      font-size: 22rem;
      line-height: 17rem;
      right: -19rem;
      bottom: 22rem;
    }
  }

  ${media.tablet`
    overflow: inherit;
    grid-template-areas:
      'title title title title'
      'text text text text'
      'contact contact contact contact';

    .title {
      font-size: 15rem;
      line-height: 15rem;
      text-align: left;
      align-self: center;
      transition: none;
    }
  `}

  ${media.phone`
    overflow: inherit;
    grid-template-areas:
      'title title title title'
      'text text text text'
      'contact contact contact contact';
    padding: 4rem 2rem;
    grid-gap: 10px;
    position: inherit;

    .title {
      font-size: 10rem;
      line-height: 8rem;
      text-align: left;
      align-self: center;
      transition: none;
    }
    .text {
      font-size: 2.2rem;
      line-height: 3rem;
      p {
        margin: 1em 0;
      }
    }
    .contact {
      font-size: 2.2rem;
      line-height: 3rem;
      padding: 0 0 2rem;
      p {
        margin: 10px 0 0 0;
        line-height: 1.4rem;
      }
    }
  `};
`;

class Home extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Main>
          <Header>
            <Link href="/">
              <a aria-label="Close about page">close</a>
            </Link>
          </Header>
          <Content>
            <div className="text">
              <p>
                My name is Sebastian, also known as carlhauser. I’m a{' '}
                <u>designer</u> from Germany.
              </p>
              <p>
                This page shows thoughts and ideas I had during waiting, taking
                the tram and while I was working on stuff. When an idea is
                visualized, I will mark it as done and place a link to the
                specific instagram page. The simple reason for this is, I'm a
                big fan of sharing ideas.
              </p>
              <p>
                It's bullshit to not present your process and thoughts, because
                of someone could steal it. I'm working and thinking, especially
                about design, every day, even if I'm not creating a cool
                Interface or a fancy motion design. So why shouldn't I tell you
                about it.
              </p>
            </div>
            <div className="contact">
              If you got any questions, just{' '}
              <a aria-label="Send E-Mail" href="mailto:me@carlhauser.com">drop me a line</a>
              <p>Created with love from my brother</p>
            </div>
            <div className="title">Hello.</div>
          </Content>
        </Main>
      </>
    );
  }
}

export default Home;
