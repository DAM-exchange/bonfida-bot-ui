import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    boxShadow: '12px 12px 0px 1px #2186ba',
    background: '#F0E9E7',
    border: '2px solid #2186ba',
    boxSizing: 'border-box',
    width: 'auto',
    height: 'auto',
    padding: 20,
    margin: 20,
  },
}));

const FloatingCard = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default FloatingCard;
