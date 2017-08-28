function takeANumber (line, person) {
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing (line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  else{

    let x = `Currently serving ${line[0]}.`
    line.shift(0)
    return x
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  }
  else{
    let arr = "The line is currently: "
    for (let i = 0;i<line.length;i++){
      arr = arr.concat(`${i+1}. ${line[i]}, `)
    }
    arr = arr.slice(0, -2)
    return arr
  }
}
