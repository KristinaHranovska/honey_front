import CustomScrollWrapper from 'shared/components/CustomScrollWrapper/CustomScrollWrapper';
import s from './ReviewCard.module.scss';
import { icons as sprite } from 'shared/icons';

const ReviewCard = ({ data: { photo, name, review } }) => {
  return (
    <div className={s.card}>
      <div className={s.photoContainer}>
        <svg className={s.svgClassName}>
          <use
            xlinkHref={`${sprite}#polygon`}
            className={s.iconClassName}
          ></use>
        </svg>
        <img className={s.photo} src={photo} alt="photo" />
      </div>
      <div className={s.content}>
        <h3 className={s.name}>{name}</h3>
        <CustomScrollWrapper>
          <p className={s.review}>{review}</p>
        </CustomScrollWrapper>
      </div>
    </div>
  );
};

export default ReviewCard;
