import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

const CommentBox = (props) => {
  const [comment, setComment] = useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
    props.saveComment(comment);
    setComment('');
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Enter a Comment</h4>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={props.fetchComments}>Fetch Comments</button>
    </div>
  )
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, actions)(requireAuth(CommentBox));
