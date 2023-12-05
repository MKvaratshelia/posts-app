import './P.css';
import classNames from 'classnames';

export const P = ({ children, className }) => {
    return <p className={classNames('p', className)}>{children}</p>;
};
