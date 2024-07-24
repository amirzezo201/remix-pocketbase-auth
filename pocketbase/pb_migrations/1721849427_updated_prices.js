/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("up1usu15qirh528")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yc4upuoe",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aqryrt5x",
    "name": "fee",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "pet1g0h1okrtwqh",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ovmb2zkc",
    "name": "insurance",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "8mov3ilrw8ienw7",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("up1usu15qirh528")

  // remove
  collection.schema.removeField("yc4upuoe")

  // remove
  collection.schema.removeField("aqryrt5x")

  // remove
  collection.schema.removeField("ovmb2zkc")

  return dao.saveCollection(collection)
})
