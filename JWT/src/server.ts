import { config } from "./Config/env";
import app from "./userApp";

app.listen(config.PORT, () => {
  console.log(`Server is running at Port:${config.PORT}`);
});
