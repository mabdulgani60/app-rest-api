'use strict'

var response = require('./res');
var connection = require('./koneksi');

exports.index = (req,res) => {
    response.ok("Rest API Runing", res)
}

exports.getmahasiswa = (req,res) => {
    connection.query('SELECT * FROM mahasiswa', (error, rows, field) => {
        if (error){
            console.log(error)
        }else{
            response.ok(rows, res)
        }
    })
}

exports.getmahasiswabyid = (req,res) => {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id], 
        (error, rows, field) => {
            if (error){
                console.log(error)
            }else{
                response.ok(rows, res)
            }
        })
}

exports.postmahasiswa = (req,res) => {
    let nama = req.body.nama
    let nim = req.body.nim
    let jurusan = req.body.jurusan

    connection.query('INSERT INTO mahasiswa (nama, nim, jurusan) VALUES (?,?,?) ', [nama,nim,jurusan],
        (error, rows, field) => {
            if(error){
                console.log(error)
            }else{
                response.ok("Add Data Success",res)
            }
        })
}

exports.putmahasiswa = (req, res) => {
    let id = req.params.id
    let nama = req.body.nama
    let nim = req.body.nim
    let jurusan = req.body.jurusan

    connection.query('UPDATE mahasiswa SET nama=?, nim=?, jurusan=? WHERE id_mahasiswa=?', [nama,nim,jurusan,id],
        (error) => {
            if(error){
                console.log(error)
            }else{
                response.ok("Update Data Success", res)
            }
        })
}

exports.deletemahasiswa = (req, res) => {
    let id = req.params.id

    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?', [id],
        (error) => {
            if(error){
                console.log(error)
            }else{
                response.ok('Delete Data Success', res)
            }
        })
}