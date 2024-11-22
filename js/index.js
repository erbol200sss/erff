document.addEventListener('DOMContentLoaded', () => {
    const days = document.getElementById('days'),
        hours = document.getElementById('hours'),
        minutes = document.getElementById('minutes'),
        seconds = document.getElementById('seconds');

    const deadline = '2024-10-25';
    const getTimeRemaining = (d) => {
        const time = Date.parse(d) - Date.parse(new Date);

        const days = Math.floor((time / 1000 / 60 / 60 / 24));
        const hours = Math.floor(((time / 1000 / 60 / 60) % 24));
        const minutes = Math.floor(((time / 1000 / 60) % 60));
        const seconds = Math.floor(((time / 1000) % 60));

        return {
            total: time,
            days,
            hours,
            minutes,
            seconds
        }
    }
    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num
        } else {
            return num
        }
    }
    const putTime = () => {
        const allTime = getTimeRemaining(deadline) // => {total, days, ...}
        days.innerHTML = addZero(allTime.days);
        hours.innerHTML = addZero(allTime.hours);
        minutes.innerHTML = addZero(allTime.minutes);
        seconds.innerHTML = addZero(allTime.seconds);

        if (allTime.total <= 0) {
            days.innerHTML = '00';
            hours.innerHTML = '00';
            minutes.innerHTML = '00';
            seconds.innerHTML = '00';
            clearInterval(intervalId)
        }
    }

    const intervalId = setInterval(putTime, 1000);


    $('.carousel-inner').slick({
        dots: true,
        prevArrow: '<button class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-chevron-right"></i></button>'
    });


    window.addEventListener('scroll', () => {
        let wScroll = window.pageYOffset || document.documentElement.scrollTop

        if (wScroll > 30) {
            document.querySelector('.header').classList.add('active')
        } else {
            document.querySelector('.header').classList.remove('active')
        }
        
    });


    document.querySelector('.bars').addEventListener('click', () => {
        document.querySelector('.slide-menu').classList.add('open')
    });

    document.querySelector('.close-menu').addEventListener('click', () => {
        document.querySelector('.slide-menu').classList.remove('open')
    });

    wow = new WOW(
        {
        boxClass:     'wow',    
        animateClass: 'animated', 
        offset:       0,          
        mobile:       true,       
        live:         true       
    }
    );
    wow.init();


    const openModalBtn = document.querySelectorAll('.openModal');
    const modal = document.querySelector('#modalSubmit');
    const closeModal = document.querySelector('.close-modal');

    openModalBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    })


    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        console.log(event.target)
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const indPriceTable = document.querySelector('.price-tables .individual'),
          companyPriceTable = document.querySelector('.price-tables .company'),
          switchInd = document.querySelector('.switch-toggles .individual'),
          switchCompany = document.querySelector('.switch-toggles .company');


    switchInd.classList.add('active');

    switchInd.addEventListener('click', function() {
        this.classList.add('active');

        this.closest('.switch-toggles').classList.remove('active');
        indPriceTable.classList.add('active');

        companyPriceTable.classList.remove('active');
    });


    switchCompany.addEventListener('click', function() {
        this.classList.add('active');

        this.closest('.switch-toggles').classList.remove('active');
        companyPriceTable.classList.add('active');

        // Array.from(this.parentNode.children).forEach((sibl) => {
        //     sibl.classList.remove('active')
        // })

        indPriceTable.classList.remove('active');
    })

});

