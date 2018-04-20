/**
 * PUERTO
 */

process.env.PORT = process.env.PORT || 3000;

/**
 * ENTORNO
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/**
 * Vencimiento del token
 * 60 segundos
 * 60 minutos
 * 24 horas
 * 30 dias
 */
process.env.CADUCIDAD_TOKEN = '48h';

/**
 * SEED de autenticación
 */

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


/**
 * BASE DE DATOS
 */

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

/**
 * GOOGLE Client ID
 */
process.env.CLIENT_ID = process.env.CLIENT_ID || '582325661485-ghce2itgr8uf5p66ii05hg4qcvipkv8p.apps.googleusercontent.com';