import express from "express";
import cors from "cors";
import { adminJs, AdminJsRouter } from "./adminjs";
import { sequelize } from "./database";
import { router } from "./routes";

const app = express();

app.use(cors());

app.use(express.static("public")); //propriedade static identifica que tudo que estiver na pasta que foi passada como parâmetro será servida como arquivo estático na aplicação

app.use(express.json());

app.use(adminJs.options.rootPath, AdminJsRouter);

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("DB connection successfully!");
  });
  console.log(`Server started successfully at port ${PORT}`);
});
