import React from 'react'
import Link from 'next/link';

export const FeedList = ({ list }) => {
    if (!list) return null;

    return (
      <div className="feed-items">
        {
          list.map((item, key) => (
      <div key={key}>
        <h2>{item.title}</h2>
        <p><a href={`/feed/${item.slug}`}>View</a></p>
        </div> ))
        }
      </div>
    )
  };
