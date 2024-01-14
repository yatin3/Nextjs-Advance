import MeetupDetail from "../../components/meetups/Meetupdetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail image={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} description={props.meetupData.description}/>
  );
}

export async function getServerSideProps(context){
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
     props: {
       meetupData: {
        image: "https://th.bing.com/th/id/OIP.kBwvBKH-J2LZh0HImKaTAAHaE8?w=280&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        id: meetupId,
        title: "A First Meetup",
        address: "Some Street 5, Some City",
        description: "The Meetup Description",
       }
     }
  }
}

export default MeetupDetails;

