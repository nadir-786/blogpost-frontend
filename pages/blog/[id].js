import Head from 'next/head';
import React from 'react'

function Blog({ data }) {
    return (
        <div>
            <Head>
                <title>{data?.title}</title>
            </Head>
           Blog Title {data?.title}
           <br />
           Blog Description {data?.description}
           <br />
           Blog Content <div dangerouslySetInnerHTML={{__html: data?.htmlContent}} ></div>
        </div>
    )
}

export default Blog

export async function getServerSideProps(context) {
    console.log("🚀 ~ file: [id].js:16 ~ getServerSideProps ~ context:", context)
    const query  = context?.query;
    // `query` is an object containing all the query parameters
    const id  = query?.id;

    const axios = require('axios');
    const res = await axios.get(`https://polyester-cloudy-purpose.glitch.me/blog/${id}`)
    const data = await res.data.data;

    // Your code to fetch data based on the query parameters goes here

    return {
        props: {
            // Your data goes here
            data
        },
    };
}