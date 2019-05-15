import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = props => (
  <>
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title || ''}</title>
      <meta
        name="description"
        content={props.description || defaultDescription}
      />
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,500,600"
        rel="stylesheet"
      />
      <link rel="icon" sizes="192x192" href="/static/icon-192.png" />
      <link rel="apple-touch-icon" href="/static/icons/icon-512.png" />
      <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
      <link rel="icon" href="/static/favicon.ico" />
      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={props.title || ''} />
      <meta
        property="og:description"
        content={props.description || defaultDescription}
      />
      <meta name="twitter:site" content={props.url || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={props.ogImage || defaultOGImage} />

      <meta property="og:image" content={props.ogImage || defaultOGImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </NextHead>
    <style jsx global>{`
      a {
        display: block;
      }
      * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      body,
      html {
        font-family: 'Poppins';
        margin: 0;
        font-size: 62.5%;
        font-weight: 400;
        background-color: #f3f3f3;
        height: 100%;
      }

    `}</style>
  </>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
