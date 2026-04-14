const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      const el = entry.target as HTMLElement;

      const cls = el.dataset['reveal'];
      const delay = el.dataset['delay'];

      
      // Apply delay if present
      if (delay) {
        el.style.animationDelay = delay;
      }

      // Add animation classes
      if (cls) {
        el.classList.add(...cls.split(' '));
      }

      revealObserver.unobserve(el);
    }

  });
}, {
  threshold: 0.2
});

export default revealObserver;