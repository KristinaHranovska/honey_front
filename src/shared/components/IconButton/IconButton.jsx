import clsx from 'clsx';
import { icons as sprite } from 'shared/icons';
import s from './IconButton.module.scss';

const IconButton = ({
  id,
  iconWidth,
  iconHeight,
  btnClassName,
  iconClassName,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={clsx(s.button, btnClassName && btnClassName)}
      onClick={onClick}
      {...rest}
    >
      <svg
        width={iconWidth}
        height={iconHeight}
        className={clsx(s.icon, iconClassName && iconClassName)}
      >
        <use xlinkHref={`${sprite}#${id}`}></use>
      </svg>
    </button>
  );
};

export default IconButton;
