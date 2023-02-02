require("dotenv").config();
const express = require("express");
const initRoutes = require("./loaders/routes");
const prisma = require("./loaders/prisma");

const app = express();

// Initialize prisma client
prisma.initPrisma();

// Parse JSON body requests
app.use(express.json());

// Initialize routes
initRoutes(app);

// Fallback response
app.use("*", (req, res) => {
  res.status(200).json({
    success: false,
    message: "Server is up and running. Check your endpoint.",
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}.`));
