import React from 'react';
import ColoredLine from './ColoredLine';

const MenuTitle = () => {
  return (
    <div className="container py-4 bg-white">
        <div className="row">
          <div className="col-12 text-center">
            <ColoredLine color="red" />
            <h1 className="display-2">Pizza Menu</h1>
            <ColoredLine color="red" />
          </div>
        </div>
      </div>
  )
}

export default MenuTitle;
