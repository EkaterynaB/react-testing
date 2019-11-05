import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
  const renderComponents = () => {
    return props.comments.map((item, index) => <li key={index}>{item}</li>)
  };
  
  return (
    <div>
      <ul>
        {renderComponents()}
      </ul>
    </div>
  )
};

export default connect(
  (state) => ({comments: state.comments })
)(CommentList);
