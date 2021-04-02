const showSomeLog = (a) => console.log(a + " Show some logs");

// showSomeLog("Hey");

const user = {
  uname: "Mkumar",
  age: 30,
  favItems: ["React", "Angular", "Bootstrap"],
  active() {
    // console.log(this.uname);

    this.favItems.forEach((fav) => {
      console.log(this.uname + " " + fav);
    });
  },
};

user.active();

const add = function (a, b) {};
