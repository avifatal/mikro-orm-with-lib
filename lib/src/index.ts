import {MikroOrmModule} from "@mikro-orm/nestjs";

export function loadMikroOrm(entities: any){
    return MikroOrmModule.forRoot({
        entities: [entities],
        dbName: 'my-db-name.sqlite3',
        type: 'sqlite',
    })
}