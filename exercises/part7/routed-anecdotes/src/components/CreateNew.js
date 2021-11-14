import React from 'react';
import { useHistory } from 'react-router-dom';
import { useField } from '../hooks';

const CreateNew = (props) => {
  const { clear: clearContent, ...content } = useField('content', 'text');
  const { clear: clearAuthor, ...author } = useField('author', 'text');
  const { clear: clearInfo, ...info } = useField('info', 'text');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });
    history.push('/');
  };

  const reset = () => {
    clearContent();
    clearAuthor();
    clearInfo();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button>create</button>
        <button type="button" onClick={reset}>
          reset
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
