import React from 'react';
import { Link } from 'react-router-dom';

function Card({ article }) {
    return (
        <div className="mdc-card">
            <div className="mdc-card__horizontal-block">

                <section className="mdc-card__primary">
                    <h2 className="mdc-card__title mdc-card__title--large">{article.title}</h2>
                    <p className="mdc-card__subtitle">{article.source}</p>
                    <div className="mdc-card__subtitle">{article.description}</div>
                </section>
            </div>

            <section className="mdc-card__actions">
                <Link to={`/news/${article.topic}/${article.slug}`} className="mdc-button mdc-card__action">Подробнее</Link>
            </section>
        </div>
    );
}

export default Card;