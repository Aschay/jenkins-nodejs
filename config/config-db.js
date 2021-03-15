module.exports = {
    port: 3000,
    db: {
      production: "mongodb://user:pass@example.com:1234/nodedb",
      development: "mongodb://localhost/nodedb",
      test: "mongodb://localhost:27017/nodedb",
    },
    dbParams: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
};