
import oracledb from 'oracledb';

const dbConfig = {
  user: 'SYSTEM',
  password: 'oracle',
  connectString: '127.0.0.1:1521/XE'
};

export async function getConnection() {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    return connection;
  } catch (err) {
    console.error('Error connecting to the database:', err);
    throw err;
  }
}
