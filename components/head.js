import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';
import styled from 'styled-components';

const defaultDescription =
  'This page shows thoughts and ideas I had during waiting, taking the tram and while I was working on stuff. When an idea is visualized, I will mark it as done and place a link to the specific instagram page.';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="theme-color" content="#f3f3f3" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <link rel="manifest" href="/static/manifest.json" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
    {props.styleTags}
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
