import React, {useState} from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { bost } = props;
  
  // This is the state for the likes, if you pass the state correctly, the heart button should increase the likes
  
    const [likes, setLikes] = useState(bost.likes);
    
 // Function to increase the number of likes
  
  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <div className='post-border'>
      <PostHeader
        username={bost.username}
        thumbnailUrl={bost.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={bost.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection incrementLikes={incrementLikes} numberOfLikes={likes} />

      {/* Comments also wants its props! */}
      <Comments />
    </div>
  );
};

export default Post;
