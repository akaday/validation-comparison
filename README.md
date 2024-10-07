# validation-comparison
It sounds like you want to create a comprehensive project that integrates multiple validation and schema libraries. This can be a great way to compare their features and performance. Here’s a step-by-step guide to help you get started:

1. **Initialize a new project:**
   ```bash
   mkdir validation-comparison
   cd validation-comparison
   npm init -y
   ```

2. **Install the libraries:**
   You can install all the libraries you mentioned at once:
   ```bash
   npm install ajv arktype bueno class-validator class-transformer computed-types decoders deepkit @effect/schema io-ts jointz json-decoder @mojotech/json-type-validation $mol_data @mondrian-framework/model myzod ok-computer purify-ts parse-dont-validate r-assign rescript-schema rulr runtypes @sapphire/shapeshift @sinclair/typebox simple-runtypes spectypes succulent superstruct suretype toi ts-interface-checker ts-json-validator ts-runtime-checks tson ts-utils typia @typeofweb/schema unknownutil valibot valita Vality yup zod
   ```

3. **Create a script to test each library:**
   Create a file named `index.js` (or `index.ts` if you prefer TypeScript) and start by importing the libraries:
   ```javascript
   // Example for JavaScript
   const Ajv = require('ajv');
   const arktype = require('arktype');
   const bueno = require('bueno');
   const { validate } = require('class-validator');
   const { plainToClass } = require('class-transformer');
   const { string, number, object } = require('computed-types');
   const { decode } = require('decoders');
   const { validate: deepkitValidate } = require('deepkit');
   const { schema } = require('@effect/schema');
   const t = require('io-ts');
   const jointz = require('jointz');
   const { decode: jsonDecode } = require('json-decoder');
   const { validate: mojotechValidate } = require('@mojotech/json-type-validation');
   const $mol_data = require('$mol_data');
   const { model } = require('@mondrian-framework/model');
   const myzod = require('myzod');
   const okComputer = require('ok-computer');
   const { Right, Left } = require('purify-ts');
   const { parse } = require('parse-dont-validate');
   const { assign } = require('r-assign');
   const { schema: rescriptSchema } = require('rescript-schema');
   const rulr = require('rulr');
   const { Record, String } = require('runtypes');
   const { shape } = require('@sapphire/shapeshift');
   const { Type } = require('@sinclair/typebox');
   const { runtype } = require('simple-runtypes');
   const { spec } = require('spectypes');
   const succulent = require('succulent');
   const { struct } = require('superstruct');
   const { suretype } = require('suretype');
   const { validate: toiValidate } = require('toi');
   const { createCheckers } = require('ts-interface-checker');
   const { validate: tsJsonValidate } = require('ts-json-validator');
   const { check } = require('ts-runtime-checks');
   const tson = require('tson');
   const { utils } = require('ts-utils');
   const typia = require('typia');
   const { schema: typeofwebSchema } = require('@typeofweb/schema');
   const unknownutil = require('unknownutil');
   const valibot = require('valibot');
   const valita = require('valita');
   const Vality = require('Vality');
   const yup = require('yup');
   const zod = require('zod');
   ```

4. **Create sample data and validation schemas:**
   Define some sample data and corresponding schemas for each library. Here’s an example for a simple user object:
   ```javascript
   const userData = {
     name: "John Doe",
     age: 30,
     email: "john.doe@example.com"
   };

   // Ajv example
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
   const zodSchema = zod.object({
     name: zod.string(),
     age: zod.number(),
     email: zod.string().email()
   });
   console.log("Zod:", zodSchema.safeParse(userData));
   ```

5. **Run your script:**
   Execute your script to see the validation results:
   ```bash
   node index.js
   ```

This setup will allow you to compare how each library handles validation and see which one best fits your needs. If you need more detailed examples or have specific requirements, feel free to ask! What's your next step for `webrenov` or any other project you're working on?
