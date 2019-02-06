var katzDeliline = []; 

function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) { 
    return "There is nobody waiting to be served!"
  } else { 
    return`Currently serving ${katzDeliLine.shift()}.`
  }
}

currentLine(["Adam", "Rishi", "Oliver"])

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
     var string = "The line is currently:"
    for (let i = 0 ; i < katzDeliLine.length ; i++) { 
     string += ` ${i+1}. ${katzDeliLine[i]},` 
  } 
  string = string.slice(0, -1);
  return string 
  }
}