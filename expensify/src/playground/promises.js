const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("This promise is Resolved!"), 1500);
  // setTimeout(() => reject("This promise is Rejected!"), 1500);
});

promise
  .then((d) => console.log("Resolved: ", d))
  .catch((r) => console.log("Rejected: ", r))
  .finally(() => console.log("Finally"));
