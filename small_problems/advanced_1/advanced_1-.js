function madlibs(template) {
  const WORDS = {
    ADJECTIVE: ["green", "slimy", "stinky", "smooth", "hairy", "orange"],
    NOUN: ["saloon", "barber", "wall", "McDonalds", "school", "christmas tree"],
    VERB: ["ran", "slinked", "scratched", "farted", "hit", "hung"],
    ADVERB: [
      "slowly",
      "painfully",
      "gloriously",
      "sleepily",
      "exhilaratingly",
      "happily",
    ],
  };
  let libs = template.match(/ADJECTIVE|NOUN|VERB|ADVERB/g);

  for (let i = 0; i < libs.length; i++) {
    let randNum = Math.floor(Math.random() * 6);
    template = template.replace(new RegExp(libs[i]), WORDS[libs[i]][randNum]);
  }

  console.log(template);
}

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

let template1 =
  "The ADJECTIVE cat VERB ADVERB down the NOUN, unitl it reached the ADJECTIVE NOUN.";
let template2 =
  "Some ADJECTIVE sailors VERB ADVERB, but others VERB ADVERB at the NOUN.";

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2); // The "fox" "bites" the "dog"'s "tail".

madlibs(template2); // The "cat" "pats" the "cat"'s "head".
