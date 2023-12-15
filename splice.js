
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

        
