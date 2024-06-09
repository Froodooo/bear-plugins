import fetch from 'node-fetch'

export const handler = async () => {
    data = {message: "Hello World!"}
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        data
      })
    }
  }