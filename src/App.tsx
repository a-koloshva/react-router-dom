import React from 'react';
import { PageOne } from './components/pages/PageOne';
import { PageTwo } from './components/pages/PageTwo';
import { PageThree } from './components/pages/PageThree';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Error404 } from './components/pages/Error404';
import { NavLink } from 'react-router-dom';
import { S } from './components/pages/_styles';

const PATH = {
  PAGE1: '/page1',
  PAGE2: '/page2',
  PAGE3: '/page3',
  ERROR: '/page/error',
} as const;

function App() {
  return (
    <div>
      <S.HeaderWrapper>
        <h1>HEADER</h1>
      </S.HeaderWrapper>
      <S.BodyWrapper>
        <S.Navigation>
          Здесь будет навигация
          <S.NavWrapper>
            <NavLink to={PATH.PAGE1}>Page1</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PAGE2}>Page2</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={PATH.PAGE3}>Page3</NavLink>
          </S.NavWrapper>
        </S.Navigation>
        <S.ContentWrapper>
          <Routes>
            <Route path={'/'} element={<Navigate to={PATH.PAGE1} />} />
            <Route path={PATH.PAGE1} element={<PageOne />} />
            <Route path={PATH.PAGE2} element={<PageTwo />} />
            <Route path={PATH.PAGE3} element={<PageThree />} />

            {/* <Route path={PATH.ERROR} element={<Error404 />} />
            <Route path={'/*'} element={<Navigate to={PATH.ERROR} />} /> */}

            <Route path={'*'} element={<Error404 />}></Route>
          </Routes>
        </S.ContentWrapper>
      </S.BodyWrapper>
      <S.FooterWrapper>abibas 2023</S.FooterWrapper>
    </div>
  );
}

export default App;
