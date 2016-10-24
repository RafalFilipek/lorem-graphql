const fs = require('fs');
const path = require('path');
const Express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const Lorem = require('./models/Lorem');

const app = new Express();
const schema = buildSchema(fs.readFileSync(path.resolve(__dirname, './lorem.gql')).toString());
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu augue quis nulla congue finibus id sed turpis. Nunc vel diam eu est pulvinar ullamcorper. Vestibulum molestie id augue ut molestie. Pellentesque a nibh vehicula, tempus sem a, accumsan nibh. Suspendisse id nisi fringilla ante hendrerit congue ac nec sapien. Suspendisse et risus molestie, sollicitudin ipsum ut, facilisis quam. Nunc pulvinar, lorem sed elementum fermentum, felis orci hendrerit augue, quis congue purus libero a lorem. In facilisis eleifend elementum. Sed facilisis sagittis ligula sit amet mollis. Aenean quis scelerisque mi. Aliquam erat volutpat. Pellentesque pulvinar velit lectus, id fringilla elit commodo eget. Vivamus magna ipsum, luctus in nunc sed, lacinia convallis odio. Donec id imperdiet dui. Duis consectetur ullamcorper metus id commodo. Mauris rutrum sed nunc sit amet placerat.';


const rootValue = {
  lorem: new Lorem(lorem),
};

app.get('/', (req, res) => {
  res.redirect('/graphql');
});

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));

const port = process.env.APP_PORT || 3001;
app.listen(port, () => {
  console.log(`🚀  Lorem-GraphQL 🏃  @ port ${port} with 💖 . Open http://localhost:${port}/`) // eslint-disable-line
});
