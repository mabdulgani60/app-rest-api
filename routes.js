'use strict';

module.exports = (app) => {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/mahasiswa')
        .get(jsonku.getmahasiswa);

    app.route('/mahasiswa/:id')
        .get(jsonku.getmahasiswabyid);

    app.route('/mahasiswa')
        .post(jsonku.postmahasiswa);
}