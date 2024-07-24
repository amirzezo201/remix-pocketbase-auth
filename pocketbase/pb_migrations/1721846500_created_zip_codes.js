/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "eg11gys23k270cd",
    "created": "2024-07-24 18:41:40.472Z",
    "updated": "2024-07-24 18:41:40.472Z",
    "name": "zip_codes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "irfbejvt",
        "name": "zip_code",
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
        "id": "68qrjbak",
        "name": "location_id",
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
  const collection = dao.findCollectionByNameOrId("eg11gys23k270cd");

  return dao.deleteCollection(collection);
})
