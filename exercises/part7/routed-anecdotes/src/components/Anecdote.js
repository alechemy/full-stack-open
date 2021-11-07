import React from 'react';

const Anecdote = ({ anecdote }) => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <blockquote
          style={{ fontStyle: 'italic', fontSize: '2rem', marginLeft: 0 }}
        >
          {anecdote.content}
        </blockquote>
        <p style={{ alignSelf: 'flex-end' }}> – {anecdote.author}</p>
      </div>

      <p>
        <span style={{ fontWeight: 'bold' }}>Source: </span>
        <a href={anecdote.info}>{anecdote.info}</a>
      </p>
      <p>
        <span style={{ fontWeight: 'bold' }}>Votes:</span> {anecdote.votes}
      </p>
    </div>
  );
};

export default Anecdote;
