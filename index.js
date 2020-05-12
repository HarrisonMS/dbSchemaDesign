const server = require("./api/server");

const port = process.env.PORT || 5432;
server.listen(port, () => {
  console.log(`\n== API running on port ${port} ==\n`);
});

// server.listen(PORT, () => {
//   console.log(`\n== API running on port ${PORT} ==\n`);
// });
