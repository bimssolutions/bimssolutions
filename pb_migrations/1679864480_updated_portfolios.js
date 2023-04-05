migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("23yu7o15ahgeuva")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("23yu7o15ahgeuva")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
