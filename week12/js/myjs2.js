$(function() {
    var tarcie = (1 / 6);
    var cialo_x = 0,
        cialoRuchX = 0,
        uszy_x = 0,
        uszy_y = 0,
        uszyRuchX = 0,
        uszyRuchY = 0,
        zrenica_x = 0,
        zrenica_y = 0,
        zrenicaRuchX = 0,
        zrenicaRuchY = 0,
        oko_x = 0,
        oko_y = 0,
        okoRuchX = 0,
        okoRuchY = 0,
        powieka_gorna_x = 0,
        powieka_gorna_y = 0,
        powiekaGornaRuchX = 0,
        powiekaGornaRuchY = 0,
        powieka_dolna_x = 0,
        powieka_dolna_y = 0,
        powiekaDolnaRuchX = 0,
        powiekaDolnaRuchY = 0,
        usta_x = 0,
        usta_y = 0,
        ustaRuchX = 0,
        ustaRuchY = 0;

    function animacja() {
        cialo_x += (cialoRuchX - cialo_x) * tarcie;
        $('.cialo').css({
            '-webkit-transform': 'rotate(' + -cialo_x + 'deg)',
            'transform': 'rotate(' + -cialo_x + 'deg)'
        });
        uszy_x += (uszyRuchX - uszy_x) * tarcie;
        uszy_y += (uszyRuchY - uszy_y) * tarcie;
        if (uszy_x < 0) {
            $('.ucho.lewe').css({
                '-webkit-transform': 'translate(' + -uszy_x * 7 + 'px, ' + -uszy_y + 'px)',
                'transform': 'translate(' + -uszy_x * 7 + 'px, ' + -uszy_y + 'px)'
            });
            $('.ucho.prawe').css({
                '-webkit-transform': 'translate(' + -uszy_x + 'px, ' + -uszy_y + 'px)',
                'transform': 'translate(' + -uszy_x + 'px, ' + -uszy_y + 'px)'
            });
        } else {
            $('.ucho.lewe').css({
                '-webkit-transform': 'translate(' + -uszy_x + 'px, ' + -uszy_y + 'px)',
                'transform': 'translate(' + -uszy_x + 'px, ' + -uszy_y + 'px)'
            });
            $('.ucho.prawe').css({
                '-webkit-transform': 'translate(' + -uszy_x * 7 + 'px, ' + -uszy_y + 'px)',
                'transform': 'translate(' + -uszy_x * 7 + 'px, ' + -uszy_y + 'px)'
            });
        }
        zrenica_x += (zrenicaRuchX - zrenica_x) * (tarcie * 3);
        zrenica_y += (zrenicaRuchY - zrenica_y) * (tarcie * 3);
        $('.zrenica').css({
            '-webkit-transform': 'translate(' + -zrenica_x + 'px, ' + -zrenica_y + 'px)',
            'transform': 'translate(' + -zrenica_x + 'px, ' + -zrenica_y + 'px)'
        });
        oko_x += (okoRuchX - oko_x) * tarcie;
        oko_y += (okoRuchY - oko_y) * tarcie;
        if (oko_x < 0) {
            $('.oko.lewe').css({
                'z-index': '2',
                '-webkit-transform': 'translate(' + -oko_x * 2 + 'px, ' + -oko_y + 'px)',
                'transform': 'translate(' + -oko_x * 2 + 'px, ' + -oko_y + 'px)'
            });
            $('.oko.prawe').css({
                'z-index': '1',
                '-webkit-transform': 'translate(' + -oko_x + 'px, ' + -oko_y + 'px)',
                'transform': 'translate(' + -oko_x + 'px, ' + -oko_y + 'px)'
            });
        } else {
            $('.oko.prawe').css({
                'z-index': '2',
                '-webkit-transform': 'translate(' + -oko_x * 2 + 'px, ' + -oko_y + 'px)',
                'transform': 'translate(' + -oko_x * 2 + 'px, ' + -oko_y + 'px)'
            });
            $('.oko.lewe').css({
                'z-index': '1',
                '-webkit-transform': 'translate(' + -oko_x + 'px, ' + -oko_y + 'px)',
                'transform': 'translate(' + -oko_x + 'px, ' + -oko_y + 'px)'
            });
        }
        powieka_gorna_x += (powiekaGornaRuchX - powieka_gorna_x) * tarcie;
        powieka_gorna_y += (powiekaGornaRuchY - powieka_gorna_y) * tarcie;
        $('.powieka_gorna').css({
            '-webkit-transform': 'translate(' + -powieka_gorna_x + 'px, ' + -powieka_gorna_y + 'px)',
            'transform': 'translate(' + -powieka_gorna_x + 'px, ' + -powieka_gorna_y + 'px)'
        });
        powieka_dolna_x += (powiekaDolnaRuchX - powieka_dolna_x) * tarcie;
        powieka_dolna_y += (powiekaDolnaRuchY - powieka_dolna_y) * tarcie;
        $('.powieka_dolna').css({
            '-webkit-transform': 'translate(' + -powieka_dolna_x + 'px, ' + -powieka_dolna_y + 'px)',
            'transform': 'translate(' + -powieka_dolna_x + 'px, ' + -powieka_dolna_y + 'px)'
        });
        usta_x += (ustaRuchX - usta_x) * tarcie;
        usta_y += (ustaRuchY - usta_y) * tarcie;
        $('.usta').css({
            '-webkit-transform': 'translate(' + -usta_x + 'px, ' + -usta_y + 'px)',
            'transform': 'translate(' + -usta_x + 'px, ' + -usta_y + 'px)'
        });
        window.requestAnimationFrame(animacja);
    }
    $(window).on('mousemove click', function(e) {
        var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
        var lMouseY = Math.max(-100, Math.min(100, ($(window).height() / 2) - e.clientY));
        cialoRuchX = (5 * lMouseX) / 200;
        uszyRuchX = (3 * -lMouseX) / 100;
        uszyRuchY = (10 * -lMouseY) / 100;
        zrenicaRuchX = (25 * lMouseX) / 200;
        zrenicaRuchY = (13 * lMouseY) / 100;
        okoRuchX = (20 * lMouseX) / 100;
        if (lMouseY <= 0) {
            okoRuchY = (10 * lMouseY) / 100;
            powiekaDolnaRuchY = (25 * lMouseY) / 100;
        } else {
            okoRuchY = (30 * lMouseY) / 100;
            powiekaDolnaRuchY = (55 * lMouseY) / 100;
        }
        powiekaGornaRuchX = (25 * lMouseX) / 100;
        powiekaGornaRuchY = (35 * lMouseY) / 100;
        powiekaDolnaRuchX = (25 * lMouseX) / 100;
        ustaRuchX = (35 * lMouseX) / 100;
        ustaRuchY = (10 * lMouseY) / 100;
    });
    animacja();
});