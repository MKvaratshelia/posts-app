import './Title.css';
import classNames from 'classnames';

export const Title = ({ tag, title, className }) => {
    switch (tag) {
        case 'h2':
            return <h2 className={classNames(className)}>{title}</h2>;
        case 'h3':
            return <h3 className={classNames(className)}>{title}</h3>;
        case 'h4':
            return <h4 className={classNames(className)}>{title}</h4>;
        case 'h5':
            return <h5 className={classNames(className)}>{title}</h5>;
        default:
            return <h1 className={classNames(className)}>{title}</h1>;
    }
};
