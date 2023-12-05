import './BackButton.css';
import { Button } from '../../../shared';

export const BackButton = ({ className }) => {
    return (
        <Button className={className} onClick={() => window.history.back()}>
            Назад
        </Button>
    );
};
