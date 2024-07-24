/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eg11gys23k270cd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rt2tjlug",
    "name": "locations",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yahdfeuxdfqb5ju",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eg11gys23k270cd")

  // remove
  collection.schema.removeField("rt2tjlug")

  return dao.saveCollection(collection)
})
