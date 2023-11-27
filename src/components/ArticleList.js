import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  // console.log ({posts})
  return (
    <main>
      {posts.map((articleItem) => {
        return (
          <main key={articleItem.id}>
            <Article title={articleItem.title} date={articleItem.date} preview={articleItem.preview}/>
          </main>
        );
      })}
    </main>
  );
}

export default ArticleList;