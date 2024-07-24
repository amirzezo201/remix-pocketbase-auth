/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yahdfeuxdfqb5ju")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gk7udy3t",
    "name": "zip_codes",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "eg11gys23k270cd",
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
  collection.schema.removeField("gk7udy3t")

  return dao.saveCollection(collection)
})
