import axios from "axios";
import _ from "lodash";

interface user {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

axios
  .get<user[]>("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log("Getting a response");
    // console.log(res.data);
    // const { data } = res;
    // data;
    // printData(res.data);
    res.data.forEach(printData);
  })
  .catch((e) => {
    console.log("error", e);
  });

function printData(Data: user) {
  console.dir(Data.name);
  //   console.log(Data.address);
}
