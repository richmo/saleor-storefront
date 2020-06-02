module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "saleor",
      url: "https://saleor-core-api.eba-ntd6wejq.us-west-2.elasticbeanstalk.com/graphql/",
    },
  },
};
