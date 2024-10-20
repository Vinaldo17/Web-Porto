document.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 110) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

window.addEventListener('scroll',() => {
    const image = document.getElementById('darken-image');
    const scrollTop = window.scrollY;  // Get current scroll position
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;  // Maximum scrollable height

    // Calculate darkness level based on scroll position (between 0 and 1)
    const darknessLevel = Math.min(scrollTop / maxScroll, 1);
    image.style.filter = `brightness(${1 - 4*(darknessLevel)})`;
    // Apply the darkness as a CSS filter (darker as you scroll more)
    
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry)=>{
  console.log(entry)
  if(entry.isIntersecting){
    entry.target.classList.add('show');
  }else{
    entry.target.classList.remove('show');
  }
  
  });
});

const hiddenElements = document.querySelectorAll('.hidden',);
hiddenElements.forEach((el)=> observer.observe(el));


const observery = new IntersectionObserver((entries) => {
  entries.forEach((entry)=>{
  console.log(entry)
  if(entry.isIntersecting){
    entry.target.classList.add('showy');
  }else{
    entry.target.classList.remove('showy');
  }
  
  });
});

const hiddenElementsy = document.querySelectorAll('.hiddeny');
hiddenElementsy.forEach((el)=> observer.observe(el));