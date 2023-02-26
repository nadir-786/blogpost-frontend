import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { Typography, Card } from 'antd';

export default function Home({ data = [] }) {
  return (
    <div>
      <Head>
        <title>{'All Blogs'}</title>
      </Head>
      <Typography.Title>All Blogs</Typography.Title>
      <div style={{ display: 'flex' }} >
        {
          (data || []).map((item, index) => {
            return (
              <Card key={index} style={{ margin: "4px", border: "2px solid black", width: 300 }} title={item?.title} bordered={false}>
                {item.description}
                <Link href={`/blog/${item?._id}`}>
                  <p>Open Blog</p>
                </Link>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {

  const axios = require('axios');
  const res = await axios.get('https://polyester-cloudy-purpose.glitch.me/blogs')
  const data = await res.data.data;
  // Pass data to the page via props
  return { props: { data } }
}