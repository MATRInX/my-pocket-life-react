import React from 'react';
import { connect } from 'react-redux';
import selectMainPagePosts from '../selectors/mainPagePosts';
import selectPosts from '../selectors/posts';
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
  mainPosts: selectMainPagePosts(posts, filters),
  posts: selectPosts(posts, filters)
});

export default connect(mapStateToProps)(PostList);