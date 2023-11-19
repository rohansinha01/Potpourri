const words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: "",
}

const startMadlib = () => {
  words.number = prompt('Give me a number')
  words.adjective = prompt('Give me an adjective')
  words.pluralNoun = prompt('Give me a pluraled Noun')
  words.adverb = prompt('Give me an adverb')
  words.anotherAdjective = prompt('Give me another adjective')
  alert(`Once upon a time a group of ${words.number} General Assembly graduates got together and made a startup called ${words.adjective} Technologies.
  Their goal was to create smart ${words.pluralNoun}. They approached the challenge ${words.adverb} which ultimately lead them to ${words.anotherAdjective} fame.`)
} 
startMadlib()
