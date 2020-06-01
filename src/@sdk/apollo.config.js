module.exports = {
  client: {
    includes: ["./queries/*.ts", "./mutations/*.ts", "./fragments/*.ts"],
    service: {
      name: "saleor",
      url: "http://saleor-core-api.eba-ntd6wejq.us-west-2.elasticbeanstalk.com/graphql/"
    }
  }
};
