import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Head from '../components/head';
import Sidebar from '../components/sidebar';
import ListEntry from '../components/list-entry';
import TwitterIcon from '../icons/twitter';
import InstagramIcon from '../icons/instagram';

class Home extends React.Component {
  static async getInitialProps() {
    const { google } = require('googleapis');

    const jwt = new google.auth.JWT(
      process.env.GAPI_CLIENT_EMAIL,
      null,
      process.env.GAPI_PRIVATE_KEY.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/spreadsheets.readonly']
    );

    return new Promise((resolve, reject) => {
      jwt.authorize(async (err, response) => {
        const sheets = google.sheets('v4');

        const { data } = await sheets.spreadsheets.values.get({
          auth: jwt,
          range: 'To-do-Liste!A2:D100',
          spreadsheetId: process.env.SPREADSHEET_ID
        });

        if (data) {
          const entries = data.values
            .filter(entry => entry[2])
            .map(entry => {
              const [title, subtitle] = entry[2].split('\n');

              return {
                title,
                subtitle,
                done: entry[0] === 'TRUE',
                date: entry[1],
                link: entry[3],
                image: entry[4]
              };
            });

          resolve({ entries });
        }
      });
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      filter: 'all',
      contentHeight: 500
    };
  }

  updateContentHeight = () => {
    this.setState({
      contentHeight: document.documentElement.clientHeight
    });
  };

  componentDidMount() {
    this.updateContentHeight();

    window.addEventListener('resize', this.updateContentHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateContentHeight);
  }

  getEntries() {
    const { filter } = this.state;
    return this.props.entries.filter(
      e =>
        filter === 'all' ||
        (filter === 'done' && e.done) ||
        (filter === 'not-done' && !e.done)
    );
  }

  setFilter = option => {
    this.setState(state => ({
      filter: state.filter === option ? 'all' : option
    }));
  };

  render() {
    const { filter, contentHeight } = this.state;

    return (
      <>
        <Head />
        <main>
          <header>Secret thoughts</header>
          <section className="content">
            {this.getEntries().map((e, index) => (
              <ListEntry {...e} key={'entry-' + index} count={index + 1} />
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
            grid-template-columns: 1fr 70px;
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
            text-transform: uppercase;
          }

          .content {
            grid-area: content;
            grid-column: 1;
            position: relative;
            z-index: 1;
            overflow-y: scroll;
            margin: 0 0 0;
            height: ${contentHeight
              ? `calc(${contentHeight}px - 55px)`
              : 'calc(100vh - 55px)'};
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

          @media (max-width: 700px) {
            main {
              grid-template-areas:
                'header'
                'content'
                'sidebar';
              grid-template-rows: 55px 1fr 70px;
              grid-template-columns: 1fr;
            }
            .content {
              height: ${contentHeight
                ? `calc(${contentHeight}px - 125px)`
                : 'calc(100vh - 125px)'};
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

export default Home;
