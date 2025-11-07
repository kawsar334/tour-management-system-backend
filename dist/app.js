import express from 'express';
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    console.log("asdjfksajdfk");
    res.status(200).json({
        message: "Welcome to Tour Management System Backend"
    });
});
export default app;
//# sourceMappingURL=app.js.map