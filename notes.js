const fs = require('fs')
const chalk =  require('chalk')


// Add a note
const addNote = (title, body) => {
	const notes = loadNotes()

	const duplicateNotes = notes.find((note) => {
		return note.title === title
	})

	if (!duplicateNotes) {
		notes.push({
			title: title,
			body: body
		})
		saveNote(notes)
		console.log(chalk.green.inverse.bold('Note added'))
	} else {
		console.log(chalk.red.inverse.bold('Title already exists!!'))
	}
}

const saveNote = (notes) => {
	const notesJSON = JSON.stringify(notes)

	fs.writeFileSync('notes.json', notesJSON);
}

const loadNotes = () => {
	try {
		let readBuffer = fs.readFileSync('notes.json');
		let readJSON = readBuffer.toString()
		return JSON.parse(readJSON)
	} catch(e) {
		return []
	}
}

// Remove a note
const removeNote = (title) => {
	const notes = loadNotes()
	const duplicateNotes = notes.filter((note) => {
		return note.title !== title 
	})
	if (notes.length > duplicateNotes.length) {
		saveNote(duplicateNotes)
		console.log(chalk.green.inverse("Note removed"))
	} else {
		console.log(chalk.red.inverse("Note not removed"))
	}
}

// List the notes
const listNotes = () => {
	const notes = loadNotes()
	if (notes.length !== 0) {
		notes.forEach((note) => {
			console.log(chalk.bgWhite.blue.bold(note.title) + " : " + chalk.magenta.bold(note.body) + "\n")
		})
	} else {
		console.log(chalk.red.inverse("No notes added!!"))
	}
}

// read a note
const readNote = (title) => {
	const notes = loadNotes()
	const findNote = notes.find((note) => {
		return note.title === title
	})

	if (findNote) {
		console.log(chalk.bgWhite.blue.bold(findNote.title) + " : " + chalk.magenta(findNote.body))
	} else {
		console.log(chalk.red("Title not found"))
	}
}

module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote
}