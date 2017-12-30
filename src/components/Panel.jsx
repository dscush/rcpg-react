import React from 'react';

function Panel(props) {
  return (
    <div className="panel panel-default">
      {props.title ? (
        <div className="panel-heading">
          {props.title}
        </div>
      ) : (
        ''
      )}
      <div className="panel-body">
        {props.children}
      </div>
    </div>
  );
}

export default Panel;
