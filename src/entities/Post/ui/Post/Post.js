import './Post.css';
import { Button, P } from '../../../../shared';

import { useNavigate } from 'react-router-dom';

export const Post = ({ data }) => {
    const { id, title, body } = data;
    const navigate = useNavigate();
    return (
        <div className='post'>
            <div className='post-info'>
                <P className='post-item'>{`${id}, ${title}, ${body}`}</P>
            </div>
            <Button onClick={() => navigate(`/${id}`)} className={'post-button'}>
                Просмотр
            </Button>
        </div>
    );
};
