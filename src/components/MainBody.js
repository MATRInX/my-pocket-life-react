import React from 'react';
import { connect } from 'react-redux';
import selectMainPagePosts from '../selectors/mainPagePosts';

export const MainBody = ({ posts } = props) => (
  <div>
    <p>Posts list</p>
    {
      posts.length === 0 ? (
        <div>Brak postów do wyświetlenia</div>
      ) : (
        posts.map((singlePost, singleIndex) => (
          <ul key={singleIndex}>
            <li>{singlePost.postId}</li>
            <li>{singlePost.published}</li>
            <li>{singlePost.url}</li>
            <li>{singlePost.title}</li>
            <li>{singlePost.content}</li>
          </ul>
        ))
      )     
    }
  </div>
);

const mapStateToProps = ({ posts, filters} = state) => ({
  posts: selectMainPagePosts(posts, filters)
});

export default connect(mapStateToProps)(MainBody);