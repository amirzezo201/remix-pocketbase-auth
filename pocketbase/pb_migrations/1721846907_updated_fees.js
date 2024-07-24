/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pet1g0h1okrtwqh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bv9w8rzo",
    "name": "location_id",
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
  const collection = dao.findCollectionByNameOrId("pet1g0h1okrtwqh")

  // remove
  collection.schema.removeField("bv9w8rzo")

  return dao.saveCollection(collection)
})
