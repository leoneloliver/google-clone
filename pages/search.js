import Head from 'next/head';
import SearchHeader from '../components/SearchHeader'

export default function search() {
    return (
        <div>
            <Head>
                <title>Search Page - Results</title>
            </Head>

            {/* search header */}
            <SearchHeader />

            {/* results */}

        </div>
    )

}