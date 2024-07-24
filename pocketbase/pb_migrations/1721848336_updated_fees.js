/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pet1g0h1okrtwqh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jhjq7jpt",
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
  const collection = dao.findCollectionByNameOrId("pet1g0h1okrtwqh")

  // remove
  collection.schema.removeField("jhjq7jpt")

  return dao.saveCollection(collection)
})
