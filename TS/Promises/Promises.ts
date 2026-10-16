function fetchData(): Promise<String> {
  return new Promise((res, rej) => {
    let ran = Math.floor(Math.random() * 10 + 1);
    if (ran < 5) {
      rej(`Not recieved!!!!`);
    }
    setTimeout(() => {
      res(`Data Fetched!!`);
    }, 2000);
  });
}

// fetchData()
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));

async function getData() {
  try {
    const Data = await fetchData();
    console.log(Data);
  } catch (err) {
    console.log(err);
  }
}
getData();
