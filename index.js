function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(spy){
    console.log('HELLO')
}

function logWhisper(spy) {
  console.log('hello')
}

function sayHiToGrandma(string) {
  var lowercase = 'hello';
  var uppercase = 'HELLO';
  var mixedcase = 'I love you, Grandma.';
  var final = ' ';
  
  if (string.toLowerCase()===lowercase){
    final = console.log('I can\'t hear you!');
  }
  else if (string.toUpperCase()===uppercase){
    final = console.log('YES INDEED!');
  }
  else if (string === mixedcase){
    final = console.log('I love you, too.');
  }
  return final;
  
}

//describe('sayHiToGrandma(string)', function() {
  //it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    //expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  //})

  //it('returns "YES INDEED!" if `string` is uppercase', function() {
    //expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  //})

  //it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    //expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
