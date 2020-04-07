const router = require("express").Router()
const auth = require("../middleware/auth")
const { check, validationResult } = require("express-validator")

const User = require("../models/User")
const Contact = require("../models/Contact")

// @route   GET api/contacts
// @desc    Get all user's contacts
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    })
    res.status(200).json(contacts)
  } catch ({ message }) {
    console.log(message)
    res.status(500).json({ msg: "Server Error" })
  }
})

// @route   GET api/contacts/:id
// @desc    Get a single user contact
// @access  Private
router.get("/:id", auth, async (req, res) => {
  try {
    //
  } catch ({ message }) {
    //
  }
})

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post(
  "/",
  [auth, [check("name", "Please add name").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty())
      return res
        .status(400)
        .json({ msg: "Please enter a name or a valid email" })

    const { name, email, phone, type } = req.body
    try {
      const foundContact = await Contact.findOne({ email })

      if (foundContact)
        return res.status(400).json({ msg: "This contact already exist" })

      const newContact = new Contact({
        user: req.user.id,
        name,
        email,
        phone,
        type,
      })
      const contact = await newContact.save()
      res.status(201).json(contact)
    } catch ({ message }) {
      console.log(message)
      res.status(500).json({ msg: "Server Error" })
    }
  }
)

// @route   PUT api/contacts/:id
// @desc    Update a single contact
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty())
    return res.status(400).json({ msg: "Please enter a name" })

  const { name, email, phone, type } = req.body
  // Build contact object
  const contactFields = {}
  if (name) contactFields.name = name
  if (email) contactFields.email = email
  if (phone) contactFields.phone = phone
  if (type) contactFields.type = type
  try {
    let contact = await Contact.findById(req.params.id)
    if (!contact) return res.status(404).json({ msg: "Unable to find contact" })

    // Make sure user owns contact

    if (contact.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not authorized" })

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    )

    res.status(201).json(contact)
  } catch ({ message }) {
    console.log(message)
    res.status(500).json({ msg: "Server Error" })
  }
})

// @route   DELETE api/contacts/:id
// @desc    Delete a single contact
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)

    if (contact.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not authorized" })

    await Contact.findByIdAndDelete(req.params.id)

    res.status(204).end()
  } catch ({ message }) {
    console.log(message)
    res.status(500).json({ msg: "Server Error" })
  }
})

module.exports = router
