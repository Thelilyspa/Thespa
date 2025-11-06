let testimonials = document.querySelectorAll('.testimonial');
let tIndex = 0;

function cycleTestimonials() {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[tIndex].classList.add('active');
  tIndex = (tIndex + 1) % testimonials.length;
}

setInterval(cycleTestimonials, 4000);
