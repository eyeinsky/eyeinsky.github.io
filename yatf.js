


function init(tbl, n) {
   rida = $('<tr id=filter>')
   sisu = $('<th><input />')
   for(i=0;i<n;i++) {
      x = sisu.clone().attr({'data-ix': i})
      x.on('keyup', filt)
      rida.append(x)
      }
   $(tbl).append(rida)
   }


function filt(e) {

   filters = Array()
   $('#filter th').map(function(item) {
      td = $(this)
      val = td.children('input').val()
      if (val.length > 0) {
         ix = td.attr('data-ix')
         filters.push([ix, RegExp(val,'i')])
         }
      })
   $.map($('tbody tr'), function(row,i) {
      row = $(row)
      func = function(ix, pat) {
         td = row.children().eq(ix)
         txt = td.text()
         return pat.test(txt) }
      include = filters.reduce(function(memo, filt) {
         return memo && func(filt[0], filt[1])
         }, true)

      if (include) row.css('display','table-row')
      else row.css('display', 'none')
      })
   }

function keri(n) {
   this.click()
   // $('html,body').animate({ scrollTop: $('#'+n).offset().top }), 'slow');
   }


function scplay(fn, t) {
   var url = 'https://soundcloud.com/puhatajamangida/' + fn + '#t=' + t
   window.open(url)
   }

window.onload = function() {
   // init("thead", 4)

   b = false
   n = $('#nrs')
   $('#nrs-nupp').on('click', function(ev) {
      ev.preventDefault()
      if (b) {
         // console.log(1)
         n.anim({ height: '0em' }); b = !b;
         }
      else {
         // console.log(2)
         n.anim({ height: '10em' }); b = !b;
         };
      })



   }
