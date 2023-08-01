import { Sequelize } from "sequelize";

const db = new Sequelize("be_warehouse_node", "root", "Jesara2022!!", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
