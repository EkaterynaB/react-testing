import React, { useEffect } from 'react';

export default ChildComponent => props => {
  useEffect(() => {
    if (!props.auth) {
      props.history.push('/');
    }
  }, [props.auth]);
  
  return <ChildComponent {...props} />;
}

