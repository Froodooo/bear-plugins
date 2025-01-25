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
          image {
            url
          }
        }
      }
    }
  }
`;
  const response = await fetch(
    "https://api.hardcover.app/v1/graphql",
    {
      method: "POST",
      headers: { 
        "Authorization": `Bearer ${process.env.HARDCOVER_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: operationsDoc,
        operationName: "MyQuery"
      })
    }
  );

  const data = await response.json();
  const books = data.data.me[0].user_books;

  const result = books.map(book => {
    return {
      title: book.book.title,
      slug: book.book.slug,
      author: book.book.contributions.map(contribution => contribution.author.name).join(", "),
      image: book.book.image.url
    }
  });

  console.log(result);

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": process.env.CORS_ORIGIN },
    body: JSON.stringify(result)
  }
}