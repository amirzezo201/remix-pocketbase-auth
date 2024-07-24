/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tboofubyv6v4iaw",
    "created": "2024-07-24 18:09:12.085Z",
    "updated": "2024-07-24 18:09:12.085Z",
    "name": "containers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hjjcb6cj",
        "name": "numbers",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "vkepwryw",
        "name": "occupied",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tboofubyv6v4iaw");

  return dao.deleteCollection(collection);
})
