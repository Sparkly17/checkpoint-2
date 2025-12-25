import './index.css';
import './stylesheets/common.scss'
import './stylesheets/fonts.scss'
import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Chapter from "./Chapter.jsx";
import About from "./About.jsx";
import Styleguide from "./Styleguide.jsx";
import Main from "./Main.jsx";
import Article from "./Article.jsx";
import Template from "./Template.jsx";
import Checklist_Article from "./Checklist_Article.jsx";
import Collection from "./Collection.jsx";
import Chapter2 from "./Chapter2.jsx";



document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));

const routes = {
    '/': { label: 'Main', element: <Main /> },
    '/chapter': { label: 'Chapter', element: <Chapter /> },
    '/chapter-2': { label: 'Chapter 2', element: <Chapter2 /> },
    '/about': { label: 'About', element: <About /> },
    '/styleguide': { label: 'Styleguide', element: <Styleguide /> },
    '/article': { label: 'Article', element: <Article /> },
    '/template': { label: 'Template', element: <Template /> },
    '/checklist': { label: 'Checklist', element: <Checklist_Article /> },
    '/collection': { label: 'Collection', element: <Collection /> }
};

const getHashPath = () => {
    const hash = window.location.hash || '#/';
    const rawPath = hash.startsWith('#') ? hash.slice(1) : hash;
    return rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
};

const Router = () => {
    const [path, setPath] = useState(getHashPath());

    useEffect(() => {
        if (!window.location.hash) {
            window.location.hash = '/';
        }
    }, []);

    useEffect(() => {
        const handler = (e) => {
            const a = e.target.closest("a");
            if (!a) return;

            const href = a.getAttribute("href");
            if (!href) return;

            if (href.startsWith('#/')) {
                return;
            }

            if (href.startsWith("/")) {
                e.preventDefault();
                window.location.hash = href;
                return;
            }
        };

        const onHashChange = () => {
            setPath(getHashPath());
        };

        document.addEventListener("click", handler);
        window.addEventListener("hashchange", onHashChange);
        return () => {
            document.removeEventListener("click", handler);
            window.removeEventListener("hashchange", onHashChange);
        };
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [path]);

    const current = routes[path]?.element ?? routes["/"].element;
    return <>{current}</>;
};

root.render(<Router />);
