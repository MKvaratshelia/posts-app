import './BackButton.css';
import { Button } from '../../../shared';
import { useNavigate } from 'react-router-dom';
export const BackButton = ({ className }) => {
    const navigate = useNavigate();
    return (
        <Button className={className} onClick={() => navigate(-1)}>
            Назад
        </Button>
    );
};
