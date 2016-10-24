# Lorem-GraphQL

Simple GtraphQL API for *Lorem Ipsum Paragraph*. Whats inside?

 - simple GraphQL schema.
 - Rich API ;)
    - fetch paragraphs
    - sentences
    - words
    - letters

# How to start?

````
npm install
# or
yarn
````

````
npm start # and follow instructions
````

# Working example

**https://lorem-graphql.now.sh**

I ♥️ u [zeit.co](https://zeit.co)

# Examples

GraphQL Editor will help you build queries but here you can find few examples.

#### Fetch whole text

````
{
  lorem {
    value
  }
}
````

#### Fetch second sentence

````
{
  lorem {
    sentence(index: 1) {
      value
    }
  }
}
````

#### Fetch all letters in second word of first sentence

````
{
  lorem {
    sentence(index: 0) {
      word(index: 1) {
        letters {
          value
        }
      }
    }
  }
}
````

If you lost, *just try* :) GraphQL Editor provides autocompletion and syntaxt validation.

# What's next?

I don't know :) In near future I want to add few more complex examples like aync resolves. Maybe we can fetch words definitions from online dictionaries. Ideas?
