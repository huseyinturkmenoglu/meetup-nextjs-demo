import { DUMMY_MEETUPS } from "../assets/dummy";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
