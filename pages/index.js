// import { useEffect, useState } from "react";
import { DUMMY_MEETUPS } from "../assets/dummy";
import MeetupList from "../components/meetups/MeetupList";

// Way One
/* const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}; */

// Way Two
/* const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
} */

// Way Three
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 1, // In seconds
  }
}

/* export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  console.dir({context});
  // Fetch data from an API

  
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
  }
} */
export default HomePage;
