import React from 'react';

function Panel(props) {
  return (
    <div className="panel panel-default">
      {props.title ? (
        <div className="panel-heading">
          <h2>{props.title}</h2>
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
