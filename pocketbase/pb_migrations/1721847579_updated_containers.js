/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tboofubyv6v4iaw")

  // remove
  collection.schema.removeField("j3lmylfq")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tboofubyv6v4iaw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j3lmylfq",
    "name": "container_type_id",
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
})
