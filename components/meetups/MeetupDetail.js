import React from "react";
import { useRouter } from 'next/router'
const MeetupDetail = () => {
  const {query} = useRouter()

  console.dir({query});
  return (
    <>
      <img
        src={query.image}
        alt={query.title}
      />
      <h1>{query.title}</h1>
      <address>{query.address}</address>
      {query.description && <p>{query.description}</p>}
      {!query.description && <p>Description Coming Soon🙌</p>}
    </>
  );
};

export default MeetupDetail;
