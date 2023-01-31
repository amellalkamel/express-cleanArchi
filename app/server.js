console.log('node ------------>')
import express from 'express';

let app = express();
let PORT = 4040;

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  });
