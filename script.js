var topic = "Git";

if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}

// now what if thousands of condition? using else 1000x is inefficient.
// It is time to use array like "for" and "loop"

var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
for(var x =0; x<topics.length; x++) {
    console.log(topics[x]);
}