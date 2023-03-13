import { Offer } from '../../types/offer';

type CardProps = {
  offer: Offer;
}

function Card({ offer }: CardProps): JSX.Element {
  const { isPremium, price, rating, title, type } = offer;

  return (
    <article className="cities__card place-card">
      {isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>) : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place"></img>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating * 20)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{title}</a>
        </h2>
        <p className="place-card__type" style={{ textTransform: 'capitalize' }}>{type}</p>
      </div>
    </article >
  );
}

export default Card;
