import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <div>
            <Head>
                <title>my first post</title>
            </Head>
            <h1>My first post from Nextjs!</h1>
            <div>
                <Link href = '/'><a>Home</a></Link>
            </div>
        </div>
    )
}
