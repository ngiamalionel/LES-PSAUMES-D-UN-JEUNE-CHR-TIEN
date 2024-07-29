const $pages = $('.pages'),
      $cover = $('.cover'),
      $book = $(".book"),
      $hint = $(".hint"),
      timeline = gsap.timeline({ paused: true, reversed: true }),
      transitionSpeed = 1;

// Define the GSAP timeline
timeline.to(".bend", { width: "0" }, 0)
        .to(".book", { width: "100%", height: "100%" }, 0)
        .to(".cover", { className: "+=active", ease: "power1.in", onComplete: () => {
          $pages.removeClass("hide");
          $cover.addClass("hide");
        } }, 0)
        .to(".content-inner", { opacity: 1 }, transitionSpeed);

// Event handler for cover click
$cover.on("click", function() {
  $hint.text("* Use the corners to turn the page");
  timeline.play();
  $(".content").addClass("active");
  $pages.turn({
    duration: 1500,
    width: 250,
    height: 420,
    display: 'single',
    turnCorners: "bl,br",
    elevation: 300
  });
});
