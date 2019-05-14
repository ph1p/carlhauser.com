import React from 'react';
import Link from 'next/link';

const Checkbox = props => {
  return (
    <div>
      <style jsx>{`
        div {
          width: 28px;
          height: 28px;
          border: 1px solid
            ${props.checked ? 'rgba(255, 255, 255, 0.3)' : '#999'};
          border-radius: 4px;
          position: relative;
        }
        div::after {
          ${props.checked ? 'content: "";' : ''}
          position: absolute;
          height: 12px;
          width: 6px;
          top: 4px;
          left: 10px;
          transform: rotate(45deg);
          border-width: 0 1px 1px 0;
          border-color: #fff;
          border-style: solid;
        }
      `}</style>
    </div>
  );
};

const ListEntry = props => (
  <div
    onClick={() => (props.link ? window.open(props.link, '_blank') : false)}
    className={`item ${props.done ? 'active' : ''} ${props.link ? 'link' : ''}`}
  >
    <div className="checkbox">
      <Checkbox checked={props.done} />
    </div>
    <div className="title">
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </div>
    <div
      className={`count ${props.image ? 'image' : ''}`}
      style={props.image && { backgroundImage: 'url(' + props.image + ')' }}
    >
      {props.count < 10 ? `0${props.count}` : props.count}
    </div>

    <style jsx>{`
      .item {
        display: grid;
        position: relative;
        grid-template-columns: 55px 1fr 200px;
        border-bottom: 1px solid #000;
        position: relative;
        padding: 30px;
        box-sizing: border-box;
        color: #000;
        text-decoration: none !important;
      }
      .checkbox {
        margin: 3px 0 0 0;
      }
      .item:last-child {
        border: 0;
      }
      .item a {
        text-decoration: none;
        color: #000;
      }

      .item.link {
        cursor: pointer;
      }

      .item.active {
        background-color: #000;
        border-color: rgba(255, 255, 255, 0.2);
        color: #fff;
      }
      .item.active h3 {
        text-decoration: line-through;
      }
      .item.active a {
        color: #fff;
      }
      .item.active svg path {
        fill: #fff;
      }

      .title {
        align-self: start;
        word-break: break-word;
        grid-column: 2;
      }
      .title h3 {
        font-size: 3.8rem;
        line-height: 3.8rem;
        margin: 0;
      }
      .title p {
        font-size: 2.3rem;
        line-height: 3rem;
        color: #999;
        margin: 12px 0 0;
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
      .item:hover .count.image {
        color: transparent;
        background-position: 0;
      }

      @media (max-width: 700px) {
        .count {
          grid-row: auto;
          grid-column: auto;
          font-size: 6rem;
          line-height: 5rem;
          letter-spacing: -0.4rem;
          grid-row: 1;
          grid-column: 2;
          justify-self: start;
        }
        .title {
          grid-row: 2;
        }
        .item {
          font-size: 40%;
          grid-template-columns: 32px 1fr;
          grid-gap: 20px;
          grid-template-rows: auto;
        }
        .link svg {
          top: 0;
        }
      }
    `}</style>
  </div>
);

export default ListEntry;
