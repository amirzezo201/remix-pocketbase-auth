/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yahdfeuxdfqb5ju")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8i6yjwhm",
    "name": "discount_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "hbthe5i2exyw0dz",
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
  collection.schema.removeField("8i6yjwhm")

  return dao.saveCollection(collection)
})
