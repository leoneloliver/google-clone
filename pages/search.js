import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";
import ImageResults from '../components/ImageResults';

export default function Search({ results }) {
    console.log(results);
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.term} - Search page</title>
            </Head>

            {/* Search Header */}
            <SearchHeader />

            {/* Search web and Images Results */}
            {router.query.searchType === "image" ? (
                <ImageResults results={results} />
            ) : (
                <SearchResults results={results} />
            )}
        </div>
    )

}

export async function getServerSideProps(context) {

    const data = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.GOOGLE_API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }`
    ).then((response) => response.json())
    return {
        props: {
            results: data
        }
    }
}