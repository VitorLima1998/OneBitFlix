import { ResourceOptions } from "adminjs";
// criação das opções de recurso
export const categoryResourceOptions: ResourceOptions = {
  navigation: "Catálogo",
  editProperties: ["name", "position"],
  filterProperties: ["name", "position", "createAt", "updateAt"],
  listProperties: ["id", "name", "position"],
  showProperties: ["id", "name", "position", "createAt", "updateAt"],
};
