$(function () {
  var bounceInLeft = 'animated bounceInLeft';
  var bounceInRight = 'animated bounceInRight';
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  $('h2.header-title').addClass(bounceInLeft).one(animationEnd, function () {
    $(this).removeClass(bounceInLeft);
  });
  $('p.header-subtitle').addClass(bounceInRight).one(animationEnd, function () {
    $(this).removeClass(bounceInRight);
  });

});