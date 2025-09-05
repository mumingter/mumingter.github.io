import { type SchemaTypeDefinition } from "sanity";
import service from "./service";
import category from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, category],
};
