import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const dbConnection = await openDB('jate', 1)
  const transaction = dbConnection.transaction('jate', 'readwrite')
  const objStore = transaction.objectStore('jate')
  const request = objStore.put({id:1,content})

  const result = await request;
  console.log("Store in database", result)

}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async ()=>{
  const dbConnection = await openDB('jate', 1)
  const transaction = dbConnection.transaction('jate', 'readonly')
  const objStore = transaction.objectStore('jate')
  const request = objStore.getAll()

  const result = await request;

  console.log("result.content", result)
  return result.content

}

initdb();
