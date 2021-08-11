const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// Customize yargs version
yargs.version('1.1.0')

// add, remove, read, list

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (){
        notes.addNote(yargs.argv.title, yargs.argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (){
        notes.removeNote(yargs.argv.title)
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (){
        notes.readNotes(yargs.argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler (){
        notes.listNotes()
    }
})

console.log(yargs.argv)
