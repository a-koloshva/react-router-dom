import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #000000;
  width: 100%;
  height: 100px;
  text-align: center;
  color: white;
`;

const BodyWrapper = styled.div`
  display: flex;
`;

const Navigation = styled.div`
  background-color: white;
  min-height: 400px;
  width: 30%;
  color: #282c34;
  font-size: 30px;
`;

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
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

const ContentWrapper = styled.div`
  background-color: #282c34;
  min-height: 400px;
  width: 70%;
  color: white;
  font-size: 30px;
`;

const FooterWrapper = styled.div`
  background-color: #000000;
  width: 100%;
  height: 120px;
  text-align: center;
  color: white;
`;

export const S = {
  HeaderWrapper,
  BodyWrapper,
  Navigation,
  NavWrapper,
  ContentWrapper,
  FooterWrapper,
};
