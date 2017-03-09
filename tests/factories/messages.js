import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('message', {
  sequences: {
    messageMessage: function(num) {
      return 'Message ' + num;
    },
  },

  default: {
    message: FactoryGuy.generate('messageTitle'),
    useragent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36',
    pic: 'http://semantic-ui.com/images/avatar/small/helen.jpg',
    username: 'john.doe1',
    date: '2015-10-11T08:40:51.620Z'
  }
});
