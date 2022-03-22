import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const joke = await response.json();

  return {
    props: {
      joke: joke.value,
    },
  };
};

type RandomPageProps = {
  joke: string;
};

const Random: React.FC<RandomPageProps> = ({ joke }) => {
  return <div>{joke}</div>;
};

export default Random;
