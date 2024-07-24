/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "avo7gurz1cioqe0",
    "created": "2024-07-24 18:56:36.084Z",
    "updated": "2024-07-24 18:56:36.084Z",
    "name": "service_types",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "un0mqd5c",
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
  const collection = dao.findCollectionByNameOrId("avo7gurz1cioqe0");

  return dao.deleteCollection(collection);
})
