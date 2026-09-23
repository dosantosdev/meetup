import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/01/pelourinho-salvador-bahia-capa-2023.jpg",
    address: "Pelourinho - Salvador - BA",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpPoREkBrY2f4PmFBF5fu5IrT5kh8yNuCdMtMPqTnbQ&s=10",
    address: "Igreja em algum lugar",
    description: "This is a second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
