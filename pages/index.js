import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  // console.log(requests);
  // console.log(`https://api.themoviedb.org/3${requests.fetchTrending.url}`);
  console.log(results);
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Results */}
      <Results results={results} />

      {/* Footer */}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((result) => result.json());

  return {
    props: {
      results: request.results,
    },
  };
};
