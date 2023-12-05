import { memo } from 'react';
import './PostsList.css';

import { Post } from '../Post/Post';

export const PostsList = memo(({ data }) => {
    return (
        <>
            {data && (
                <div className='posts'>
                    {data.map((post) => (
                        <Post key={post.id} data={post} />
                    ))}
                </div>
            )}
        </>
    );
});
