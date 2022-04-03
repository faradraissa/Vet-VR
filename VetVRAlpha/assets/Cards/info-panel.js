/* global AFRAME */
AFRAME.registerComponent('info-panel', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');

    this.movieImageEl;
    this.movieTitleEl = document.querySelector('#movieTitle');
    this.movieDescriptionEl = document.querySelector('#movieDescription');

    this.movieInfo = {
      karigurashiButton: {
        title: 'The Heart of A Dog',
        imgEl: document.querySelector('#karigurashiMovieImage'),
        description: 'Cardiac diseases we commonly see usually involve damage to the heart valves or enlargement/dilation of the heart due to weakening of the muscle.  These diseases are progressive and are due to degeneration of the heart.  There is often a genetic component as certain breeds at more at risk.'
      },
      kazetachinuButton: {
        title: 'The Heart of a Cat',
        imgEl: document.querySelector('#kazetachinuMovieImage'),
        description: 'A cats heart has four chambers. The two upper chambers are called the atrium (plural atria), and the lower chambers are called the ventricles. Additionally, the heart has a right and left side, each containing one atrium and one ventricle.'
      },
      ponyoButton: {
        title: 'The Heart of a Pig',
        imgEl: document.querySelector('#ponyoMovieImage'),
        description: 'If some pet pigs do not have access to exercise areas with abrasive surfaces such as gravel or stones, and constantly stand in soft or wet ground, hoof growth can become excessive. Some simple routine paring may be attempted without sedation on small, cooperative patients, but for more severe cases, most pigs will be required to be sedated. Most overgrown hooves can be managed with a sheep foot shear, lighter cattle toe clipper and a rasp. Toe and dew claw overgrowth are commonly encountered and easily rectified.'
      }
    };

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector('#background');
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.onMenuButtonClick);
    }
    this.backgroundEl.addEventListener('click', this.onBackgroundClick);
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 9;
    fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
  },

  onMenuButtonClick: function (evt) {
    var movieInfo = this.movieInfo[evt.currentTarget.id];

    this.backgroundEl.object3D.scale.set(1, 1, 1);

    this.el.object3D.scale.set(1, 1, 1);
    if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
    this.el.object3D.visible = true;
    this.fadeBackgroundEl.object3D.visible = true;

    if (this.movieImageEl) { this.movieImageEl.object3D.visible = false; }
    this.movieImageEl = movieInfo.imgEl;
    this.movieImageEl.object3D.visible = true;

    this.movieTitleEl.setAttribute('text', 'value', movieInfo.title);
    this.movieDescriptionEl.setAttribute('text', 'value', movieInfo.description);
  },

  onBackgroundClick: function (evt) {
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    this.fadeBackgroundEl.object3D.visible = false;
  }
});