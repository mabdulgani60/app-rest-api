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