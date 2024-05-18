
import React from "react";
import Link from "next/link";
import ArticleItem from '@/components/articles/ArticleItem'
import { Article } from '@/utils/types';



const ArticlePage = async ()=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  if(!response.ok){
throw new Error("Failed to fetch articles")
  }

const articles: Article[] = await response.json();

return(
  <section className="container m-auto px-5">
    <div className="flex items-center justify-center flex-wrap gap-2">
      {articles.map(item=>(
        <ArticleItem article={item} key={item.id} />
      ))}
    </div>
  </section>
)

}

export default ArticlePage;
