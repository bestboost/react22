import { useState, useEffect } from "react";
import axios from 'axios';
import NewsSearchForm from './NewsSearchForm';

axios.defaults.headers.common['Authorization'] =
  'Bearer 4330ebfabc654a6992c2aa792f3173a3';

  const fetchArticles = ({
     searchQuery = '',
     currentPage = 1,
     pageSize = 5,
  } = {}) => {
     return axios 
     .get(
          `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
          )
          .then(response => response.data.articles); 
     
  };

  export default function News() {
     const [articles, setArticles] = useState([]);
     const [query, setQuery] = useState('');
     const [currentPage, setCurrentPage] = useState(1);
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState(null);
      
          useEffect(() => {
               setIsLoading(true);

               fetchArticles({searchQuery: query, currentPage})
               .then(responseArticles => {
                    setArticles(prevArticles => [...prevArticles, ...responseArticles]);
                    setCurrentPage(prevCurrentPage => prevCurrentPage + 1); 
               })
               .catch(error => setError(error.message))
               .finally(setIsLoading(false))
          }, [query, currentPage]);
     

     const onChangeQuery = query => {
          setQuery(query)
          setCurrentPage(1)
          setArticles([])
          setError(null)
     }
    
     const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

     return(
          <>
          {error && <h1>Ой ошибка, всё пропало!!!</h1>}

          <NewsSearchForm onSubmit={onChangeQuery} />
             <ul>
               {articles.map(({title, url}) => (
                    <li key={title}>
                         <a href={url} target="_blank" rel="noopener noreferrer">
                              {title}
                         </a>
                    </li>
               ))}
             </ul>
             {shouldRenderLoadMoreButton && (
               <button type="button">
                    Загрузить ещё
               </button>
             )}
             {isLoading && (
        <p style={{ fontSize: 24, display: 'flex', alignItems: 'center' }}>
          Загружаем...
          <span
            aria-label="Иконка"
            role="img"
            style={{ fontSize: 32, marginLeft: 10 }}
          >
            🧙‍♂️
          </span>
        </p>
      )}
          </>
     );
  };