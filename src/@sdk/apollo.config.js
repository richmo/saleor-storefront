module.exports = {
  client: {
    includes: ["./queries/*.ts", "./mutations/*.ts", "./fragments/*.ts"],
    service: {
      name: "footer-nav__section-header",
      url: "https://api.greenbustle.com/graphql/"
    }
  }
};
