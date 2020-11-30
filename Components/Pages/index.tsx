import * as React from 'react';
import PagesList from './styled/PagesList';
import Page from './styled/Page';
import PagesWrapper from './styled/PagesWrapper';

export type PagesProps = {
  pagesNumber: number;
  setPage: (e: number) => void;
  currentPage: number;
};
const Pages = ({ pagesNumber, setPage, currentPage }: PagesProps) => {
  const pagesLi = [];

  for (let i = 1; i <= pagesNumber; i++) {
    const page = (
      <Page onClick={() => setPage(i)} key={i} isActive={currentPage === i}>
        {i}
      </Page>
    );

    pagesLi.push(page);
  }

  return (
    <PagesWrapper>
      <PagesList>{pagesLi}</PagesList>
    </PagesWrapper>
  );
};

export default Pages;
