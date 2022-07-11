// import { DUMMY_MEETUPS } from "../assets/dummy";

import MeetupDetail from "../../components/meetups/MeetupDetail"

const MeetupDetails = () => {
  return (
    <MeetupDetail />
  )
}

export function getStaticProps() {
  // fetch data for a single meetup
  return {
    props: {
      meetupData
    }
  }
}

export default MeetupDetails