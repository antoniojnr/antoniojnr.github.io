var express = require('express')
var app = express()
/**
 * Ajuste o caminho para apontar para o diretório 'models'
 * Se o seu index.js está dentro de 'src' e este diretório está no mesmo
 * nível de 'models', então o caminho a ser usado aqui é '../models'
 */
var models = require('../models');
var http = require('http');
var port = 3000

/**
 * Se você estiver construindo um webservice, este comando permite que requisições para este
 * webservice venham de um domínio diferente daquele em que o webservice está executando.
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * Insira suas rotas aqui
 */

app.set('port', port);
// Cria o servidor HTTP.
var server = http.createServer(app);

/**
 * Sincroniza os modelos com o banco de dados, ou seja, se você adicionou novos modelos,
 * as tabelas correspondentes são criadas. Se a configuração com o banco de dados estiver
 * incorreta, esta etapa dará errado.
 */
models.sequelize.sync().then(function() {
  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port, function() {
    console.log('Express server listening on port ' + server.address().port);
  });
  server.on('error', onError);
  server.on('listening', onListening);
});

/**
 * Event listener para o evento "error" do servidor HTTP (ver linha 36).
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener para o evento "listening" do servidor HTTP (ver linha 37).
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}