import { saveComment} from 'actions/index';
import { SAVE_COMMENT} from 'actions/types';

describe('saveComment', () => {
  
  it('has correct type', () => {
    const action = saveComment();
    
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  
  it('has correct payload', () => {
    const action = saveComment('New Comment');
  
    expect(action.payload).toEqual('New Comment');
  });
  
});
