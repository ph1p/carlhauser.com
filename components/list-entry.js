import React from 'react';

const ListEntry = props => (
  <>
    <div className="item">
      <div className="link">
        {props.link ? (
          <a target="_blank" href={props.link}>
            open on instagram
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.643 6.14499H8.27L5.935 8.94499C5.83191 9.07692 5.78425 9.24381 5.80212 9.41028C5.82 9.57675 5.902 9.72972 6.03075 9.83675C6.1595 9.94379 6.32488 9.99647 6.49181 9.98363C6.65875 9.9708 6.81413 9.89345 6.925 9.76799L10.141 5.90899C10.1628 5.87717 10.1822 5.84374 10.199 5.80899C10.199 5.77699 10.231 5.75799 10.244 5.72499C10.304 5.57649 10.304 5.4105 10.244 5.26199C10.244 5.22999 10.212 5.21099 10.199 5.17799C10.1822 5.14325 10.1628 5.10982 10.141 5.07799L6.926 1.23199C6.87292 1.16406 6.80674 1.10748 6.73138 1.06561C6.65603 1.02373 6.57303 0.997412 6.48731 0.988208C6.4016 0.979004 6.31491 0.987104 6.23238 1.01203C6.14985 1.03695 6.07316 1.07819 6.00687 1.1333C5.94058 1.18841 5.88602 1.25627 5.84644 1.33286C5.80686 1.40945 5.78306 1.4932 5.77645 1.57915C5.76984 1.66511 5.78056 1.75152 5.80797 1.83326C5.83537 1.91499 5.87891 1.9904 5.936 2.05499L8.271 4.85499H0.643C0.472466 4.85499 0.308916 4.92274 0.18833 5.04332C0.0677443 5.16391 0 5.32746 0 5.49799C0 5.66853 0.0677443 5.83208 0.18833 5.95266C0.308916 6.07325 0.472466 6.14099 0.643 6.14099V6.14499Z"
                fill="black"
              />
            </svg>
          </a>
        ) : (
          ''
        )}
      </div>
      <div className="title">{props.title}</div>
      <div className="count">
        {props.count < 10 ? `0${props.count}` : props.count}
      </div>
    </div>
    <style jsx>{`
      .item {
        display: grid;
        grid-template-columns: 1fr 200px;
        grid-template-rows: 1fr 1fr;
        border-bottom: 1px solid #000;
        position: relative;
        padding: 20px 30px;
        will-change: transform;
        transition: background-color 0.4s ease-out, color 0.4s ease-out,
          box-shadow 0.3s;
        box-sizing: border-box;
      }
      .item::after {
        ${props.done ? 'content: "";' : ''}
        position: absolute;
        left: 0;
        top: 0;
        width: 10px;
        height: 100%;
        background-color: #3b00ff;
      }
      .item:last-child {
        border: 0;
      }
      .item a {
        text-decoration: none;
        color: #000;
      }
      .item:hover {
        background-color: #000;
        color: #fff;
        box-shadow: 0 0 143px rgba(0, 0, 0, 0.5);
      }
      .item:hover a {
        color: #fff;
      }
      .item:hover svg path {
        fill: #fff;
      }
      .link {
        text-transform: uppercase;
        font-size: 1.6rem;
        line-height: 1.6rem;
      }
      .link svg {
        position: relative;
        top: -0.2rem;
        left: 0.5rem;
        width: 1.1rem;
      }
      .title {
        font-size: 3.8rem;
        line-height: 4.3rem;
        align-self: end;
      }
      .count {
        grid-row: 1 / span 2;
        grid-column: 2;
        align-self: center;
        justify-self: end;
        font-size: 15rem;
        line-height: 12rem;
        letter-spacing: -0.7rem;
        font-weight: 500;
      }
      @media (max-width: 700px) {
        .link svg {
          top: 0;
        }
      }
    `}</style>
  </>
);

export default ListEntry;
