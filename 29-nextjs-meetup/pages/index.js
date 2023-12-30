import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg/1920px-Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg',
    address: 'Some address 5, 12345, City',
    description: 'First meetup',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg/1920px-Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg',
    address: 'Some address 5, 12345, City',
    description: 'Second meetup',
  },
  {
    id: 'm3',
    title: 'Third Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg/1920px-Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg',
    address: 'Some address 5, 12345, City',
    description: 'Third meetup',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

/*  Runs on the server after deployment     */
// export async function getServerSideProps(context) {
//   /*    Only runs on the server, not on the client side   */

//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  /*    Never end up on a client side      */
  /*    Executed during the build process  */

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    /*  Tells NextJS the time waiting before the next refresh   */
    revalidate: 10,
  };
}

export default HomePage;
