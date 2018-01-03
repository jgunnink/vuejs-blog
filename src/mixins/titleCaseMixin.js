export default {
  filters: {
    titleCase: function(str) {
      return str
        .split(" ")
        .map(function(val) {
          return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase()
        })
        .join(" ")
    }
  }
}
