import React from 'react';
import { Article } from '@/utils/types';



interface SingleArticlePageProps{
    params: {id:string}
}


const SingleArticlePage = async ({params} : SingleArticlePageProps) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
 

    const article: Article = await response.json();

    return (
        <div className='fix-hight container m-auto w-full px-5 pt-8 md:w3/4'>
                  <div className='bg-white p-7 rounded-lg '>
                
                <h1 className='text-3xl font-bold text-gray-700 mb-2'>
                    {article.title}
                </h1>
                <div className='text-gray-400'>
                    1/1/2024
                </div>
<p className='text-gray-800 text-xl mt-5'>{article.body}</p>
                 
        </div>

        </div>
  
    );
}

export default  SingleArticlePage;
