import React from 'react';
import Link from 'next/link';
import Sidebar from '../components/sidebar';
import ListEntry from '../components/list-entry';
import TwitterIcon from '../icons/twitter';
import InstagramIcon from '../icons/instagram';
import styled from 'styled-components';

const Main = styled.main`
  display: grid;
  grid-template-areas:
    'header header'
    'content content';
  grid-template-rows: 55px 1fr;
  grid-template-columns: 1fr;
  font-size: 1.4rem;
  height: 100%;
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
    position: fixed;
    width: 100%;
    background-color: #f3f3f3;
  }
`;

const Content = styled.section`
  display: grid;
  grid-template-areas:
    'text text text close'
    'contact contact title title';
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-area: content;
  overflow: auto;
  margin: 0;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  background-color: #000;
  color: #fff;
  padding: 60px;
  grid-gap: 30px;
  position: relative;

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
    grid-columns: 1fr;
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

  @media (min-width: 1024px) and (max-width: 1400px) {
    .contact {
      padding-bottom: 60px;
    }
    .title {
      transform: rotate(-90deg);
      position: absolute;
      right: -23rem;
      bottom: 27rem;
    }
  }

  @media (max-width: 1024px) {
    .title {
      font-size: 15rem;
      line-height: 15rem;
      text-align: right;
    }
  }

  @media (max-width: 700px) {
    grid-template-areas:
      'title title title close'
      'text text text text'
      'contact contact contact contact';
    padding: 4rem 2rem;
    grid-gap: 10px;
    position: inherit;

    .close {
      font-size: 1.8rem;
      line-height: 2rem;
      padding: 0 0 2rem;
      justify-content: start;
      align-self: start;
    }
    .title {
      font-size: 10rem;
      line-height: 8rem;
      text-align: left;
      align-self: center;
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
  }
`;

class Home extends React.Component {
  render() {
    return (
      <>
        <Main>
          <Header>
            <Link href="/">
              <a>Secret Thoughts</a>
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
            <div className="close">
              <Link href="/">
                <a>close</a>
              </Link>
            </div>
            <div className="contact">
              If you got any questions, just{' '}
              <a href="mailto:me@carlhauser.com">drop me a line</a>
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
