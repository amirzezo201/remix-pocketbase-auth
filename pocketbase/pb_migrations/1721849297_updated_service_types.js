/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("avo7gurz1cioqe0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u8qhklbc",
    "name": "prices",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "up1usu15qirh528",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("avo7gurz1cioqe0")

  // remove
  collection.schema.removeField("u8qhklbc")

  return dao.saveCollection(collection)
})
