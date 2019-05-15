import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Head from '../components/head';
import Sidebar from '../components/sidebar';
import ListEntry from '../components/list-entry';
import TwitterIcon from '../icons/twitter';
import InstagramIcon from '../icons/instagram';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'all',
      contentHeight: 0
    };
  }

  updateContentHeight = () => {
    this.props.setClientHeight(document.documentElement.clientHeight);
  };

  componentDidMount() {
    this.updateContentHeight();
    window.addEventListener('load', this.updateContentHeight);
    window.addEventListener('resize', this.updateContentHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateContentHeight);
  }

  getEntries() {
    const { filter } = this.state;

    return this.props.entries.length
      ? this.props.entries.filter(
          e =>
            filter === 'all' ||
            (filter === 'done' && e.done) ||
            (filter === 'drafts' && !e.done)
        )
      : [];
  }

  setFilter = option => {
    this.setState(state => ({
      filter: state.filter === option ? 'all' : option
    }));
  };

  render() {
    const { filter, contentHeight } = this.state;
    const { clientHeight } = this.props;

    return (
      <>
        <main className={`main ${clientHeight > 0 ? 'loaded' : ''}`}>
          <header>
            <Link href="/">
              <a>Secret Thoughts</a>
            </Link>
          </header>
          <section className="content">
            {this.getEntries().map(e => (
              <ListEntry {...e} key={'entry-' + e.id} />
            ))}
          </section>
          <Sidebar setFilter={this.setFilter} filter={filter} />
        </main>

        <style jsx>{`
          main {
            display: grid;
            grid-template-areas:
              'header header header'
              'content content sidebar';
            grid-template-rows: 55px 1fr;
            grid-template-columns: 1fr;
            font-size: 1.4rem;
            min-height: 100%;
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
            grid-area: content;
            grid-column: 1;
            position: relative;
            z-index: 1;
            overflow-y: scroll;
            margin: 0 0 0;
            height: calc(${clientHeight}px - 55px);
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
          .content::-webkit-scrollbar {
            width: 5px;
            height: 0;
          }
          .content::-webkit-scrollbar-track {
            display: none;
          }
          .content::-webkit-scrollbar-thumb {
            background: #000;
          }

          .main {
            opacity: 0;
            transition: opacity 1s;
          }
          .main.loaded {
            opacity: 1;
          }

          @media (max-width: 700px) {
            main {
              grid-template-areas:
                'header'
                'content'
                'sidebar';
              grid-template-rows: 55px 1fr 55px;
              grid-template-columns: 1fr;
            }
            .content {
              height: calc(${clientHeight}px - 110px);
            }
            .content::-webkit-scrollbar {
              width: 0;
              height: 0;
            }
          }
        `}</style>
      </>
    );
  }
}

export default connect(
  state => ({
    entries: state.entries.data,
    clientHeight: state.settings.clientHeight
  }),
  dispatch => ({
    setClientHeight: data => dispatch({ type: 'SET_CLIENT_HEIGHT', data })
  })
)(Home);
