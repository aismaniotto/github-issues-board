import React from 'react';
import BasePage from '../components/base-page';
import BoardContainer from '../containers/board.container';
import NavBarContainer from '../containers/nav-bar.container';
import Style from '../styles/pages/home-page';

const HomePage: React.FC = () => {
  const classes = Style();

  return (
    <BasePage>
      <div className={classes.root}>
        <NavBarContainer />
        <BoardContainer />
      </div>
    </BasePage>
  );
};

export default HomePage;
