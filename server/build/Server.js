import express from "express";
const app = express();
app.get("/ads", (request, response) => {
    return response.json([
        {
            id: 1,
            name: "test1",
        },
        {
            id: 2,
            name: "test2",
        },
        {
            id: 3,
            name: "test3",
        },
    ]);
});
app.listen(3333);
