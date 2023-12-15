setInterval(() => {
  if (history.scrollRestoration = 'auto') {
    history.scrollRestoration = 'manual';
  }
}, 1000);
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true,
// });


// window.onresize = scroll.update();

// scroll.on("scroll", () => ScrollTrigger.update());

// ScrollTrigger.scrollerProxy('[data-scroll-container]', {
//   scrollTop(value) {
//     return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
// });

// ScrollTrigger.defaults({
//   scroller: document.querySelector('[data-scroll-container]'),
// });

/**
 * Remove Old Locomotive Scrollbar
 */

//  const scr = document.querySelectorAll('.c-scrollbar')
 
//  if(scr.length > 1) {
//   scrollbar[0].remove();
// }


// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener('refresh', () => scroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

//


function initStickyCursorWithDelay() {
    
  // Sticky Cursor with delay
  // https://greensock.com/forums/topic/21161-animated-mouse-cursor/
  var cursorImage = $(".mouse-pos-list-image")
  var cursorBtn = $(".mouse-pos-list-btn");
  var cursorSpan = $(".mouse-pos-list-span");

  var posXImage = 0
  var posYImage = 0
  var posXBtn = 0
  var posYBtn = 0
  var posXSpan = 0
  var posYSpan = 0
  var mouseX = 0
  var mouseY = 0

  if(document.querySelector(".mouse-pos-list-image, .mouse-pos-list-btn, .mouse-post-list-span")) {
  gsap.to({}, 0.0083333333, {
    repeat: -1,
    onRepeat: function() {

      if(document.querySelector(".mouse-pos-list-image")) {
        posXImage += (mouseX - posXImage) / 12;
        posYImage += (mouseY - posYImage) / 12;
        gsap.set(cursorImage, {
          css: {
          left: posXImage,
          top: posYImage
          }
        });
      }
      if(document.querySelector(".mouse-pos-list-btn")) {
        posXBtn += (mouseX - posXBtn) / 7;
        posYBtn += (mouseY - posYBtn) / 7;
        gsap.set(cursorBtn, {
          css: {
          left: posXBtn,
          top: posYBtn
          }
        });
      }
      if(document.querySelector(".mouse-pos-list-span")) {
        posXSpan += (mouseX - posXSpan) / 6;
        posYSpan += (mouseY - posYSpan) / 6;   
        gsap.set(cursorSpan, {
          css: {
          left: posXSpan,
          top: posYSpan
          }
        });
      }
    }
  });
  }

  $(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animated Section Assortiment Single Floating Image
  // Source: http://jsfiddle.net/639Jj/1/ 

  $('.testing__item').on('mouseenter', function() {
    $('.mouse-pos-list-image, .mouse-pos-list-btn, .mouse-pos-list-span, .mouse-pos-list-span-big').addClass('active');
  });
  $('.testing__item').on('mouseleave', function() {
    $('.mouse-pos-list-image, .mouse-pos-list-btn, .mouse-pos-list-span, .mouse-pos-list-span-big').removeClass('active');
  });
  $('.single-tile-wrap a, .mouse-pos-list-archive a, .next-case-btn').on('mouseenter', function() {
    $('.mouse-pos-list-btn, .mouse-pos-list-span').addClass('active-big');
  });
  $('.single-tile-wrap a, .mouse-pos-list-archive a, .next-case-btn').on('mouseleave', function() {
    $('.mouse-pos-list-btn, .mouse-pos-list-span').removeClass('active-big');
  });
  $('main').on('mousedown', function() {
    $(".mouse-pos-list-btn, .mouse-pos-list-span").addClass('pressed');
  });
  $('main').on('mouseup', function() {
    $(".mouse-pos-list-btn, .mouse-pos-list-span").removeClass('pressed');
  });

  $('.testing__item').on('mouseenter', function() {
    
    var $elements = $(".testing__item");
    var index =  $elements.index($(this));
    var count = $(".testing__item").length;
    // var index =  $(this).index();
    if($(".float-image-wrap")) {
        gsap.to($(".float-image-wrap"), {
          y: (index*100)/(count*-1) + "%",
          duration: .6,
          ease: Power2.easeInOut
        });
    }
    $(".mouse-pos-list-image.active .mouse-pos-list-image-bounce").addClass("active").delay(400).queue(function(next){
        $(this).removeClass("active");
        next();
    });

  });

  $('.archive-work-grid li').on('mouseenter', function() {
    $(".mouse-pos-list-btn").addClass("hover").delay(100).queue(function(next){
      $(this).removeClass("hover");
      next();
    });
  });

}

function imgSizing() {
        const gallery = document.querySelector('.gallery')
        const imgPreview = document.querySelector('.imgPreview')
        const imgs = document.querySelectorAll('.muuri__item')

        let isimgPreviewOpen = false
        let activeImg = null
        let activeImgParent = null

        imgs.forEach( (img) => {
            let theImgMask = img.querySelector('.wrap')
            let theImg = img.querySelector('img')

            img.addEventListener('click', e => {
                const imgState = Flip.getState([theImgMask, theImg])
                gsap.set(imgPreview, {autoAlpha: 1})
                activeImg = theImgMask
                activeImgImg = theImgMask.querySelector('img')
                activeImgParent = theImgMask.parentNode
                imgPreview.appendChild(theImgMask)
                


                Flip.from(imgState, {
                    duration: 1,
                    ease: 'power3.inOut',
                    scale: true,
                    onStart: () => {
                        gsap.set('body', {
                            pointerEvents: 'none'
                        })
                        
                        imgPreview.classList.add('imgPreview--active')
                    },
                    onComplete: () => {
                        gsap.set('body', {
                            pointerEvents: 'all'
                        })
                        isimgPreviewOpen = true
                    }
                })
            })
        })

        imgPreview.addEventListener('click', e => {
            
            const activeImgState = Flip.getState([activeImg, activeImgImg])
            activeImgParent.appendChild(activeImg)

            Flip.from(activeImgState, {
                duration: 1,
                ease: 'power3.inOut',
                scale: true,
                zIndex: 2000,
                nested: true,
                onStart: () => {
                    gsap.set('body', {
                            pointerEvents: 'none'
                    })
                    imgPreview.classList.remove('imgPreview--active')
                    activeImg.parentNode.classList.add('oops')
                },
                onComplete: () => {
                    isimgPreviewOpen = false
                    gsap.set(imgPreview, {
                        autoAlpha: 0
                    })
                    
                    gsap.set('body', {
                            pointerEvents: 'all'
                    })
                    activeImg.parentNode.classList.remove('oops')
                }
            })
        })

}
//

  const body = document.querySelector('body')



/* Magnetic Buttons
*/
function initMagneticButtons() {
    
  // Magnetic Buttons
  // Found via: https://codepen.io/tdesero/pen/RmoxQg
  var magnets = document.querySelectorAll('.magnetic');
  var strength = 100;
  
  // START : If screen is bigger as 540 px do magnetic
  if(window.innerWidth > 540){
  // Mouse Reset
  magnets.forEach( (magnet) => {
    magnet.addEventListener('mousemove', moveMagnet );
    $(this.parentNode).removeClass('not-active');
    magnet.addEventListener('mouseleave', function(event) {
        gsap.to( event.currentTarget, 1.5, {
          x: 0, 
          y: 0, 
          ease: Elastic.easeOut
        });
        gsap.to( $(this).find(".btn-text"), 1.5, {
          x: 0, 
          y: 0, 
          ease: Elastic.easeOut
        });
    });
  });

  // Mouse move
  function moveMagnet(event) {
    var magnetButton = event.currentTarget;
    var bounding = magnetButton.getBoundingClientRect();
    var magnetsStrength = magnetButton.getAttribute("data-strength");
    var magnetsStrengthText = magnetButton.getAttribute("data-strength-text");
      
    gsap.to( magnetButton, 1.5, {
        x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrength,
        y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrength,
        rotate: "0.001deg",
        ease: Power4.easeOut
    });
    gsap.to( $(this).find(".btn-text"), 1.5, {
        x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrengthText,
        y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrengthText,
        rotate: "0.001deg",
        ease: Power4.easeOut
    });
  }

  }; // END : If screen is bigger as 540 px do magnetic

  // Mouse Enter
  $('.btn-click.magnetic').on('mouseenter', function() {
    if($(this).find(".btn-fill").length) {
    gsap.to($(this).find(".btn-fill"), .6, {
        startAt: {y: "76%"},
        y: "0%",
        ease: Power2.easeInOut
    });
    }
    if($(this).find(".btn-text-inner.change").length) {
    gsap.to($(this).find(".btn-text-inner.change"), .3, {
        startAt: {color: "#1C1D20"},
        color: "#FFFFFF",
        ease: Power3.easeIn,
    });
    }
    $(this.parentNode).removeClass('not-active');
  });

  // Mouse Leave
  $('.btn-click.magnetic').on('mouseleave', function() {
    if($(this).find(".btn-fill").length) {
    gsap.to($(this).find(".btn-fill"), .6, {
        y: "-76%",
        ease: Power2.easeInOut
    });
    }
    if($(this).find(".btn-text-inner.change").length) {
    gsap.to($(this).find(".btn-text-inner.change"), .3, {
        color: "#1C1D20",
        ease: Power3.easeOut,
        delay: .3
    });
    }
    $(this.parentNode).removeClass('not-active');
  });
}

// initMagneticButtons()
/**/

/**
* Scrolltrigger Scroll Letters Home
*/

  
function initScrollLetters() {
  // Scrolling Letters Both Direction
  // https://codepen.io/GreenSock/pen/rNjvgjo
  // Fixed example with resizing
  // https://codepen.io/GreenSock/pen/QWqoKBv?editors=0010

  let direction = 1; // 1 = forward, -1 = backward scroll

  const roll1 = roll(".big-name .name-wrap", {duration: 18}),
        roll2 = roll(".rollingText02", {duration: 10}, true),
        scroll = ScrollTrigger.create({
          trigger: document.querySelector('[data-scroll-container]'),
          onUpdate(self) {
            if (self.direction !== direction) {
              direction *= -1;
              gsap.to([roll1, roll2], {timeScale: direction, overwrite: true});
            }
          }
        });

  // helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
  function roll(targets, vars, reverse) {
    vars = vars || {};
    vars.ease || (vars.ease = "none");
    const tl = gsap.timeline({
            repeat: -1,
            onReverseComplete() { 
              this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
            }
          }), 
          elements = gsap.utils.toArray(targets),
          clones = elements.map(el => {
            let clone = el.cloneNode(true);
            el.parentNode.appendChild(clone);
            return clone;
          }),
          positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)}));
    positionClones();
    elements.forEach((el, i) => tl.to([el, clones[i]], {xPercent: reverse ? 100 : -100, ...vars}, 0));
    window.addEventListener("resize", () => {
      let time = tl.totalTime(); // record the current time
      tl.totalTime(0); // rewind and clear out the timeline
      positionClones(); // reposition
      tl.totalTime(time); // jump back to the proper time
    });
    return tl;
  }

}




//TypeWriter

function TW() {
  
const words = ["HTML🏠", "SCSS🎨", "JavaScript👨🏽‍💻", "GreenSock🌌", "Barba.js♻️"];

gsap.to(".typeWriter__cursor", {
  opacity: 0,
  repeat: -1,
  yoyo: true,
  duration: 0.5,
  ease: "power2.inOut"
});

let tlMaster = gsap.timeline({ repeat: -1 });

words.forEach((word) => {
  let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
  tlText.to(".typeWriter__animated__text", { duration: 1, text: word });
  tlMaster.add(tlText);
});
}


// function gridPl() {
//   //muuri
// Muuri.defaultOptions.layout.fillGaps = true
// initGrid();

// function initGrid() {

  


//   var grid = new Muuri('.gallery', {
//     dragEnabled: true,
//     layoutOnInit: false,

//     layout: function (grid, layoutId, items, width, height, callback) {
//       var layout = {
//         id: layoutId,
//         items: items,
//         slots: [],
//         styles: {},
//       }
//     }

//   }).on('move', function () {
//     saveLayout(grid);
    
//   });
//   grid.on('dragStart', function (item, event) {
//     console.log(item);
    
//   });
  

//   var layout = window.localStorage.getItem('layout');
//   if (layout) {
//     loadLayout(grid, layout);
//   } else {
//     grid.layout(true);
//   }
// }

// function serializeLayout(grid) {
//   var itemIds = grid.getItems().map(function (item) {
//     return item.getElement().getAttribute('data-id');
//   });
//   return JSON.stringify(itemIds);
// }

// function saveLayout(grid) {
//   var layout = serializeLayout(grid);
//   window.localStorage.setItem('layout', layout);
// }

// function loadLayout(grid, serializedLayout) {
//   var layout = JSON.parse(serializedLayout);
//   var currentItems = grid.getItems();
//   var currentItemIds = currentItems.map(function (item) {
//     return item.getElement().getAttribute('data-id')
//   });
//   var newItems = [];
//   var itemId;
//   var itemIndex;

//   for (var i = 0; i < layout.length; i++) {
//     itemId = layout[i];
//     itemIndex = currentItemIds.indexOf(itemId);
//     if (itemIndex > -1) {
//       newItems.push(currentItems[itemIndex])
//     }
//   }

//   grid.sort(newItems, {layout: 'instant'});
// }
// }
// gridPl()


function initTricksWords() {
    
  // Copyright start
  // © Code by T.RICKS, https://www.tricksdesign.com/
  // You have the license to use this code in your projects but not redistribute it to others
  // Tutorial: https://www.youtube.com/watch?v=xiAqTu4l3-g&ab_channel=TimothyRicks

  // Find all text with .tricks class and break each letter into a span
  var spanWord = document.getElementsByClassName("span-lines");
  for (var i = 0; i < spanWord.length; i++) {

  var wordWrap = spanWord.item(i);
  wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="span-line"><span class="span-line-inner">$2</span></span>');
    
  //not related to this function
  gsap.from('.span-lines .span-line-inner', {
    scrollTrigger: {
      trigger: '.about__section',
      toggleActions:'play none none reset', 
      start: "0% 100%",
      end: "100% 0%",
  
    },
          y: "100%",
          stagger: .01,
          ease: "power3.out",
          duration: 1,
          delay: 0
  })

  }

}



//testing section

function testing() {
  const testingItem = document.querySelectorAll('.testing__item')
const testingImg = document.querySelectorAll('.cloning-node')
const testingWrapper = document.querySelector('.testing__wrapper')
const link4kt = document.querySelectorAll('.link4kt')
let counter = 1
const testing__imgWrapper = document.querySelector('.testing__img-wrapper')
testingItem.forEach( (item, index) => {
    item.addEventListener('click', e => {
      console.log('clicked');
      let cloned = testingImg[index].cloneNode(true)
      
      testing__imgWrapper.append(cloned)
      testingImg[index].style.display = 'none'
      cloned.style.position = 'absolute'
      cloned.style.left = e.clientX + 'px'
      cloned.style.top = e.clientY + 'px'
      
      testingImg.forEach(trg => {
        trg.style.opacity = '0'
      })

      gsap.to(cloned, {
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        transform: 'translate(0)',
        duration: 1,
        ease: Power1.easeOut,
        onComplete: () => {
          link4kt[index].click()
          testingImg.forEach(trg => {
          trg.style.opacity = '1'
          })
        }
        
      })
    })
    // item.addEventListener('mouseleave', e => {
        
    //         testingImg[index].classList.remove('active')
        
    // })


        //     item.addEventListener('mouseenter', e => {
        //         testingImg[index].classList.add('active')

        //         testingImg[index].style.zIndex = counter++

        //     body.addEventListener('mousemove', event => {
        //     testingImg[index].style.left = `${event.clientX}px` 
        //     testingImg[index].style.top =  `${event.clientY}px`
        //     })  
            
        // })
    
        // testingWrapper.addEventListener('mouseenter', e => {
        //     gsap.to(testingImg[index], {
        //         'clipPath': 'inset(0% 0% 0% 0%)',
        //         duration: 0
        //     })
        // })
        
        // testingWrapper.addEventListener('mouseleave', e => {
        //     testingImg[index].classList.remove('animate')

        //     gsap.to(testingImg[index], {
        //         'clipPath': 'inset(50% 0% 50% 0%)',
        //         duration: 0
        //     })
        // })
})
}
// testing()

//clipPathing
function clippp() {
  gsap.to('.clipPath__element', {
    scrollTrigger: {
      trigger: '.section__clipPathing',
      start: 'top top',
      end: '+=3000',
      scrub: true,
      pin: true,
    },
    width: '100vw',
    height: '100vh',
    borderRadius: '0',
    onComplete() {
      const cubesLink = document.querySelector('.cubes__link')
      cubesLink.click()
      
     },
     
  })
}





// do something after the transition finishes
barba.hooks.after(() => {
  document.querySelector('html').classList.remove('is-transitioning');
  // reinit locomotive scroll
  // lenis.stop();
  // lenis.scrollTo(lock(true))
  // lenis.resize()
});

barba.hooks.before(() => {
  // document.querySelector('html').style.overflowY = 'hidden'
  // body.style.overflowY = 'hidden'
  // lenis.resize()
  
});

barba.hooks.enter(() => {
  // document.querySelector('html').style.overflowY = 'hidden'
  // body.style.overflowY = 'hidden'
  // lenis.resize()
  if (history.scrollRestoration = 'auto') {
    history.scrollRestoration = 'manual';
  }
});
       
barba.hooks.afterEnter(() => {
  window.scrollTo(0, 0);
});
    

        barba.init({
    
            preventRunning: true,
          transitions: [
            
            

            {
                name: 'indexx',
                  
                

                to: {
                    namespace: ['home']
                },

                async leave(data) {
                    pageTransitionIn(data.current)
                    
                  await delay(495);
                  data.current.container.remove()
                },

               async enter(data) {
                gsap.registerPlugin()
                  ScrollTrigger.refresh(true)
                    let triggers = ScrollTrigger.getAll();
                    triggers.forEach( trigger => {
                    trigger.kill();
                    });
                    pageTransitionOut(data.next)
                    initNextWord(data)

                    testing()
                    initStickyCursorWithDelay()
                    clippp()
                   
                    initMagneticButtons()
                    initScrollLetters()
                    initTricksWords()
                    TW()
                  
                    

                    //

                    

                  

                  

                    

                    
                      

                    

                    


                    //fgh

                    
                    
                },

                
            },

            

            {
              name: 'cubes',

              to: {
                namespace: ['versus']
              },

              

             enter(data) {

              

              gsap.registerPlugin()
                ScrollTrigger.refresh(true)
                    let triggers = ScrollTrigger.getAll();
                    triggers.forEach( trigger => {
                    trigger.kill();
                    });
                  
                    lenis.stop()
                const cubesTL = gsap.timeline()
                     cubesTL.from('.cubes__hero-title', {
                        opacity: 0,
                        y: 15,
                    }).from('.cubes__hero-btn', {
                        opacity: 0,
                        y: 15,
                        stagger: .15,

                        onComplete: () => {
                          lenis.start()
                        }
                        
                    }).from('.cubes__nav-logo', {
                        opacity: 0,
                        x: 20,
                    }).from('.cubes_nav-link', {
                        opacity: 0,
                        y: 20,
                        stagger: .08,

                        
                    })
                    
                    let latest__links = document.querySelectorAll('.latest__link')
                    
                    latest__links.forEach( (link) => {
                        
                        let linksTl = gsap.timeline({
                            scrollTrigger: {
                                trigger: link,
                                start: 'top bottom',
                                toggleActions: 'play none none none'
                            },
                        })


                        linksTl.to(link.querySelector('.latest__link-el'), 1, {
                            transformOrigin: 'left',
                            scaleX: 1,
                            ease: 'expo.out',
                        }).to(link.querySelector('.latest__link-el'), {
                            transformOrigin: 'right',
                            scaleX: 0,
                            ease: 'expo.out',
                        }, '-=.5').from(link.querySelector('.latest__img'), 3, {
                            scale: 1.5,
                            filter: 'blur(15px)',
                            ease: 'expo.out',
                            clearProps: 'scale'
                            

                        }, '-=1.7')
                    })
                    data.current.container.remove()
              }

            },

            {
            name: 'outschool',
            


            to: {
              namespace: ['outschool']
            },
            

            async leave(data) {

              

                pageTransitionIn(data.current) 
              await delay(495);
              data.current.container.remove()
            },

           async enter(data) {
                gsap.registerPlugin()
                pageTransitionOut(data.next)
                initNextWord(data)
              
                
              //

        let tll = gsap.timeline()
        let random = gsap.utils.random([15, -15])

        gsap.set('.hero img', {
            scale: 1.15
        })

        tll.to('.hero__afterElement', {
          delay: .8,
            'right': '0px',
            duration: 1.4,
        }).to('.hero__item', {
            'clipPath': 'inset(0% 0% 0% 0%)',
            duration: 1.4,
        }, '<=',).to('.hero__afterElement', {
            'right': '100%',
            duration: .7,
        }).to('.hero__item', {
            'clipPath': 'inset(0% 100% 0% 0%)',
            duration: .7,
        }, '<=',).to('.hero__afterElement', {
            'right': '0px',
            duration: .4,
        }).to('.hero__item', {
            'clipPath': 'inset(0% 0% 0% 0%)',
            duration: .4,
        }, '<=',).to('.hero__afterElement', {
            autoAlpha: 0,
            duration: 1,
        }).set('.hero__afterElement', {
            'display': 'none'
        }).from('.hero img', {
            yPercent: 30,
            autoAlpha: 0,
            duration: 0.75,
        },).to('.hero img', {
            scale: 1,
            delay: -0.3,
        },).from('.menu_link-padding', {
            opacity: 0,
            x: -20,
            stagger: {
                from: 'random',
                amount: 1,
            }
        }).from('.nav__buttons-btn', {
            x:() => gsap.utils.random([20, -20]),
            opacity: 0,
            stagger: .3,

        }).from('.logo', {
            y: random,
            x: random,
            opacity: 0,
        }).from('.nav__burger', {
            opacity: 0,
            y: gsap.utils.random([20, -20])
        })


        gsap.from('.company__title', {
            scrollTrigger: {
                trigger: '.company__section',
                start: 'top center',
                end: '+=100',
                scrub: true,
                toggleActions: 'restart pause resume none',
            },
            y: -70,
            opacity: 0,
        })


        gsap.from('.company img', {
            scrollTrigger: {
                trigger: '.company__section',
                start: 'center bottom',
                toggleActions: 'restart pause resume none',
            },
            y: -30,
            opacity: 0,
            stagger: 0.5,
        })
        
        let splitText = new SplitType('.courses__title', {types: 'chars'})


        gsap.from(splitText.chars, {
            scrollTrigger: {
                trigger: '.courses__title',
                start: 'top bottom',
                toggleActions: 'restart pause resume none',
            },

            opacity: 0,
            stagger: 0.1,
            y: 190,
        })

        let options = [{x: -20, y: -20, opacity: 0}, {x:20, y: 20, opacity: 0}, {x:-20, y: 20, opacity: 0}, {x:20, y: -20, opacity: 0}]

        let randomNumber =  gsap.utils.random(0, options.length - 1, 1)
        
        gsap.from('.courses__tab', {
            scrollTrigger: {
                trigger: '.courses__tab',
                start: 'top bottom',
                toggleActions: 'restart pause resume none',
            },
            ...options[randomNumber],
            stagger: .3,
        })

        

            gsap.from('.courses__item ', {
                scrollTrigger: {
                 trigger: '.courses__item',
                 start: 'top bottom',
                
             },
             clipPath: () => 'inset' + gsap.utils.random(['(0% 100% 0% 0%)', '(0% 0% 0% 100%)', '(100% 0% 0% 0%)', '(0% 0% 100% 0%)']),
             stagger: {
                from: '0',
                each: 0.4,
             }
            })
            const ot = SplitType.create('.ourfeatures__title', {types: 'chars'})
            const of = SplitType.create('.ourfeatures__text', {types: 'words'})

            gsap.from(ot.chars, {
                scrollTrigger: {
                 trigger: '.ourfeatures__section',
                 start: 'top top',
                 end: '+=1000',
                 scrub: true,
             },
             opacity: 0,
             color: 'black',
             y: () => gsap.utils.random([100, -100])
            })

            gsap.to('.wok', {
              scrollTrigger: {
               trigger: '.ourfeatures__section',
               start: 'top top',
               end: '+=2750',
               scrub: true,
               pin: true,
           },
           background: 'black'
          })

            gsap.to(of.words, {
                scrollTrigger: {
                 trigger: '.ourfeatures__section',
                 start: 'top top',
                 end: '+=2500',
                 scrub: true,
             },
             color: 'white',
             stagger: 2,
            })

            gsap.to('.ourfeatures__item-title', {
                scrollTrigger: {
                 trigger: '.ourfeatures__section',
                 start: 'top top',
                 end: '+=2500',
                 scrub: true,
             },
             color: 'white',
             text: "ALL you've been searhing for!",
            //  padSpace: true,
             stagger: 1,
            })

            gsap.to('.ourfeatures__item-text', {
                scrollTrigger: {
                 trigger: '.ourfeatures__section',
                 start: 'top top',
                 end: '+=2500',
                 scrub: true,
             },
             color: 'white',
             text: "EVERYTHING YOU MIGHTA DREAMED OF IS HERE",
            //  padSpace: true,
             stagger: 1,
            })

            gsap.from('.best__platform-item:nth-child(1)', {
                scrollTrigger: {
                    trigger: '.best__platform-item',
                    
                },
                x: -150,
                rotate: 45,
                ease: 'elastic', 
                duration: 4,
            })

            gsap.from('.best__platform-item:nth-child(2)', {
                scrollTrigger: {
                    trigger: '.best__platform-item',
                
                },
                x: 150,
                rotate: 45,
                ease: 'elastic', 
                duration: 4,
            })

            gsap.from('.best-platform__second-item > *', {
                scrollTrigger: {
                    trigger: '.best-platform__section',
                    
                },
                y: 40,
                opacity: 0,
                stagger: .4,
            })

            let latestTitle = SplitType.create('.latest-news__title', {types: 'chars'})

            gsap.from(latestTitle.chars, {
                scrollTrigger: {
                    trigger: '.latest-news__section',
                    toggleActions: 'restart pause resume none',
                },
                opacity: 0,
                y: 15,
                stagger: .05,
            })

            gsap.from('.latest-news__item', {
                scrollTrigger: {
                    trigger: '.latest-news__section',
                    start: 'top center',
                },
                clipPath: () => 'inset' + gsap.utils.random(['(100% 100% 0% 0%)', '(100% 0% 0% 100%)']),
                stagger: .3,
            })


            //tabs

            const coursesTabs = document.querySelectorAll('.courses__tab')
const coursesItems = document.querySelectorAll('.courses__item')
const courses = document.querySelector('.courses')



coursesTabs.forEach( (tab, index) => {
    tab.addEventListener('click', e => {

        ScrollTrigger.refresh(true)
                    

        coursesTabs.forEach( (t) => {
            t.classList.remove('active')
        })

        tab.classList.add('active')
       
        const targetId = e.target.dataset.id

        coursesItems.forEach((item) => {
            item.style.display = 'block'
        })
            

            
             switch (targetId) {
                case 'all':
                    getItems('courses__item')
                break
                case 'Development':
                getItems(targetId)
                break

                case 'Design':
                getItems(targetId)
                break

                case 'Music':
                getItems(targetId)
                break
                
                case 'Markeing':
                getItems(targetId)
                break

                case 'Business':
                getItems(targetId)
                break

                case 'Photography':
                getItems(targetId)
                break

             }
            

            
    })
})


    function getItems(className) {
        coursesItems.forEach( (item) => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        }

        else {
            item.style.display = 'none'
        }
        })
    }

            //nav-burger
            const burger = document.querySelector('.nav__burger')
const menu = document.querySelector('.menu')
const fixedNav = document.querySelector('.fixed-nav')
const fixedNavInner = document.querySelector('.fixed-nav-inner')
const roundedDivWrap = document.querySelector('.rounded-div-wrapp')
const navClose = document.querySelector('.nav-close')

let tl = gsap.timeline()

burger.addEventListener('click', () => {
    navClose.classList.add('active')
    fixedNav.classList.add('active')
    fixedNavInner.classList.add('active')
    roundedDivWrap.classList.add('active')
    tl.fromTo('.links__wrap-link', 
    {
        x: 50,
        autoAlpha: 0,
    },
    {
        x: 0,
        stagger: 0.15,
        autoAlpha: 1,
    })
    
})

navClose.addEventListener('click', () => {
    navClose.classList.remove('active')
    fixedNav.classList.remove('active')
    fixedNavInner.classList.remove('active')
    roundedDivWrap.classList.remove('active')
    tl.fromTo('.links__wrap-link', 
    {
        x: 0,
        autoAlpha: 1,
    },
    {
        x: 50,
        stagger: 0.15,
        autoAlpha: 0,
    })

    
})

//stripe-menu

// get elements


let menuLink = $(".menu_dp-link");
let content = $(".menu_dropdown_content");
let menuBG = $(".menu_bg");
let dropdownWrap = $(".menu_content");
let menuArrow = $(".menu_arrow-wrap");
gsap.defaults({
    duration: 0.4
});

function revealDropdown(currentLink, currentContent) {
    dropdownWrap.css("display", "flex");
    gsap.set(menuArrow, {
        width: currentLink.outerWidth(),
        x: currentLink.offset().left
    });
    gsap.set(menuBG, {
        width: currentContent.outerWidth(),
        height: currentContent.outerHeight()
    });
    gsap.set(content, {
        opacity: 0
    });
    gsap.set(currentContent, {
        opacity: 1,
        x: "0em"
    });
}

function switchDropdown(currentLink, previousContent, currentContent) {
    gsap.to(menuArrow, {
        width: currentLink.outerWidth(),
        x: currentLink.offset().left
    });
    gsap.to(menuBG, {
        width: currentContent.outerWidth(),
        height: currentContent.outerHeight()
    });
    // invert moveDistance if needed
    let moveDistance = 10;
    if (currentContent.index() < previousContent.index()) {
        moveDistance = moveDistance * -1;
    }
    gsap.fromTo(previousContent, {
        opacity: 1,
        x: "0em"
    }, {
        opacity: 0,
        x: moveDistance * -1 + "em",
        duration: 0.3
    });
    gsap.fromTo(currentContent, {
        opacity: 0,
        x: moveDistance + "em"
    }, {
        opacity: 1,
        x: "0em",
        duration: 0.3
    });
}

// Open dropdown animation
let showDropdown = gsap.timeline({
    paused: true,
    onReverseComplete: () => {
        dropdownWrap.css("display", "none");
        menuLink.removeClass("outschool__active");
    }
});
showDropdown.from(dropdownWrap, {
    opacity: 0,
    rotateX: -10,
    duration: 0.2
}).to(menuArrow, {
    opacity: 1,
    duration: 0.2
}, "<");

// Link Hover In
menuLink.on("mouseenter", function () {
    // get elements
    let previousLink = menuLink.filter(".outschool__active").removeClass("outschool__active");
    let currentLink = $(this).addClass("outschool__active");
    let previousContent = content.filter(".outschool__active").removeClass("outschool__active");
    let currentContent = content.eq($(this).index()).addClass("outschool__active");
    // play animations
    showDropdown.play();
    if (previousLink.length === 0) {
        revealDropdown(currentLink, currentContent);
    } else if (previousLink.index() !== currentLink.index()) {
        switchDropdown(currentLink, previousContent, currentContent);
    }
});

// Menu Hover Out
$(".menu_dp-wrap").on("mouseleave", function () {
    showDropdown.reverse();
});

$(".menu_dp--contact").on("mouseenter", function () {
    showDropdown.reverse();
});




data.current.container.remove()

            }
            },

            {
              name: 'feather',
              
  
  
              to: {
                namespace: ['feather']
              },
               
              async leave(data) {
                pageTransitionIn(data.current) 
              await delay(495);
              data.current.container.remove()
                },

             async enter(data) {
              gsap.registerPlugin()
                pageTransitionOut(data.next)
                  initNextWord(data)
                ScrollTrigger.refresh(true)
                    let triggers = ScrollTrigger.getAll();
                    triggers.forEach( trigger => {
                    trigger.kill();
                    });


                    //Burger
                    function burgerMenu(){
                      let burger = document.querySelector('.burger')
                      let menu = document.querySelector('.header__list')
                      const body = document.querySelector('body')
                      const html = document.querySelector('html')
                      const feat_nav = document.querySelector('.feather__nav')
                      burger.addEventListener('click', () =>{
                          if (!menu.classList.contains('active')) {
                              menu.classList.add('active')
                              burger.classList.add('active-burger')
                              body.classList.add('locked')
                              html.classList.add('locked')
                              lenis.stop()
                              menu.appendChild(burger)
                          }
                          else {
                              menu.classList.remove('active')
                              burger.classList.remove('active-burger')
                              body.classList.remove('locked')
                              html.classList.remove('locked')
                              lenis.start()
                              feat_nav.prepend(burger)
                          }
                      })
                  
                      // Вот тут мы ставим брейкпоинт навбара
                      window.addEventListener('resize', () => {
                          if (window.innerWidth >= 992) {
                              menu.classList.remove('active')
                              burger.classList.remove('active-burger')
                              body.classList.remove('locked')
                              html.classList.remove('locked')
                              lenis.start()
                          }
                      })
                  
                  }
burgerMenu()

gsap.registerPlugin(ScrollTrigger)
let mySplitText = new SplitType('.hero__title', {type: 'words'})
const chars = mySplitText.words

let mySplitText2 = new SplitType('.hero__text', {type: 'words'})

const chars2 = mySplitText2.words
const tl = gsap.timeline()


tl.from('.header__logo-img', {
  delay: 1,
    x: -300,
    opacity: 0,
    duration: 1,
}).from(chars, {
    opacity: 0,
    y: -10,
    stagger: 0.1,
    duration: .3,

}).from(chars2, {
    opacity: 0,
    y: 10,
    duration: .2,
    stagger: 0.02,
}).from('.hero__btn', {
    opacity: 0,
    x: -10,
    duration: 1,
})



gsap.from('.shop-by-room__title', {
    scrollTrigger: {
        trigger: '.shop-by-room__section',
        start: '-30% top',
        end: '+=100px',
        scrub: true,
    },

    opacity: 0,
    y: 50,
    duration: 1,
})



    if (window.innerWidth >= 992) {
        gsap.from('.shop-by-room__item', {
            scrollTrigger: {
                trigger: '.shop-by-room__section',
                start: '30% center',
                end: '+=300px',
                scrub: true,
            },
            stagger: 1, 
            opacity: 0,
            scale: 0,
            transformOrigin: 'center center',
            ease: 'back'
            
        })
    }

    if (window.innerWidth <= 564) {
        gsap.from('.shop-by-room__item', {
            scrollTrigger: {
                trigger: '.shop-by-room__section',
                start: '0% center',
                end: '+=1000px',
                scrub: true,
                
            },
            stagger: 1, 
            opacity: 0,
            scale: 0,
            transformOrigin: 'center center',
            ease: 'back'
        
        })
    }

    let mySplitText3 = new SplitType('.enjoy-furnished__title', {type: 'words'})
    const chars3 = mySplitText3.words

    let mySplitText4 = new SplitType('.enjoy-furnished__text', {type: 'words'})
    const chars4 = mySplitText4.words

    gsap.from(chars3, {
        scrollTrigger: {
            trigger: '.enjoy-furnished__section',
            start: '0% center',
            end: '+=300px',
        },
    
        opacity: 0,
        y: 30,
        stagger: 0.1,
    })

    gsap.from(chars4, {
        scrollTrigger: {
            trigger: '.enjoy-furnished__section',
            start: '0% center',
            end: '+=300px',
        },
    
        opacity: 0,
        y: 30,
        stagger: 0.01,
    })


    gsap.from('.furnished-img-1', {
        scrollTrigger: {
            trigger: '.furnished-img-1',
            start: 'top center',
            end: '+=230px',
            scrub: true,
        },
    
        x: 400,
        opacity: 0,
    })


    gsap.from('.furnished-img-2', {
        scrollTrigger: {
            trigger: '.furnished-img-2',
            start: 'top center',
            end: '+=230px',
            scrub: true,
        },
    
        x: -400,
        opacity: 0,
    })

    gsap.from('.furnished-img-3', {
        scrollTrigger: {
            trigger: '.furnished-img-3',
            start: 'top center',
            end: '+=230px',
            scrub: true,
        },
    
        x: 400,
        opacity: 0,
    })

    gsap.from('.furnished-img-4', {
        scrollTrigger: {
            trigger: '.furnished-img-4',
            start: 'top center',
            end: '+=230px',
            scrub: true,
        },
    
        x: -400,
        opacity: 0,
    })

    gsap.from('.furnished-anim-1', {
        scrollTrigger: {
            trigger: '.furnished-anim-1',
            start: 'top center',
            end: '+=230px',
            scrub: true,
        },
    
        x: -400,
        opacity: 0,
    })

    gsap.from('.furnished-anim-2', {
        scrollTrigger: {
            trigger: '.furnished-anim-2',
            start: 'top center',
            end: '+=230px',
            scrub: true,
        },
    
        x: 400,
        opacity: 0,
    })

    gsap.from('.furnished-anim-3', {
        scrollTrigger: {
            trigger: '.furnished-anim-3',
            start: 'top center',
            end: '+=230px',
            scrub: true,
        },
    
        x: -400,
        opacity: 0,
    })

    gsap.from('.furnished-anim-4', {
        scrollTrigger: {
            trigger: '.furnished-anim-4',
            start: 'top center',
            end: '+=230px',
            scrub: true,
        },
    
        x: 400,
        opacity: 0,
    })

    gsap.from('.shop-bestsellers__item', {
        scrollTrigger: {
            trigger: '.shop-bestsellers__title', 
            start: '0% center',
            end: '+=250px',
            duration: 1,
        },
        stagger: 0.3,
        y: 20,
        opacity: 0,
    })

    gsap.from('.floyd__bed', {
        scrollTrigger: {
            trigger: '.floyd__section',
            start: '0% center'
            
        },
        duration: 1.5,
        x: -400,
        opacity: 0,
    })

    gsap.from('.floyd__wrapper', {
        scrollTrigger: {
            trigger: '.floyd__section',
            start: '0% center'
            
        },
        duration: 1.5,
        x: 400,
        opacity: 0,
    })

    gsap.from('.revies-in__wrapper', {
        scrollTrigger: {
            trigger: '.revies-in__title',
            start: '0% center',
            end: '+=200px',
            scrub: true,
        },

        xPercent: 60,
    })

    let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(max-width: 761px)", () => {

  gsap.from('.revies-in__item-1', {
    scrollTrigger: {
        trigger: '.revies-in__item-1',
        start: '0% center',
        end: '+=100px',
        scrub: true,
    },

    x: 800,
  });

  gsap.from('.revies-in__item-2', {
    scrollTrigger: {
        trigger: '.revies-in__item-2',
        start: '0% center',
        end: '+=100px',
        scrub: true,
    },

    x: -800,
    ease: 'none',
  });

  gsap.from('.revies-in__item-3', {
    scrollTrigger: {
        trigger: '.revies-in__item-3',
        start: '0% center',
        end: '+=100px',
        scrub: true,
    },

    x: 800,
  });

  
});
let mySplitText5 = new SplitType('.ease-pain__title', {type: 'words'})
const chars5 = mySplitText5.words


gsap.from(chars5, {
    scrollTrigger: {
        trigger: '.ease-pain__section',
        start: '0% center',
    },
    y: 15,
    opacity: 0,
    stagger: 0.2,
})
gsap.from('.ease-pain__img', {
    scrollTrigger: {
    trigger: '.ease-pain__title', 
    start: '50% center',
    },

    'clip-path': 'inset(89% 99% 0 0)',
    stagger: '0.5',

})

const tl2 = gsap.timeline()

gsap.from('.woman', {
    scrollTrigger: {
        trigger: '.feather-stress',
        start: '20% center',

    },

    y: -300,
    opacity: 0,
    duration: 2,
})

gsap.from('.feather-stress__title', {

    scrollTrigger: {
        trigger: '.feather-stress',
        start: '20% center',

    },
        opacity: 0,
        x: 200,
        duration: 1,
        delay: 2,
})

gsap.from('.feather-stress__btn', {

    scrollTrigger: {
        trigger: '.feather-stress',
        start: '20% center',

    },
        opacity: 0,
        x: -200,
        duration: 1,
        delay: 3,
})

                }

              },

              {
                name: 'krypto',
                 
                to: {
                    namespace: ['krypto']
                },
                  
               async leave(data) {
                  pageTransitionIn(data.current) 
                  await delay(495);
                  data.current.container.remove()
                },
                 async enter(data) {
                  gsap.registerPlugin()
                    pageTransitionOut(data.next)
                    initNextWord(data)
                  ScrollTrigger.refresh(true)
                      let triggers = ScrollTrigger.getAll();
                      triggers.forEach( trigger => {
                      trigger.kill();
                      });
                  
                }
              }, 

            {
              name: 'splice',
               
              to: {
                namespace: ['splice']
              },
                
              async leave(data) {
                pageTransitionIn(data.current) 
                await delay(495);
                data.current.container.remove()
              },
               async enter(data) {
                gsap.registerPlugin()
                  pageTransitionOut(data.next)
                  initNextWord(data)
                ScrollTrigger.refresh(true)
                    let triggers = ScrollTrigger.getAll();
                    triggers.forEach( trigger => {
                    trigger.kill();
                    });
                
                    //splice custom

                    gsap.registerPlugin()
        const splice__hero_tl = gsap.timeline()

    
    // Copyright start
    // © Code by T.RICKS, https://www.tricksdesign.com/
    // You have the license to use this code in your projects but not redistribute it to others
    // Tutorial: https://www.youtube.com/watch?v=xiAqTu4l3-g&ab_channel=TimothyRicks
  
    // Find all text with .tricks class and break each letter into a span
    var spanWord = document.getElementsByClassName("splice__span-lines");
    for (var i = 0; i < spanWord.length; i++) {
  
    var wordWrap = spanWord.item(i);
    wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="span-line"><span class="span-line-inner">$2</span></span>');
      
    //not related to this function
    
  
    }
  
  

        

        // splice__hero_tl.from('.splice__nav', {
        //     opacity: 0,
        //     x: -10,
        // })
        splice__hero_tl.from('.splice__svg-bg', {
            delay: 0.85,
            clipPath: () => 'inset' + gsap.utils.random(['(0% 100% 0% 0%)', '(0% 0% 0% 100%)', '(100% 0% 0% 0%)', '(0% 0% 100% 0%)']),
            duration: 1,
        })


        splice__hero_tl.from('.splice__hero-title span', {
            x: -15,
            autoAlpha: 0,
            stagger: .1,
        })

        

        splice__hero_tl.from('.splice__hero-text span', {
            x: -15,
            autoAlpha: 0,
            stagger: .07,
        })

        splice__hero_tl.from('.splice__hero-btn', {
            x: -15,
            autoAlpha: 0,
        })

        splice__hero_tl.from('.splice__nav-list', {
            x: -15,
            autoAlpha: 0,
        })
        
        splice__hero_tl.from('.splice__logo', {
            x: -15,
            autoAlpha: 0,
        }, '<=')

        splice__hero_tl.from('.splice__nav-btns', {
            x: -15,
            autoAlpha: 0,
        }, '<=')

        splice__hero_tl.from('.splice__burger', {
            x: -15,
            autoAlpha: 0,
        }, '<=')

        
        gsap.from('.featured__title', {
            scrollTrigger: {
                trigger: '.featured__title',
                start: 'top bottom',
                toggleActions: 'play reset none restart',
            
            },
            y: 15,
            opacity: 0,
            duration: 1,

            
        })

        gsap.fromTo('.featured__title', {
            scrollTrigger: {
                trigger: '.featured__title',
                start: 'bottom top',
            },
            y: -15,
            opacity: 0,
            duration: 1,

            
        }, {
            y: 0,
            opacity: 1,
        })


        gsap.from('.featured__item img', {
            scrollTrigger: {
                trigger: '.featured__wrapper',
                start: 'top bottom',
                end: '+=550',
            },
            transformOrigin: 'left bottom',
            scale: 0,
            stagger: .5,
            ease: 'back.out'
        })

        gsap.from('.splice__sounds-wrapper', {
            scrollTrigger: {
                trigger: '.splice__sounds-wrapper',
                start: 'top bottom',
                end: '+=550',
            },
            // transformOrigin: 'left bottom',
            scale: 0,
            stagger: .5,
            ease: 'back.out'
        })


//
        let mm = gsap.matchMedia();

mm.add("(min-width: 1050px)", () => {
    gsap.from('.splice__planets-item-two', {
        scrollTrigger: {
            trigger: '.splice__planets-img-box',
            start: 'center bottom',
            
        },
        // transformOrigin: 'left bottom',
        x: 70,
        opacity: 0

        
    })

    gsap.from('.splice__planets-item-one', {
        scrollTrigger: {
            trigger: '.splice__planets-img-box',
            start: 'center bottom',
            
        },
        // transformOrigin: 'left bottom',
        x: -70,
        opacity: 0
        
        
    })

    gsap.from('.in-sync__item:nth-child(1)', {
        scrollTrigger: {
            trigger: '.in-sync__item:nth-child(1)',
            start: 'center bottom',
            
            
        },
        // transformOrigin: 'left bottom',
        x: -70,
        opacity: 0
        
        
    })

    gsap.from('.in-sync__item:nth-child(2)', {
        scrollTrigger: {
            trigger: '.in-sync__item:nth-child(1)',
            start: 'center bottom',
            
            
        },
        // transformOrigin: 'left bottom',
        x: 70,
        opacity: 0
        
        
    })

    gsap.from('.creators__say-item-left', {
        scrollTrigger: {
            trigger: '.creators__say-item-right',
            start: 'center bottom',
            
            
        },
        // transformOrigin: 'left bottom',
        x: -70,
        opacity: 0,
        
        
    })
});

mm.add("(max-width: 1050px)", () => {
    gsap.from('.splice__planets-item-two', {
        scrollTrigger: {
            trigger: '.splice__planets-item-two',
            start: 'center bottom',
            
        },
        // transformOrigin: 'left bottom',
        x: 70,
        opacity: 0

        
    })

    gsap.from('.splice__planets-item-one', {
        scrollTrigger: {
            trigger: '.splice__planets-img-box',
            start: 'center bottom',
            
        },
        // transformOrigin: 'left bottom',
        x: -70,
        opacity: 0
        
        
    })

    gsap.from('.in-sync__item:nth-child(1)', {
        scrollTrigger: {
            trigger: '.in-sync__item:nth-child(1)',
            start: 'center bottom',
            
            
        },
        // transformOrigin: 'left bottom',
        x: -70,
        opacity: 0
        
        
    })

    gsap.from('.in-sync__item:nth-child(2)', {
        scrollTrigger: {
            trigger: '.in-sync__item:nth-child(2)',
            start: 'center bottom',
            
            
        },
        // transformOrigin: 'left bottom',
        x: 70,
        opacity: 0
        
        
    })

    gsap.from('.creators__say-item-left', {
        scrollTrigger: {
            trigger: '.creators__say-item-left',
            start: 'center bottom',
            
            
        },
        // transformOrigin: 'left bottom',
        x: -70,
        opacity: 0,
        
        
    })
});


        

        

        gsap.from('.creators__say-item-right', {
            scrollTrigger: {
                trigger: '.creators__say-item-right',
                start: 'center bottom',
                
                
            },
            // transformOrigin: 'left bottom',
            scale: 0,
            duration: 1,
            ease: 'back.out'
            
            
        })

        gsap.from('.creators-say-earth-img', {
            scrollTrigger: {
                trigger: '.creators__say-item-right',
                start: 'center bottom',
                
                
            },
            // transformOrigin: 'left bottom',
            scale: 0,
            duration: 1,
            ease: 'back.out'
            
            
        })

        gsap.from('.creators-say-earth-img-mob', {
            scrollTrigger: {
                trigger: '.creators-say__title',
                start: 'center bottom',
                
                
            },
            // transformOrigin: 'left bottom',
            scale: 0,
            duration: 1,
            ease: 'back.out'
            
            
        })

        

        gsap.from('.asgood__title', {
            scrollTrigger: {
                trigger: '.asgood__title',
                start: 'top bottom',
                
                
            },
            // transformOrigin: 'left bottom',
            y: 10,
            opacity: 0,
   
        })  

        gsap.from('.asgood__waves', {
            scrollTrigger: {
                trigger: '.asgood__title',
                start: 'top bottom',
                
                
            },
            // transformOrigin: 'left bottom',
            clipPath: 'inset(0% 50% 0% 50%)',
            duration: 1.5,
            
        })

        gsap.from('.asgood__item', {
            scrollTrigger: {
                trigger: '.asgood__title',
                start: 'bottom center',
                
                
            },
            // transformOrigin: 'left bottom',
            
            transformOrigin: 'left top',
            scale: 0,
            stagger: .5,
            ease: 'back.out'
        })

        const html = document.querySelector('html')
        const spliceBurger = document.querySelector('.splice__burger')
        const spliceList = document.querySelector('.splice__nav-list')
        const spliceClose = document.querySelector('.splice__close')
        const spliceBtns = document.querySelector('.splice__nav-btns-clone')
        const burger__tl = gsap.timeline()
        const backwardTl = gsap.timeline()
        spliceBurger.addEventListener('click', e => {
            spliceBurger.classList.add('active')
            spliceList.classList.add('active')
            document.body.classList.add('locked')
            html.classList.add('locked')
            spliceBtns.classList.add('active')
            burger__tl.set('.splice__close', {
                pointerEvents: 'none'
            })

                burger__tl.fromTo('.splice__nav-li', 
                {
                opacity: 0,
                y: 20,
                stagger: .2,
                ease: "power1.out",
                }, 
                {
                    opacity: 1,
                    y: 0,
                    stagger: .2,
                    ease: "power1.out",  
                }).fromTo(spliceBtns, {
                            opacity: 0,
                            y: 15,
                        }, {
                            opacity: 1,
                            y: 0,
                        })
                    

                burger__tl.set('.splice__close', {
                pointerEvents: 'all'
                })

            
        })

        spliceClose.addEventListener('click', e => {
            backwardTl.set('.splice__close', {
                pointerEvents: 'none'
            })
                backwardTl.to('.splice__nav-li', 
                
                {
                    opacity: 0,
                    y: 20,
                    stagger: .2,
                    ease: "power1.out",  
                    
                }).to(spliceBtns, {
                            opacity: 0,
                            y: 15,
                            onComplete: () => {
                                burger__tl.kill()
                                backwardTl.kill()
                                // burger__tl.pause()
                                spliceBurger.classList.remove('active')
                                spliceList.classList.remove('active')
                                document.body.classList.remove('locked')
                                html.classList.remove('locked')
                                spliceBtns.classList.remove('active')
                            }
                        }).set('.splice__close', {
                        pointerEvents: 'all'
                        }).set('.splice__nav-li', {
                            y: 0,
                            opacity: 1,
                        })

        })


        window.addEventListener('resize', e => {
            if (window.innerWidth >= 1167) {
                console.log('123');
                spliceBurger.classList.remove('active')
                spliceList.classList.remove('active')
                document.body.classList.remove('locked')
                html.classList.remove('locked')
                spliceBtns.classList.remove('active')
            }
        })


        //direction-changing

        let currentScroll = 0
        let isScrollingDown = true
        

        let tween = gsap.to('.splice__planets-img', {
            rotate: 40000,
            duration: 4000,
            ease: 'linear'
        }).totalProgress(0.5)

        

        let tween2 = gsap
        .to('.splice__planets-imgSmall', {
            rotate: -40000,
            duration: 4000,
            ease: 'linear',
        }).totalProgress(0.5)
        


            


        window.addEventListener('scroll', e => {
            if (window.pageYOffset > currentScroll) {
                isScrollingDown = true
            }

            else {
                isScrollingDown = false
            }

            gsap.to(tween, {
                timeScale: isScrollingDown ? 1 : -1
            })

            gsap.to(tween2, {
                timeScale: isScrollingDown ? 1 : -1
            })
            

            currentScroll = window.pageYOffset
        })

        //splice custom end

              }
            },
            {
                name: 'once',
                once() {
                  initLoader()
                }
            },
        ],

            
        })

        

        // Animation - Page transition In
function pageTransitionIn() {
	var tl = gsap.timeline();

  tl.call(function() {
    document.querySelector('html').style.overflowY = 'hidden'
    body.style.overflowY = 'hidden'
    lenis.stop()
  });

  tl.set(".loading-screen", { 
		top: "100%" 
	});	

  tl.set(".loading-words", { 
		opacity: 0,
    y: 0
	});

  tl.set("html", { 
		cursor: "wait"
	});

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "10vh",
    });	
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "5vh",
    });	
  }

	tl.to(".loading-screen", {
		duration: .5,
		top: "0%",
		ease: "Power4.easeIn"
	});

  if ($(window).width() > 540) { 
    tl.to(".loading-screen .rounded-div-wrap.top", {
      duration: .4,
      height: "10vh",
      ease: "Power4.easeIn"
    },"=-.5");
  } else {
    tl.to(".loading-screen .rounded-div-wrap.top", {
      duration: .4,
      height: "10vh",
      ease: "Power4.easeIn"
    },"=-.5");
  }

  tl.to(".loading-words", {
		duration: .8,
		opacity: 1,
    y: -50,
    ease: "Power4.easeOut",
    delay: .05
	});

  tl.set(".loading-screen .rounded-div-wrap.top", {
		height: "0vh"
	});

	tl.to(".loading-screen", {
		duration: .8,
		top: "-100%",
		ease: "Power3.easeInOut"
	},"=-.2");

  tl.to(".loading-words", {
		duration: .6,
		opacity: 0,
    ease: "linear"
	},"=-.8");

  tl.to(".loading-screen .rounded-div-wrap.bottom", {
		duration: .85,
		height: "0",
		ease: "Power3.easeInOut"
	},"=-.6");

  tl.set("html", { 
		cursor: "auto"
	},"=-0.6");

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "10vh"
    });
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "5vh"
    });
  }

  tl.set(".loading-screen", { 
		top: "100%" 
	});	

  tl.set(".loading-words", {
		opacity: 0,
	});
  
}

    
// Animation - Page transition Out
function pageTransitionOut() {
	var tl = gsap.timeline();

  if ($(window).width() > 540) { 
    tl.set(".once-in", {
      y: "50vh",
    });
  } else {
    tl.set(".once-in", {
      y: "20vh"
    });
  }
  
  tl.call(function() {
    document.querySelector('html').style.overflowY = 'unset'
    body.style.overflowY = 'unset'
    lenis.start()
  });

  tl.to(".once-in", {
    duration: 1,
    y: "0vh",
    stagger: .05,
    ease: "Expo.easeOut",
    delay: .8,
    clearProps: "true"
  });

}

function initNextWord(data) {
    // update Text Loading https://github.com/barbajs/barba/issues/507
    let parser = new DOMParser();
    let dom = parser.parseFromString(data.next.html, 'text/html');
    let nextProjects = dom.querySelector('.loading-words');
    document.querySelector('.loading-words').innerHTML = nextProjects.innerHTML;
  }        

  function initLoader() { 
    var tl = gsap.timeline();
  
      tl.set(".loading-screen", { 
          top: "0",
      });	
  
    if ($(window).width() > 540) { 
      tl.set(".once-in", {
        y: "50vh"
      });
    } else {
      tl.set(".once-in", {
        y: "10vh"
      });
    }
  
    tl.set(".loading-words", { 
          opacity: 1,
      y: -50
      });
  
    if ($(window).width() > 540) { 
      tl.set(".loading-screen .rounded-div-wrap.bottom", { 
        height: "10vh",
      });	
    } else {
      tl.set(".loading-screen .rounded-div-wrap.bottom", { 
        height: "5vh",
      });	
    }
  
    tl.set("html", { 
          cursor: "wait"
      });
    
      tl.to(".loading-screen", {
          duration: .8,
          top: "-100%",
          ease: "Power4.easeInOut",
      delay: .5
    });
  
    tl.to(".loading-screen .rounded-div-wrap.bottom", {
          duration: 1,
          height: "0vh",
          ease: "Power4.easeInOut"
      },"=-.8");
  
    tl.to(".loading-words", {
          duration: .3,
          opacity: 0,
      ease: "linear",
      },"=-.8");
  
      tl.set(".loading-screen", { 
          top: "calc(-100%)" 
      });	
  
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
          height: "0vh"
      });	
  
    tl.to(".once-in", {
          duration: 1,
      y: "0vh",
      stagger: .05,
          ease: "Expo.easeOut",
      clearProps: "true"
      },"=-.8");
  
    tl.set("html", { 
          cursor: "auto",
      },"=-.8");
      
  }

  function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}

// setInterval(() => {
//     console.log(window.scrollY);
// }, 500);

// if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
//   initLoader()
//   setTimeout(() => {
    
//     window.scrollTo(0, 0);
    
//   }, 100);
// }

 



