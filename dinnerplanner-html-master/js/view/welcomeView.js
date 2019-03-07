var WelcomeView = function (container) {
  this.welcome = container.find("#welcome");
  var welcomeHTML = '<div class="panel-body" id="body">' +
    '<div id="hometext">' +
      '<p>Lorem ipsum dolor sit amet, ius ea congue recusabo, mea habeo aperiam</p>' +
      '<p>feugait no, at soleat legendos vim. Bonorum percipit definitiones an duo.</p>' +
      '<p>Liber mediocritatem in quo, pro pertinacia ullamcorper ea, summo exerci nominavi id ius.</p>' +
      '<p> Ne pro choro efficiantur, eum ei dicta commodo quaestio.</p>' +
    '</div>'
  '</div>';
  this.welcome.html(welcomeHTML)
};
