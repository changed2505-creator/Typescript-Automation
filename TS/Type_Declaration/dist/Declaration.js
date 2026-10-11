import axios from "axios";
import _ from "lodash";
axios
    .get("https://jsonplaceholder.typicode.com/users")
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
function printData(Data) {
    console.dir(Data.name);
    //   console.log(Data.address);
}
