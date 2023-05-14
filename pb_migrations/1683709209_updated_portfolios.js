migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("23yu7o15ahgeuva")

  collection.name = "portfolio"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("23yu7o15ahgeuva")

  collection.name = "portfolios"

  return dao.saveCollection(collection)
})
