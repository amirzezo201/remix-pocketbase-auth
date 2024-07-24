/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8mov3ilrw8ienw7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hnt7zoxg",
    "name": "location",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yahdfeuxdfqb5ju",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8mov3ilrw8ienw7")

  // remove
  collection.schema.removeField("hnt7zoxg")

  return dao.saveCollection(collection)
})
