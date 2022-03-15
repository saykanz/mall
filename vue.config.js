module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'src':'@',
        'components':'@/components',
        'network':'@/network',
        'assets':'@/assets',
        'views':'@/views',
      }
    }
  }
}