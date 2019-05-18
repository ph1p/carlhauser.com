import Link from 'next/link';
import styled from 'styled-components';

const Header = styled.header`
  grid-area: header;
  border-bottom: 1px solid #000;
  justify-content: center;
  padding: 1.4rem 2rem;
  font-size: 1.9rem;
  background-color: #f3f3f3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  z-index: 2;
  a {
    color: #000;
    text-decoration: none;
  }
`;

export default function(props) {
  return (
    <Header>
      <Link href="/">
        <a>{props.title || 'Secret Thoughts'}</a>
      </Link>
    </Header>
  );
}
