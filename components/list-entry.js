import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Checkbox = styled.div`
  width: 28px;
  height: 28px;
  border: 1px solid
    ${props => (props.checked ? 'rgba(255, 255, 255, 0.3)' : '#999')};
  border-radius: 4px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    height: ${props => (props.checked ? 12 : 17)}px;
    width: 6px;
    top: ${props => (props.checked ? 4 : 2)}px;
    left: ${props => (props.checked ? 10 : 8)}px;
    transform: rotate(45deg);
    border-width: 0 1px ${props => (props.checked ? 1 : 0)}px 0;
    border-color: ${props => (props.checked ? '#fff' : '#999')};
    border-style: solid;
  }
`;

const Item = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 55px 1fr 200px;
  border-bottom: 1px solid #000;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  color: #000;
  text-decoration: none !important;

  .checkbox {
    margin: 3px 0 0 0;
  }
  &:last-child {
    border: 0;
  }
  a {
    text-decoration: none;
    color: #000;
  }

  &.link {
    cursor: pointer;
  }

  &.active {
    background-color: #000;
    border-color: rgba(255, 255, 255, 0.2);
    color: #fff;

    h3 {
      text-decoration: line-through;
    }
    a {
      color: #fff;
    }
    svg path {
      fill: #fff;
    }
  }

  .title {
    align-self: start;
    word-break: break-word;
    grid-column: 2;
    h3 {
      font-size: 3.8rem;
      line-height: 3.8rem;
      margin: 0;
    }
    p {
      font-size: 2.3rem;
      line-height: 3rem;
      color: #999;
      margin: 12px 0 0;
    }
  }
  .count {
    grid-row: 1 / span 2;
    grid-column: 3;
    align-self: center;
    justify-self: end;
    font-size: 15rem;
    line-height: 15rem;
    letter-spacing: 0rem;
    font-weight: 500;
    background: none;
    background-repeat: no-repeat;
    background-clip: text;
    -webkit-background-clip: text;
    background-size: cover;
    background-position: 0 400px;
  }
  &:hover .count.image {
    color: transparent;
    background-position: 0;
  }

  @media (max-width: 700px) {
    .count {
      grid-row: auto;
      grid-column: auto;
      font-size: 4rem;
      line-height: 3.4rem;
      grid-row: 1;
      grid-column: 2;
      justify-self: start;
      background-image: none !important;
    }
    .title {
      grid-row: 2;

      h3 {
        font-size: 2.3rem;
        line-height: 2rem;
      }
      p {
        font-size: 1.5rem;
        line-height: 2rem;
      }
    }
    .item {
      padding: 25px;
      font-size: 40%;
      grid-template-columns: 32px 1fr;
      grid-gap: 10px;
      grid-template-rows: auto;
      &:hover .count.image {
        color: inherit;
      }
      .link svg {
        top: 0;
      }
    }
  }
`;

const ListEntry = props => (
  <Item
    onClick={() => (props.link ? window.open(props.link, '_blank') : false)}
    className={`item ${props.done ? 'active' : ''} ${props.link ? 'link' : ''}`}
  >
    <div className="checkbox">
      <Checkbox checked={props.done} />
    </div>
    <div className="title">
      <h3>{props.title}</h3>
      {props.subtitle && <p>{props.subtitle}</p>}
    </div>
    <div
      className={`count ${props.image ? 'image' : ''}`}
      style={props.image && { backgroundImage: 'url(' + props.image + ')' }}
    >
      {props.id < 10 ? `0${props.id}` : props.id}
    </div>
  </Item>
);

export default ListEntry;
