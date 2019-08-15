import React from "react";
import { useRouter } from "next/router";
import { getUrl } from "../../../utils/api";
import { FeedList } from "../../../components/feed-list";
import { setServer } from "../../../store";
import { connect } from 'react-redux';
import Head from "next/head";
import Nav from "../../../components/nav";

const Item = ({ server: items }) => {
  const router = useRouter();
  const { slug } = router.query;
  const item = items[0];

  return <div>
      <Head>
          <title>{slug}</title>
      </Head>
      <Nav />
      <p>Title: {item.title}</p>
      <p>Url: <a href={item.url}>{item.url}</a></p>
      <FeedList list={items} />
    </div>;
};

Item.getInitialProps = async ({ query, store, req }) => {
  const { slug } = query;
    const item = await getUrl(
      `/api/feed/${slug}`
    );
    store.dispatch(setServer([item]));
    return {};
  };

  function mapStateToProps(state) {
    const { client, server } = state;
    return { client, server };
  }

export default connect(mapStateToProps)(Item)
