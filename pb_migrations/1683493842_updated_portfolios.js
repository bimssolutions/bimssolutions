migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("23yu7o15ahgeuva")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "halttjat",
    "name": "categories",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("23yu7o15ahgeuva")

  // remove
  collection.schema.removeField("halttjat")

  return dao.saveCollection(collection)
})
