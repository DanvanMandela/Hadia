import algoliasearch from "algoliasearch"
const client = algoliasearch(process.env.REACT_APP_ALGOLIA_APPLICATION_ID, process.env.REACT_APP_ALGOLIA_ADMIN_API_KEY)

const algoliaHandler = async (req, res) => {
    const index = client.initIndex('products')
  
    const product = await index.saveObject({
      objectID: 'myId',
      name: 'Sneakers',
      price: 1000
    })
  
    res.send(product)
  }
  
  export default algoliaHandler