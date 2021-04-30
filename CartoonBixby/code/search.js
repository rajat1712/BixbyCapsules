var http = require("http")
var console = require("console")

module.exports.function = function search (keyword, category, author) {

  var url = "http://perfectcartoon.com/site/search"
  var options = {}
  var ret = []

  if (typeof(keyword) != "underfined") {
    options["keyword"] = keyword
  }
  if (typeof(category) != "underfined") {
    options["category"] = category
  }
  if (typeof(author) != "underfined") {
    options["author"] = author
  }
  try {
    res = http.getUrl(url, {query: options})
    ret = JSON.parse(res)
  } catch (err) {
    console.log("ERROR: " + err)
  }
  return ret
}
