const { Sequelize } =  require('sequelize');

//criando a conexão com o banco de dados que iremos criar
const sequelize = new Sequelize('nodemvc','root','',{
    host: 'localhost',
    port: '3307',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Conectado com sucesso!')
} catch (error){
    console.log(`Não foi possível conectar. ${error}`)
}

module.exports = sequelize;