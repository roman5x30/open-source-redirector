const fs = require('fs')
const archiver = require('archiver')

const input = './src'
const destination = './dist/'
const filename = 'output.zip'

const output = fs.createWriteStream(destination + filename)
const archive = archiver('zip')

output.on('close', () => {
    const bytes = archive.pointer()

    console.log(`Saved "${filename}" (Total ${bytes} bytes)`)
})

archive.on('error', err => {
    throw err
})

archive.directory(input, false)
archive.pipe(output)
archive.finalize()
