import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

const CommentBox = (props) => {
  const [comment, setComment] = useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
    props.saveComment(comment);
    setComment('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h4>Enter a Comment</h4>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  )
};

export default connect(null, actions)(CommentBox);
