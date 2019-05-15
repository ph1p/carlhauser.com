import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Head from '../components/head';
import Sidebar from '../components/sidebar';
import ListEntry from '../components/list-entry';
import TwitterIcon from '../icons/twitter';
import InstagramIcon from '../icons/instagram';

class Home extends React.Component {
  render() {
    return (
      <>
        <main>
          <header>
            <Link href="/">
              <a>Secret Thoughts</a>
            </Link>
          </header>
          <section className="content">
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
          </section>
        </main>

        <style jsx>{`
          main {
            display: grid;
            grid-template-areas:
              'header header'
              'content content';
            grid-template-rows: 55px 1fr;
            grid-template-columns: 1fr;
            font-size: 1.4rem;
            position: fixed;
            height: 100%;
            width: 100%;
          }

          header {
            grid-area: header;
            border-bottom: 1px solid #000;
            justify-content: center;
            padding: 1.4rem 2rem;
            font-size: 1.9rem;
          }
          header a {
            color: #000;
            text-decoration: none;
          }

          .content {
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
          }

          .content a {
            display: inline;
            text-decoration: underline;
            color: #fff;
          }
          .content .text {
            grid-area: text;
            font-size: 4rem;
            line-height: 5rem;
          }
          .content .text p {
            margin: 0;
          }
          .content .close {
            grid-area: close;
            text-align: right;
            text-decoration: underline;
          }
          .content .contact {
            grid-area: contact;
            font-size: 4rem;
            line-height: 5rem;
            align-self: end;
          }
          .content .contact p {
            font-size: 1rem;
            line-height: 2.8rem;
            color: #999;
            margin: 0;
          }
          .content .title {
            grid-area: title;
            grid-columns: 1fr;
            font-size: 26rem;
            line-height: 26rem;
            text-align: right;
            align-self: end;
            transition: all 0.3s;
          }

          .content::-webkit-scrollbar {
            width: 5px;
            height: 0;
          }
          .content::-webkit-scrollbar-track {
            display: none;
          }
          .content::-webkit-scrollbar-thumb {
            background: #fff;
          }

          @media (min-width: 1024px) and (max-width: 1400px) {
            .content .title {
              transform: rotate(-90deg);
              position: absolute;
              right: -23rem;
              bottom: 23rem;
            }
          }

          @media (max-width: 1024px) {
            .content .title {
              font-size: 15rem;
              line-height: 15rem;
              text-align: right;
            }
          }

          @media (max-width: 700px) {
            .content {
              grid-template-areas:
                'title title title title'
                'text text text text'
                'contact contact contact close';
              padding: 4rem 2rem;
              grid-gap: 10px;
            }
            .content .close {
              font-size: 1.8rem;
              line-height: 2rem;
              padding: 0 0 2rem;
              justify-content: end;
              align-self: end;
            }
            .content .title {
              font-size: 10rem;
              line-height: 8rem;
              text-align: left;
              align-self: center;
            }
            .content .text {
              font-size: 2.2rem;
              line-height: 3rem;
            }
            .content .text p {
              margin: 1em 0;
            }
            .content .contact {
              font-size: 2.2rem;
              line-height: 3rem;
              padding: 0 0 2rem;
            }
            .content .contact p {
              margin: 10px 0 0 0;
              line-height: 1.4rem;
            }
          }
        `}</style>
      </>
    );
  }
}

export default Home;
