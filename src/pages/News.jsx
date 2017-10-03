import React from 'react';


import Card from '../components/Card';

function News({ match, data }) {
    const articles = match.params.topic ? data.filter(article => article.topic === match.params.topic) : data;
    return (
        <main id="news">
            <div className="mdc-layout-grid">
                <div className="mdc-layout-grid__inner">
                    {articles.map((article, index) =>
                        <div key={index} className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
                            <Card article={article} />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

export default News;