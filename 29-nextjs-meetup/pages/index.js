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

function HomePage() {
  return (
      <MeetupList meetups={DUMMY_MEETUPS} />
  );
}

export default HomePage;
