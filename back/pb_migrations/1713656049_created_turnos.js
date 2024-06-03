/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "pvie2zlm288pq1z",
    "created": "2024-04-20 23:34:09.779Z",
    "updated": "2024-04-20 23:34:09.779Z",
    "name": "turnos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "50agsrb3",
        "name": "fecha",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "verbcksz",
        "name": "detalle",
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
  const collection = dao.findCollectionByNameOrId("pvie2zlm288pq1z");

  return dao.deleteCollection(collection);
})
