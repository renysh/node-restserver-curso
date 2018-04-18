/**
 * PUERTO
 */

process.env.PORT = process.env.PORT || 3000;

/**
 * ENTORNO
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


/**
 * BASE DE DATOS
 */

let urlDB;

/*if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {*/
urlDB = 'mongodb://renysh:renysh@ds249269.mlab.com:49269/cafe_renyhs';
//}

process.env.URLDB = urlDB;