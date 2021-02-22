$(document).ready(function(){
  //SLIDER
  $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,
      pager: false
    });

  //ir a inicio
  $('.subir').click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    return false;
  })

  //POSTS
  var posts = [
    {
      title: 'Prueba de titulo 1',
      date: moment().format('LLLL'),
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis rerum qui sed! Perspiciatis ipsam deserunt doloribus! Consectetur maiores magni iusto aliquid consequuntur, quidem deserunt adipisci asperiores incidunt ullam ab mollitia architecto error distinctio nesciunt nobis repudiandae illum accusantium nemo provident.'
    }, 
    {
      title: 'Prueba de titulo 2',
      date: moment().format('LLLL'),
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis rerum qui sed! Perspiciatis ipsam deserunt doloribus! Consectetur maiores magni iusto aliquid consequuntur, quidem deserunt adipisci asperiores incidunt ullam ab mollitia architecto error distinctio nesciunt nobis repudiandae illum accusantium nemo provident.'
    },
    {
      title: 'Prueba de titulo 3',
      date: moment().format('LLLL'),
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis rerum qui sed! Perspiciatis ipsam deserunt doloribus! Consectetur maiores magni iusto aliquid consequuntur, quidem deserunt adipisci asperiores incidunt ullam ab mollitia architecto error distinctio nesciunt nobis repudiandae illum accusantium nemo provident.'
    },
    {
      title: 'Prueba de titulo 4',
      date: moment().format('LLLL'),
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis rerum qui sed! Perspiciatis ipsam deserunt doloribus! Consectetur maiores magni iusto aliquid consequuntur, quidem deserunt adipisci asperiores incidunt ullam ab mollitia architecto error distinctio nesciunt nobis repudiandae illum accusantium nemo provident.'
    },
  ];

  //console.log(posts);
  posts.forEach((item, index) => {
    var post = `
    <article class="post">
      <h2>${item.title}</h2>
      <span class="date">${item.date}</span>
      <p>${item.content}</p>
      <button class="button-more">Leer más</button>
    </article>`;

    $('#posts').append(post);
  })

  //selector de tema
  var changetheme = document.querySelector('#change-theme');
  var fondo = $('#theme');

  (() => {
    changetheme.addEventListener('click', delegacion);
    const color = localStorage.getItem('colorFondo');
    if(color===null){
      fondo.attr('href', 'css/green.css');
    } else if (color == 'toGreen') {
      fondo.attr('href', 'css/green.css');
    } else if (color == 'toRed') {
      fondo.attr('href', 'css/red.css');
    } else {
      fondo.attr('href', 'css/blue.css');
    }
  })();

  function delegacion(e){
    e.preventDefault();
    
    const colorBtn = e.target.classList[0];

    switch(colorBtn){
      case ('toGreen') :
        fondo.attr('href', 'css/green.css');
        localStorage.setItem('colorFondo', 'toGreen');
      break;
      case ('toRed') :
        fondo.attr('href', 'css/red.css');
        localStorage.setItem('colorFondo', 'toRed');
      break;
      case ('toBlue') :
        fondo.attr('href', 'css/blue.css');
        localStorage.setItem('colorFondo', 'toBlue');
      break;
      default:
      break;
    }
  }
  

});