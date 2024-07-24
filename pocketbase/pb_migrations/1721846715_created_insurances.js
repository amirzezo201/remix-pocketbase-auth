/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8mov3ilrw8ienw7",
    "created": "2024-07-24 18:45:15.987Z",
    "updated": "2024-07-24 18:45:15.987Z",
    "name": "insurances",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vrns50kb",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tfv8vkji",
        "name": "description",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
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
  const collection = dao.findCollectionByNameOrId("8mov3ilrw8ienw7");

  return dao.deleteCollection(collection);
})
