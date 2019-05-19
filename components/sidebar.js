import React from 'react';
import Link from 'next/link';
import { media } from '../utils/styles';
import TwitterIcon from '../icons/twitter';
import InstagramIcon from '../icons/instagram';
import DribbbleIcon from '../icons/dribbble';
import styled from 'styled-components';

const Aside = styled.aside`
  border-left: 1px solid #000;
  grid-column: 2;
  display: grid;
  grid-template-rows: 1fr 1fr;
  text-align: center;
  background-color: #f3f3f3;
  position: ${props => (props.scrollDown ? 'fixed' : 'absolute')};
  padding: 55px 0 0 0;
  width: 70px;
  bottom: 0;
  right: 0;
  top: 0;
  height: 100%;

  ${media.phone`
    position: fixed;
    top: inherit;
    bottom: 0;
    width: 100%;
    height: 55px;
    padding: 0;
    grid-column: 1;
    grid-template-columns: 1fr;
    grid-template-rows: none;
    border-width: 1px 0 0 0;
    border-color: #000;
    border-style: solid;
    z-index: 1;
  `}

  /*@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 2),
  @media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3),*/
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    padding: 0 0 25px;
    height: 85px;
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
  ${media.phone`
    display: none;
  `}
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
  ${media.phone`
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
  `}
`;

class Sidebar extends React.Component {
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
    const { setFilter, filter } = this.props;
    return (
      <Aside scrollDown={this.state.y > 0}>
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
