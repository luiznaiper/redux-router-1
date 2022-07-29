import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => {
  return (
    <section className="error">
      <section className="error__container">
        <h2 className="error__container--title">404</h2>
        <p>Page not found</p>
        <Link className="error-link" to="/">
          Go Home
        </Link>
      </section>
    </section>
  );
};

export default NotFound;
