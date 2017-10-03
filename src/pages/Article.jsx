import React from 'react';

function Article( {match, data} ) {
    const article = data.find(article => article.slug === match.params.article);

    return (
        <main id="article">
            <div className="mdc-card">
                <div className="mdc-card__horizontal-block">

                    <section className="mdc-card__primary">
                        <h1 className="mdc-card__title mdc-card__title--large">{article.title}</h1>
                        
                        <p className="mdc-card__subtitle">{article.source}</p>

                        <div className="mdc-typography--body1">{article.description}</div>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Article;