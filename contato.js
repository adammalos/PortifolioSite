if ('scrollIntoView' in Element.prototype) {
    document.querySelector('a[href="#footer"]').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });
    });
  }
  

