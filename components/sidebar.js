import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Head from '../components/head';
import TwitterIcon from '../icons/twitter';
import InstagramIcon from '../icons/instagram';

class Home extends React.Component {
  render() {
    const { setFilter, filter } = this.props;
    return (
      <>
        <aside>
          <nav className="filter-nav">
            <div
              className={filter === 'done' ? 'active' : ''}
              onClick={e => setFilter('done')}
            >
              done
            </div>
            <div
              className={filter === 'not-done' ? 'active' : ''}
              onClick={e => setFilter('not-done')}
            >
              in process
            </div>
          </nav>

          <div className="social">
            <div className="icon">
              <a target="_blank" href="https://twitter.com/carlhauser_">
                <TwitterIcon />
              </a>
            </div>
            <div className="icon">
              <a target="_blank" href="https://instagram.com/carlhauser">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </aside>

        <style jsx>{`
          main {
            display: grid;
            grid-template-areas:
              'header header header'
              'content content sidebar';
            grid-template-rows: 55px 1fr;
            grid-template-columns: 1fr 70px;
            height: 100vh;
            font-size: 1.4rem;
          }
          header {
            grid-area: header;
            border-bottom: 1px solid #000;
            justify-content: center;
            padding: 17px 20px;
          }
          aside {
            grid-area: sidebar;
            border-left: 1px solid #000;
            grid-column: 2;
            display: grid;
            grid-template-rows: 1fr 1fr;
            text-align: center;
          }
          aside .social {
            display: inline-block;
            align-self: end;
          }
          aside .social .icon {
            display: block;
            margin-bottom: 20px;
          }

          .filter-nav {
            white-space: nowrap;
            transform: rotate(90deg);
            transform-origin: 10px 35px;
            width: 69px;
          }
          .filter-nav div {
            position: relative;
            padding-left: 3.2rem;
            font-size: 1.8rem;
            line-height: 2rem;
            white-space: nowrap;
            display: inline-block;
            cursor: pointer;
            outline: none;
          }
          .filter-nav div:hover {
            color: #3b00ff;
          }
          .filter-nav div:hover::after {
            border-color: #3b00ff;
          }
          .filter-nav div::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 1.8rem;
            height: 1.8rem;
            border: 1px solid #000;
          }
          .filter-nav div:last-child {
            margin-left: 1.8rem;
          }
          .filter-nav div.active::after {
            background-color: #3b00ff;
            border-color: #3b00ff;
          }

          .content {
            grid-area: content;
            grid-column: 1;
            overflow: auto;
            margin: 0 0 0;
          }
          .content::-webkit-scrollbar {
            width: 5px;
          }
          .content::-webkit-scrollbar-track {
            display: none;
          }
          .content::-webkit-scrollbar-thumb {
            background: #000;
          }
          @media (max-width: 700px) {
            aside {
              grid-column: 1;
              grid-template-columns: 1fr 100px;
              grid-template-rows: none;
              border-width: 1px 0 0 0;
              border-color: #000;
              border-style: solid;
            }
            .filter-nav {
              transform: rotate(0);
              width: auto;
              align-self: center;
              text-align: left;
              margin: 0 0 0 25px;
            }
            aside .social {
              text-align: right;
              align-self: center;
            }
            aside .social .icon {
              display: inline-block;
              margin: 0 25px 0 0;
            }
          }
        `}</style>
      </>
    );
  }
}

export default Home;