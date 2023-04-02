function pagination() {
    var offset = $(document).scrollTop();
    var windowHeight = $(window).height();
    var $body = $('body');
    var padding = .75;
    var pages = Object.keys($('.page')).filter((section) => Number(section) + 1).map(section => Number(section) + 1)

    pages.map((page) => {
        if (offset > (windowHeight * (page - 2 + padding))) {
            $body.removeClass().addClass("page-" + page);
        }
    });
};

pagination();

$(document).on('scroll', pagination);

$(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});

ScrollOut({
    onShown: function(el) {
        // remove the class
        el.classList.remove("animated");

        // force reflow
        void el.offsetWidth;

        // re-add the animated cl
        el.classList.add("animated");
    }
});

