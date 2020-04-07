const express = require("express")
const connectDB = require("./config/db")
const authRouter = require("./routes/auth")
const usersRouter = require("./routes/users")
const contactsRouter = require("./routes/contacts")

const app = express()

// Connect Database
connectDB()

// Routes middlewares
app.use(express.json({ extended: false }))
app.use("/api/auth", authRouter)
app.use("/api/users", usersRouter)
app.use("/api/contacts", contactsRouter)

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the ContactKeeper API..." })
)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

module.exports = app
