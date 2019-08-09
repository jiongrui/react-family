import devConfig from "./dev.env";
import prodConfig from "./prod.env";

let config = {};
console.log("process.env.BUILD_ENV", process.env.BUILD_ENV);
switch (process.env.BUILD_ENV) {
  case "prod":
    config = prodConfig;
    break;
  case "dev":
  default:
    config = devConfig;
    break;
}

export default config;
