var controller = new ScrollMagic.Controller();

var projects = Array.prototype.slice.call(
  document.querySelectorAll(".project")
);

// Scenes elements

var self = this;

projects.forEach(function (self) {
  var bounce = self.querySelectorAll(".a-bounce");
  var text = self.querySelectorAll("h2");

  var sceneOne = new TimelineMax();

  sceneOne.from(bounce, 3, {
    duration: 1.2,
    opacity: 0,
    scale: 0.3,
    ease: "back",
  });

  var scene1 = new ScrollMagic.Scene({
    triggerElement: self,
    triggerHook: "0.8",
    duration: 500,
    offset: 0,
  })
    .setTween(sceneOne)
    // .addIndicators({
    //   colorStart: "rgba(0,0,0,0.5)",
    //   colorEnd: "rgba(0,0,0,0.5)",
    //   colorTrigger: "rgba(0,0,0,1)",
    //   name: "Scene",
    // })
    .setClassToggle(self, "active")
    .addTo(controller);
});
