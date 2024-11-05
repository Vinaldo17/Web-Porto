
window.addEventListener('scroll',() => {
    const image = document.getElementById('darken-image');
    const image1 = document.getElementById('about');
    const image2 = document.getElementById('darken-image');
    const image3 = document.getElementById('darken-image');
    
    const scrollTop = window.scrollY;  // Get current scroll position
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;  // Maximum scrollable height

    // Calculate darkness level based on scroll position (between 0 and 1)
    const darknessLevel = Math.min(scrollTop / maxScroll, 1);
    image.style.filter = `brightness(${1 - 2*(darknessLevel)})`;
    image1.style.filter = `brightness(${2 - 3*(darknessLevel)})`;
    // Apply the darkness as a CSS filter (darker as you scroll more)
    
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
      
  }
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

const hiddenElements = document.querySelectorAll('.hidden');
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

const observeryx = new IntersectionObserver((entries) => {
  entries.forEach((entry)=>{
  console.log(entry)
  if(entry.isIntersecting){
    entry.target.classList.add('showx');
  }else{
    entry.target.classList.remove('showx');
  }
  
  });
});

const hiddenElementsx = document.querySelectorAll('.hiddenx',);
hiddenElementsx.forEach((el)=> observer.observe(el));
