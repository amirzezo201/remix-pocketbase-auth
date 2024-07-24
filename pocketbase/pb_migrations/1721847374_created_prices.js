/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "up1usu15qirh528",
    "created": "2024-07-24 18:56:14.018Z",
    "updated": "2024-07-24 18:56:14.018Z",
    "name": "prices",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mdtcz8cb",
        "name": "amount",
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
        "id": "11lo2hdw",
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
  const collection = dao.findCollectionByNameOrId("up1usu15qirh528");

  return dao.deleteCollection(collection);
})
