import './Post.css';
import { Button, P } from '../../../../shared';

import { useNavigate } from 'react-router-dom';
import { memo, useCallback } from 'react';

export const Post = memo(({ data }) => {
    const { id, title, body } = data;
    const navigate = useNavigate();

    const goToPostDetailsPage = useCallback(
        (id) => () => {
            navigate(`/${id}`);
        },
        [navigate],
    );

    return (
        <div className='post'>
            <div className='post-info'>
                <P className='post-item'>{`${id}, ${title}, ${body}`}</P>
            </div>
            <Button onClick={goToPostDetailsPage(id)} className={'post-button'}>
                Просмотр
            </Button>
        </div>
    );
});
