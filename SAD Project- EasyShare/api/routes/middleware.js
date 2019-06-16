const jwt = require('jsonwebtoken');
process.env.SECRET_KEY = 'secret'

const withAuth = function(req, res, next) {
  const token =
      req.body.token ||
      req.query.token ||
      req.headers['x-access-token'] ||
      req.cookies.token;

  if (!token) {
    res.status(401).send('Unauthorized: Please Sign in');
  } else {
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Please sign in');
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
}

module.exports = withAuth;