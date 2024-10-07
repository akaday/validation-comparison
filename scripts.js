// Sample user data
const userData = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com"
};

// Ajv example
const Ajv = require('ajv');
const ajv = new Ajv();
const ajvSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    age: { type: "number" },
    email: { type: "string", format: "email" }
  },
  required: ["name", "age", "email"]
};
const ajvValidate = ajv.compile(ajvSchema);
console.log("Ajv:", ajvValidate(userData));

// Zod example
const zod = require('zod');
const zodSchema = zod.object({
  name: zod.string(),
  age: zod.number(),
  email: zod.string().email()
});
console.log("Zod:", zodSchema.safeParse(userData));
