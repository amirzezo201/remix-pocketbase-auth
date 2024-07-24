/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tboofubyv6v4iaw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "apza06hk",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8teg1lgu",
    "name": "container_type",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "5x5sq7a3jlo71tb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tboofubyv6v4iaw")

  // remove
  collection.schema.removeField("apza06hk")

  // remove
  collection.schema.removeField("8teg1lgu")

  return dao.saveCollection(collection)
})
