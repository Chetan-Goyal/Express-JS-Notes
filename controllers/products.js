const products = require('./../data')

const getAllProducts = (req, res) => {
  const { title, limit } = req.query

  let result = [...products]

  if (title) {
    result = result.filter((product) => {
      return product.title.startsWith(title)
    })
  }

  if (limit) {
    result = result.slice(0, Number(limit))
  }

  if (result.length < 1)
    return res.json({ "success": true, data: [] })
  return res.json(result)

}

const getProductDetails = (req, res) => {
  const singleProduct = products.find((product) => product.id == Number(req.params['productID']))
  if (!singleProduct) {
    return res.json({})
  }
  res.json(singleProduct)
}

module.exports = { getAllProducts, getProductDetails }