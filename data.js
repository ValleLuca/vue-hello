var app = new Vue({
    el: '#container',
    data: {
      messaggio: 'Sveglia le RTX costano troppo',
      immagine:'https://media0.giphy.com/media/sDcfxFDozb3bO/giphy.gif?cid=ecf05e47nqwlad28il572djz2t232b40pkgc5uuzs8u2qlaq&rid=giphy.gif&ct=g',
    },
    methods: {
        compra: function() {
            this.immagine = 'https://media0.giphy.com/media/3o6Zt3FIwTxfo7qhfW/giphy.gif?cid=ecf05e4758hwve1x4639wa08qj94u6waqmza9spesxduyzj3&rid=giphy.gif&ct=g';
        }
    }
  })