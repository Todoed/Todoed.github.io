var className, doc, elm;

className = 'scroll';

elm = $('nav');

doc = $(document);

doc.scroll(function() {
  return elm.toggleClass(className, doc.scrollTop() >= 20);
});

$(document).ready(function(){
        $('.logo').click(function(){
            $('body').animate({
                scrollTop: $('body').offset().top
                 }, 900);
        });
});

