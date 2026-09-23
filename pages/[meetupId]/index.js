import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://www.melhoresdestinos.com.br/wp-content/uploads/2023/01/pelourinho-salvador-bahia-capa-2023.jpg"
      title="A First Meetup"
      address="Pelourinho - Salvador - BA"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/01/pelourinho-salvador-bahia-capa-2023.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Pelourinho - Salvador - BA",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
