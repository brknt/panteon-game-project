const sql = require('mssql')

// run a query against the global connection pool
function runQuery(query) {
  // sql.connect() will return the existing global pool if it exists or create a new one if it doesn't
  return sql.connect().then((pool) => {
    return pool.query(query)
  })
}