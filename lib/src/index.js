"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMikroOrm = void 0;
const nestjs_1 = require("@mikro-orm/nestjs");
function loadMikroOrm(entities) {
    nestjs_1.MikroOrmModule.forRoot({
        entities: [entities],
        dbName: 'my-db-name.sqlite3',
        type: 'sqlite',
    });
}
exports.loadMikroOrm = loadMikroOrm;
