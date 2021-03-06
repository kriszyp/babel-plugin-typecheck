export default function demo (opt: ?Object): number|string {
  if (opt) {
    return identity(opt);
  }
  else if (Math.random() > 0.3) {
    return stringGen();
  }
  else {
    return numberGen();
  }
}

function stringGen () {
  return "test";
}

function numberGen () {
  return 123;
}

function identity (input) {
  return input;
}