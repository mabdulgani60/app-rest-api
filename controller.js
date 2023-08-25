'use strict'

var response = require('./res');
var connection = require('./koneksi');

exports.index = (req,res) => {
    response.ok("Rest API Runing", res)
}

exports.getmahasiswa = (req,res) => {
    connection.query('SELECT * FROM mahasiswa', (error, rows, field) => {
        if (error){
            connection.log(error)
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
                connection.log(error)
            }else{
                response.ok(rows, res)
            }
        })
}