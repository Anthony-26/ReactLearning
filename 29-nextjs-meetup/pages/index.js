import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

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
  const uri = process.env.MONGODB_URI;

  const client = await MongoClient.connect(uri);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    /*  Tells NextJS the time waiting before the next refresh   */
    revalidate: 10,
  };
}

export default HomePage;
