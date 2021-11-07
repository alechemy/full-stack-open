import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import About from './components/About';
import Anecdote from './components/Anecdote';
import AnecdoteList from './components/AnecdoteList';
import CreateNew from './components/CreateNew';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Notification from './components/Notification';

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1',
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2',
    },
  ]);

  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification?.message) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const addNew = (anecdote) => {
    setNotification({
      message: `Added a new anecdote: "${anecdote.content}" – ${anecdote.author}`,
      type: 'success',
    });
    anecdote.id = (Math.random() * 10000).toFixed(0);
    setAnecdotes(anecdotes.concat(anecdote));
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const match = useRouteMatch('/anecdotes/:id');
  const anecdote = match
    ? anecdotes.find((anecdote) => anecdote.id === match.params.id)
    : null;

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  return (
    <>
      <div
        style={{
          width: '100vw',
          backgroundColor: 'whitesmoke',
          margin: 0,
          position: 'sticky',
          top: 0,
          height: '64px',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            style={{ color: 'black', textDecoration: 'none', margin: 0 }}
            to="/"
          >
            Software Anecdotes
          </Link>
        </h1>
        <Menu />
      </div>
      <Notification notification={notification} />
      <div
        style={{
          maxWidth: '80vw',
          margin: '0 auto',
          overflowY: 'auto',
          marginTop: '64px',
        }}
      >
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/create">
            <CreateNew addNew={addNew} />
          </Route>
          <Route path="/anecdotes/:id">
            <Anecdote anecdote={anecdote}></Anecdote>
          </Route>
          <Route path="/">
            <AnecdoteList anecdotes={anecdotes} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
