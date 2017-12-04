export function checkIt(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value && value[0] === '@') {
        resolve();
        return;
      }

      reject(new Error('Value should start with `@`'));
    }, 2000);
  });
}

export function submitIt(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(data);
        return;
      }

      reject(new Error('BANG! Try again later'));
    }, 2000);
  });
}
