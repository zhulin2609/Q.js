describe('repeat', function () {

    it('should able repeat', function (done) {
        new Q({
            el: '#tpl1',
            data: {
                items: [
                    { msg: 'hello' },
                    { msg: 'world' }
                ]
            }
        });

        setTimeout(function () {
            var lis = $('li', '#tpl1');
            lis.length.should.equal(2);
            lis[0].innerText.should.equal('hello');
            lis[1].innerText.should.equal('world');
            done();
        }, 100);
    });

    it('should able multiple repeat', function (done) {
        new Q({
            el: '#tpl2',
            data: {
                items: [
                    { msgs: [{ text: 'hello' }, { text: 'world' }] },
                    { msgs: [{ text: 'hello' }, { text: 'qq' }] }
                ]
            }
        });
        setTimeout(function () {
            var divs = $('div', '#tpl2'), ps;
            divs.length.should.equal(2);
            ps = $(divs[0]).find('p');
            ps[0].innerText.should.equal('hello');
            ps[1].innerText.should.equal('world');
            ps = $(divs[1]).find('p');
            ps[0].innerText.should.equal('hello');
            ps[1].innerText.should.equal('qq');
            done();
        }, 100);
    });

    it('should able bind event', function (done) {
        new Q({
            el: '#tpl3',
            methods: {
                onclick: function () {
                    done();
                }
            }
        });
        $('a', '#tpl3').click();
    });

    it('should able to toggle class', function () {
        var vm = new Q({
            el: '#tpl4',
            data: {
                toggle: true
            }
        });

        var toggle = $('.toggle-me', '#tpl4');
        toggle.length.should.equal(1);

        vm.$set('toggle', false);
        toggle.hasClass('toggle-me').should.equal(false);
    });
});
