import './Button.css';
import classNames from 'classnames';

export const Button = ({ click, className, children, ...props }) => {
    return (
        <button className={classNames('button', className)} onClick={click} {...props}>
            {children}
        </button>
    );
};
