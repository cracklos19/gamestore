import * as React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Widget = () => {
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={0} color="warning" anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}>
        <ShoppingCartIcon color="success" />
      </Badge>
    </IconButton>
  );
};

export default Widget