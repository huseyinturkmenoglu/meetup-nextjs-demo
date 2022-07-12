import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from "next/router";
// import { DUMMY_MEETUPS } from "../../assets/dummy";

const NewMeetUp = () => {
  const router = useRouter();

  async function addMeetupHandler(params) {
    
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    router.push('/');
  }
  
  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  )
}

export default NewMeetUp