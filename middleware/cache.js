var cache = require('express-redis-cache')({
host: 'localhost', port: 6379
});

module.exports = cache