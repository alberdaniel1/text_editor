const express = require('express');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
require('./routes/htmlRoutes')(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});



app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
