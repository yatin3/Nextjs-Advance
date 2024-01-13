import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://th.bing.com/th/id/OIP.kBwvBKH-J2LZh0HImKaTAAHaE8?w=280&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://th.bing.com/th?id=OIP.uoPbBSz8YFLw52nzSzUwcgHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {

  return (
      <MeetupList meetups={props.meetups} />
  );
}

export async function getServerSideProps(context){
    const req = context.req;
    const res = context.res;
    // fetch data from an api
    return {
        props:{
            meetups: DUMMY_MEETUPS
        }
    }
}

// export async function getStaticProps(){
//   //fetch data from api
//   return {
//     props:{
//         meetups: DUMMY_MEETUPS
//     },
//     revalidate:10
//   };
// }

export default HomePage;
