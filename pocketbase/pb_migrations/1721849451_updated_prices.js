/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("up1usu15qirh528")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "owchxsrz",
    "name": "services",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "avo7gurz1cioqe0",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("up1usu15qirh528")

  // remove
  collection.schema.removeField("owchxsrz")

  return dao.saveCollection(collection)
})
