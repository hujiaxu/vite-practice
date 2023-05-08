const start = () => {
  let count = 0;
  const obj = {
    val: count,
    name: "number"
  };
  setInterval(() => {
    obj.val = count++;
    postMessage(obj);
  }, 2000);
};

start();
