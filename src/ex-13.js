"use strict";
// DIN UPPGIFT: Du ska fetcha från Pokemon API:et och validera med hjälp av valideringsbiblioteket Zod. 
// Du ska ska skapa ett Zod-schema som validerar datan som kommer från API:et, där endast name, height och weight är datan som tas emot och valideras
// Den validerade datan  ska användas för att beräkna BMI för en Pokemon. BMI ska sedan loggas till konsolen för en Pokemon som du själv väljer.
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const UserSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
});
const apiResponse = {
    id: name,
    email: 
};
// 7h, validate the data, Now, you can validate the incoming data against your Zod schema:
try {
    const validatedData = UserSchema.parse(apiResponse);
    console.log("Validated data:", validatedData);
}
catch (error) {
    console.error("Validation error:", error);
}
