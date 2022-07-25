class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() +  string.slice(1);
  };

  static sanitize(string) {
    const regex = /[^A-Za-z0-9 '-]/g;
    return string.replace(regex, '')
  };

  static titleize(string) {
    const array = string.split(" ");
    let result = []

    result.push(this.capitalize(array[0]))

    array.slice(1).forEach(word => {
      if (word != "the" && word != "a" && word != "an" && word != "but" && word != "of" && word != "and" && word != "for" && word != "at" && word != "by" && word != "from") {
        result.push(this.capitalize(word)) 
      } else {
        result.push(word)
      }
    }); 

    return result.join(" ")
  }
}