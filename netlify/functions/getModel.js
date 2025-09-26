    import db from './database.json';

    export async function handler(event) {
      const serial = event.queryStringParameters.serial;

      if (!serial) {
        return { 
          statusCode: 400, 
          body: JSON.stringify({ error: 'Serial number is required' }) 
        };
      }

      const modelData = db[serial.toUpperCase()];

      if (modelData) {
        return {
          statusCode: 200,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(modelData),
        };
      } else {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: 'Invalid serial number' }),
        };
      }
    }
    
