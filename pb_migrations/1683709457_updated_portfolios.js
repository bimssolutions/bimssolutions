migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("23yu7o15ahgeuva")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2gptawsg",
    "name": "slug",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("23yu7o15ahgeuva")

  // remove
  collection.schema.removeField("2gptawsg")

  return dao.saveCollection(collection)
})
