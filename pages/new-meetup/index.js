import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from "next/router";
import { DUMMY_MEETUPS } from "../../assets/dummy";

const NewMeetUp = () => {
  const router = useRouter();

  function addMeetupHandler(params) {
    router.push({
      pathname: `/${params.id}`,
      query: { ...params},
    });
    DUMMY_MEETUPS.push(params);
  }
  
  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  )
}

export default NewMeetUp