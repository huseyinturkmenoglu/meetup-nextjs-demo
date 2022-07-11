import React from "react";
import { useRouter } from 'next/router';
import classes from './MeetupDetail.module.css';

const MeetupDetail = () => {
  const {query} = useRouter()

  return (
    <section className={classes.detail}>
      <img
        src={query.image}
        alt={query.title}
      />
      <h1>{query.title}</h1>
      <address>{query.address}</address>
      {query.description && <p>{query.description}</p>}
      {!query.description && <p>Description Coming Soon🙌</p>}
    </section>
  );
};

export default MeetupDetail;
