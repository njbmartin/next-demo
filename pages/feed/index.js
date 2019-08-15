import React, { useEffect, useState } from "react";
import Head from 'next/head'

import { connect } from "react-redux";
import { setServer, setClient } from "../../store";
import { getUrl } from "../../utils/api";
import Nav from "../../components/nav";
import { FeedList } from "../../components/feed-list";

function Page({ client, dispatch, server }) {

  const fetchData = async () => {
    const client = await getUrl(
      "/api/feed"
    );
    dispatch(setClient(client));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const serverClickHandler = async () => {
    const item = await getUrl(
      "/api/feed/bar"
    );
    dispatch(setServer([item]));
  };

  const clientClickHandler = async () => {
    const item = await getUrl(
      "/api/feed/foo"
    );
    dispatch(setClient([item]));
  };

  return (
    <div>
      <Head>
        <title>{ client ? 'This is client rendered' : 'This is server rendered'}</title>
      </Head>

      <Nav />
      {server && (
        <div className="">
          <h1>Server side rendered</h1>
          <p>
            This is an example of part of the component being rendered on the
            server, fetching some metadata from the API.
          </p>
          <button onClick={clientClickHandler}>
            Click to update the client block
          </button>
          <FeedList list={server} />
        </div>
      )}
      {client && (
        <div>
          <h1>Client side rendered</h1>
          <p>
            You won't see this in the html source code as it's rendered on the
            client.
          </p>
          <FeedList list={client} />
          <button onClick={serverClickHandler}>
            Click to update the server block
          </button>
        </div>
      )}
    </div>
  );
}

Page.getInitialProps = async ({ store, req }) => {
  const server = await getUrl(
    "/api/feed"
  );
  store.dispatch(setServer(server));
  return {};
};

function mapStateToProps(state) {
  const { client, server } = state;
  return { client, server };
}

export default connect(mapStateToProps)(Page);
