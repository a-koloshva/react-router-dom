import styled from 'styled-components';

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  NavWrapper > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue; /* Цвет ссылки */
  }
`;

const ShoesBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 90%;
    margin: 0 20px;
  }
`;

const ShoeImg = styled.img`
  width: 50%;
  margin: 10px;
`;

export const S = {
  NavWrapper,
  ShoesBlock,
  ShoeImg,
};
