export default (req, res, next) => {
  res.hateos_item = (data) => {
    return {
      ...data._doc,
      _links: [
        { rel: "self", href: req.originalUrl, method: req.method },
        { rel: "list", href: req.baseUrl, method: "GET" },
        { rel: "update", href: `${req.baseUrl}/${req.params._id}`, method: "PUT" },
        { rel: "delete", href: `${req.baseUrl}/${req.params._id}`, method: "DELETE" },
      ],
    }
  }

  res.hateos_list = (name, data) => {
    return {
      [name]: data.map((item) => ({
        ...item._doc,
        _links: [
          { rel: "self", href: `${req.baseUrl}/${item._id}`, method: "GET" },
        ],
      })),
      _links: [
        { rel: "self", href: req.baseUrl, method: "GET" },
        { rel: "create", href: req.baseUrl, method: "POST" }
      ],
    }
  }

  next();
}
