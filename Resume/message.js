var APP_ID = 'dnDEoGXEfMUTcllL5p6CNqTS-gzGzoHsz';
var APP_KEY = 'cU9h93IPnir5NyoQsLM9EW2A';

var { Query, User } = AV;

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var MessageBoard = AV.Object.extend('MessageBoard');
var messageBoard = new MessageBoard();
var objects = []
var query = new AV.Query('MessageBoard')

query.find().then(function (objects) {
  console.log(objects)
  let array = objects.map((item)=>item.attributes)
  array.forEach((item)=>{
    $('#history_message').append($("<li>" + item.name + ": " + item.content + "</li>"))
  })
}, function (error) {
}); 

$('#postmessage').on('submit',function(e){
  e.preventDefault()
  var name = $('#name').val()
  var content = $('#content').val()
  console.log('name ' + name)
  console.log('content ' + content)
  messageBoard.set('name',name)
  messageBoard.set('content',content)
  messageBoard.save().then(function (message) {
    console.log('objectId is ' + message.id)
    $('#history_message').append($("<li>" + message.attributes.name + ": " + message.attributes.content + "</li>"))
  }, function (error) {
    console.error(error);
  })
})
