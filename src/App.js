import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';
import * as actions from 'actions';

function App(props) {
  const renderButton = () => {
    if (props.auth) {
      return <button onClick={() => props.changeAuth(false)}>Sign Out</button>;
    }
    
    return <button onClick={() => props.changeAuth(true)}>Sign In</button>;
  };
  
  const renderHeader = () => (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post a Comment</Link>
      </li>
      <li>
        {renderButton()}
      </li>
    </ul>
  );
  
  return (
    <div>
      {renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route path="/" exact component={CommentList} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, actions)(App);
