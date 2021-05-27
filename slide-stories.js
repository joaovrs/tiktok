class SlideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    this.init();
  }

  activeSlide(index) {
    this.active = index;
    this.items.forEach((item) => item.classList.remove('active'));
    this.items[index].classList.add('active');
    this.thumbItems.forEach((item) => item.classList.remove('active'));
    this.thumbItems[index].classList.add('active');
    this.autoSlide(index);
  }

  prev() {
    if (this.active > 0) {
      this.activeSlide(this.active - 1);
    } else {
      this.activeSlide(this.items.length - 1);
    }
  }

  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else {
      this.activeSlide(0);
    }

  }

  addNavigation() {
    const nextBtn = this.slide.querySelector('.slide-next');
    const prevBtn = this.slide.querySelector('.slide-prev');
    nextBtn.addEventListener('click', this.next);
    prevBtn.addEventListener('click', this.prev);
  }

  addThumbItems() {
    this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
    this.thumbItems = Array.from(this.thumb.children);
  }

  autoSlide(index) {
    clearTimeout(this.timeout);
    clearInterval(myVar);
    var container = document.getElementById('container');
    var windowWidth = window.innerWidth;
    console.log("imgMoving_" + index)
    var imgMoving = document.getElementById("imgMoving_" + index);
    var step = (imgMoving.width - 380)/250;
    imgMoving.style.marginLeft = "0px";
    console.log(step)
    var i = 0;
    myVar = setInterval(myTimer, 20);

    function myTimer() {
      if (imgMoving.style.marginLeft == "") {
        imgMoving.style.marginLeft = "0px";
      } else {
      imgMoving.style.marginLeft = (parseInt(imgMoving.style.marginLeft) - step) + "px";
      }
    }
    this.timeout = setTimeout(this.next, 5000);
    }


  init() {
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.items = this.slide.querySelectorAll('.slide-items > *');
    this.thumb = this.slide.querySelector('.slide-thumb');
    this.addThumbItems();
    this.activeSlide(0);
    this.addNavigation();
  }
}
var myVar
window.onload = (event) => {

new SlideStories('slide');
}