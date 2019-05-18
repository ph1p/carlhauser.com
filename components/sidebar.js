import React from 'react';
import Link from 'next/link';
import TwitterIcon from '../icons/twitter';
import InstagramIcon from '../icons/instagram';
import DribbbleIcon from '../icons/dribbble';
import styled from 'styled-components';

const Aside = styled.aside`
  grid-area: sidebar;
  border-left: 1px solid #000;
  grid-column: 2;
  display: grid;
  grid-template-rows: 1fr 1fr;
  text-align: center;
  background-color: #f3f3f3;

  @media (max-width: 700px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 55px;
    grid-column: 1;
    grid-template-columns: 1fr;
    grid-template-rows: none;
    border-width: 1px 0 0 0;
    border-color: #000;
    border-style: solid;
    z-index: 1;
  }
`;

const FilterNav = styled.nav`
  white-space: nowrap;
  transform: rotate(90deg);
  transform-origin: 11px 37px;
  width: 69px;
  font-size: 0.6em;
  div {
    position: relative;
    padding-left: 2.4em;
    font-size: 1.8em;
    line-height: 1.7em;
    white-space: nowrap;
    display: inline-block;
    cursor: pointer;
    outline: none;
    margin-left: 1.8em;
    &.active {
      color: #000;
      text-decoration: underline;
      &::after {
        background-color: #000;
        border-color: #000;
      }
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 1.5em;
      height: 1.5em;
      border: 1px solid #000;
    }
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      color: #000;
      text-decoration: underline;
      &::after {
        border-color: #000;
      }
    }
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
const Social = styled.div`
  display: inline-block;
  align-self: end;
  .icon {
    display: block;
    width: 25px;
    height: 25px;
    margin: 0 auto 25px;
  }
  .about-icon {
    border-radius: 100%;
    overflow: hidden;
    img {
      width: 100%;
      display: block;
    }
  }
  @media (max-width: 700px) {
    text-align: right;
    align-self: center;
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
    .icon {
      display: block;
      margin: 0;
      align-self: center;
    }
  }
`;

class Sidebar extends React.Component {
  render() {
    const { setFilter, filter } = this.props;
    return (
      <Aside>
        <FilterNav>
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
        </FilterNav>

        <Social>
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
        </Social>
      </Aside>
    );
  }
}

export default Sidebar;
