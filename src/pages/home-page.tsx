import React from 'react';
import BoardContainer from '../containers/board.container';
import Style from '../styles/pages/home-page';

const HomePage: React.FC = () => {
  const classes = Style();

  return (
    <div className={classes.root}>
      <BoardContainer />
    </div>
  );
};

export default HomePage;
