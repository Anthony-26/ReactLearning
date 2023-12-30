import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg/1920px-Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg"
      title="First meetup"
      address="Some address"
      description="Description"
    />
  );
}

export function getStaticPaths() {
  return {
    /*  False -> defining all supported paths here, not pregenerated  */
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm1',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg/1920px-Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg',
        id: 'm1',
        title: 'First meetup',
        address: 'Some address',
        description: 'Description',
      },
    },
  };
}

export default MeetupDetails;