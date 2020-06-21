import React from 'react'
import Link from 'next/link';
import Head from 'next/head'


export default function FirstPost() {
    return (
        <div>
            <h1>My first post from Nextjs!</h1>
            <div>
                <Link href = '/'><a>Home</a></Link>
            </div>
        </div>
    )
}
