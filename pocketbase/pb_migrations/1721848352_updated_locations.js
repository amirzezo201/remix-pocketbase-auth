/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yahdfeuxdfqb5ju")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zrsw8xlc",
    "name": "fees",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "pet1g0h1okrtwqh",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yahdfeuxdfqb5ju")

  // remove
  collection.schema.removeField("zrsw8xlc")

  return dao.saveCollection(collection)
})
