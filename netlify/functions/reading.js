import fetch from 'node-fetch'

export const handler = async () => {
  const operationsDoc = `
  query MyQuery {
    me {
      user_books(where: {user_book_status: {status: {_eq: "Currently Reading"}}}) {
        book {
          title
          slug
          contributions {
            author {
              name
            }
          }
        }
        book_id
      }
    }
  }
`;
  const response = await fetch(
    "https://api.hardcover.app/v1/graphql",
    {
      method: "POST",
      headers: { "authorization": `Bearer ${process.env.HARDCOVER_TOKEN}` },
      body: JSON.stringify({
        query: operationsDoc,
        variables: {},
        operationName: "MyQuery"
      })
    }
  );

  const data = await response.json();
  const books = data.data.me[0].user_books;
  const book = books[Math.floor(Math.random()*books.length)].book;

  const result = {
    title: book.title,
    slug: book.slug,
    author: book.contributions.map(c => c.author.name).join(", ")
}

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": process.env.CORS_ORIGIN },
    body: JSON.stringify(result)
  }
}