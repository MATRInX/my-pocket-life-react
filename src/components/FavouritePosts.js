import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectFavouritePosts from '../selectors/favouritePosts';

export const FavouritePosts = ({ posts } = props) => {
  return (
    <div>
      <p>FavouritePosts content</p>
      <ul>
        {
          posts.map((post, index) => (
            <Link key={index} to={`/post${post.url.substr(post.url.lastIndexOf('/'))}`}>
              <h5>{post.title}</h5>
              <img src={post.image} />
            </Link>
          ))
        }
      </ul>
    </div>
  )
};

const mapStateToProps = ({ posts } = state) => ({
  posts: selectFavouritePosts(posts)
})

export default connect(mapStateToProps)(FavouritePosts);