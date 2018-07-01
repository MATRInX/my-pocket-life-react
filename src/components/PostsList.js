import React from 'react';
import { connect } from 'react-redux';
import selectMainPagePosts from '../selectors/mainPagePosts';
import PostListItem from './PostListItem';

export const PostList = ({posts}) => (
  <div>
    {
      posts.length === 0 ? (
        <div>Brak postów do wyświetlenia</div>
      ) : (
        posts.map((singlePost, index) => (
          <PostListItem key={index} {...singlePost} />
        ))
      )
    }
  </div>
);

const mapStateToProps = ({ posts, filters} = state) => ({
  posts: selectMainPagePosts(posts, filters)
});

export default connect(mapStateToProps)(PostList);