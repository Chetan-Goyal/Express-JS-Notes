function authBarrier(req, res, next) {

  if (req.url === '/admin') {
    res.status(401).send('Unauthorised')
  } else {
    console.log(req.url)
    next();
  }
}

module.exports = authBarrier