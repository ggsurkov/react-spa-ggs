import React from 'react';

function About() {
    return (
        <main id="about">
            <h1 className="mdc-typography--display1">О проекте</h1>
            <p className="mdc-typography--body1">Суть приложения: парсить сайты с новостями и сортировать загруженные статьи в отдельные рубрики. На данный момент реализована маршрутизация SPA.</p>
            <p className="mdc-typography--body1">Парсер в стадии разработки, поэтому контент заранее создан для наглядности</p>
        </main>
    );
}

export default About;