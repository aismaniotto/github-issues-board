import Chip from '@material-ui/core/Chip';
import React from 'react';
import Style from '../styles/components/tag';

interface Props {
  label: string;
  color: string
}

const Tag: React.FC<Props> = (props: Props) => {
  const classes = Style();
  const { label, color } = props;
  const color2 = `#${color}`;

  return <Chip size="small" label={label} style={{ backgroundColor: color2 }} className={classes.root} />;
};
export default Tag;
