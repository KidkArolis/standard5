module.exports = function foo () {
  var a = 1
  const foo = 5
  a.bar(function () {})
  a.catch(function () {})

  var person = {
    firstName: 'James',
    lastName: 'Brown',
    get name () {
      return this.firstName + ' ' + this.lastName
    },
    set fullName (name) {
      var parts = name.split(' ')
      this.firstName = parts[0]
      this.lastName = parts[1]
    }
  }

  return a + person
}
