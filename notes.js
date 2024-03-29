const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => {
    return "... Your notes"
}

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    }else{
        console.log(chalk.red.inverse("Note title taken"))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const filteredNotes = notes.filter((note) => note.title !== title)
    saveNotes(filteredNotes)

    if (filteredNotes.length === notes.length){
        console.log(chalk.red.inverse('No Match Found!'))
    }else{
        console.log(chalk.green.inverse('Note removed successfully'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse("Your Notes:"))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNotes = (title) => {
    const notes = loadNotes()
    const wantedNote = notes.find((note) => note.title === title)
    if(wantedNote){
        console.log(chalk.blue.inverse(wantedNote.title))
        console.log(wantedNote.body)
    }else{
        console.log(chalk.red.inverse('Can not find the desired note'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNotes
}
