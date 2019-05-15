import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Head from '../components/head';
import TwitterIcon from '../icons/twitter';
import InstagramIcon from '../icons/instagram';
import DribbbleIcon from '../icons/dribbble';

class Home extends React.Component {
  render() {
    const { setFilter, filter } = this.props;
    return (
      <>
        <aside>
          <nav className="filter-nav">
            <div
              className={filter === 'all' ? 'active' : ''}
              onClick={e => setFilter('all')}
            >
              all
            </div>
            <div
              className={filter === 'done' ? 'active' : ''}
              onClick={e => setFilter('done')}
            >
              done
            </div>
            <div
              className={filter === 'drafts' ? 'active' : ''}
              onClick={e => setFilter('drafts')}
            >
              drafts
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
            <div className="icon">
              <a target="_blank" href="https://dribbble.com/carlhauser">
                <DribbbleIcon />
              </a>
            </div>
            <div className="icon about">
              <Link href="/about">
                <a>
                  <div className="about-icon">
                    <img src="/static/profile.png" alt="" />
                  </div>
                </a>
              </Link>
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
            width: 25px;
            height: 25px;
            margin: 0 auto 25px;
          }

          aside .social .about-icon {
            border-radius: 100%;
            overflow: hidden;
          }
          aside .social .about-icon img {
            width: 100%;
            display: block;
          }

          .filter-nav {
            white-space: nowrap;
            transform: rotate(90deg);
            transform-origin: 11px 37px;
            width: 69px;
            font-size: 0.6em;
          }
          .filter-nav div {
            position: relative;
            padding-left: 2.4em;
            font-size: 1.8em;
            line-height: 1.7em;
            white-space: nowrap;
            display: inline-block;
            cursor: pointer;
            outline: none;
            margin-left: 1.8em;
          }
          .filter-nav div:hover {
            color: #000;
            text-decoration: underline;
          }
          .filter-nav div:hover::after {
            border-color: #000;
          }
          .filter-nav div::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 1.5em;
            height: 1.5em;
            border: 1px solid #000;
          }
          .filter-nav div:first-child {
            margin-left: 0;
          }
          .filter-nav div.active {
            color: #000;
            text-decoration: underline;
          }
          .filter-nav div.active::after {
            background-color: #000;
            border-color: #000;
          }

          @media (max-width: 700px) {
            aside {
              grid-column: 1;
              grid-template-columns: 1fr;
              grid-template-rows: none;
              border-width: 1px 0 0 0;
              border-color: #000;
              border-style: solid;
            }
            .filter-nav {
              display: none;
            }
            aside .social {
              text-align: right;
              align-self: center;
              display: flex;
              justify-content: space-around;
              flex-direction: row-reverse;
            }
            aside .social .icon {
              display: block;
              margin: 0;
              align-self: center;
            }
          }
        `}</style>
      </>
    );
  }
}

export default Home;
