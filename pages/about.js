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
              My name is Sebastian, also know as carlhauser. I’m a Designer from
              Germany. What you see on this page are thoughts that I write down
              and eventually visualize, the order doesn't matter. When something
              is finished, it is crossed out here on the list and can be found
              on Instagram. Don’t forget design is work and not magic.
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
            width: 100%;
            height: 100%;
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
            overflow-y: scroll;
            margin: 0;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            background-color: #000;
            color: #fff;
            padding: 60px;
            grid-gap: 30px;
          }

          .content a {
            text-decoration: underline;
            color: #fff;
          }

          .content .text {
            grid-area: text;
            font-size: 4rem;
            line-height: 5rem;
          }
          .content .close {
            grid-area: close;
            text-align: right;
            text-decoration: underline;
          }
          .content .contact {
            grid-area: contact;
            font-size: 3rem;
            line-height: 4rem;
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
            font-size: 18rem;
            line-height: 15rem;
            text-align: right;
            align-self: end;
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

          @media (max-width: 1024px) {
            .content .title {
              font-size: 12rem;
              line-height: 8rem;
              text-align: right;
            }
          }

          @media (max-width: 700px) {
            .content {
              grid-template-areas:
                'close close close close'
                'title title title title'
                'text text text text'
                'contact contact contact contact';
              padding: 40px;
            }
            .content .close {
              font-size: 1.8rem;
              line-height: 2rem;
            }
            .content .title {
              font-size: 10rem;
              line-height: 8rem;
              text-align: left;
            }
            .content .text {
              font-size: 2.6rem;
              line-height: 4rem;
            }
            .content .contact {
              font-size: 2rem;
              line-height: 3rem;
              padding: 0 0 40px;
            }
          }
        `}</style>
      </>
    );
  }
}

export default Home;
