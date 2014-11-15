


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

window.onload = function() { init("thead", 4) }



// google analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-56767657-1', 'auto');
ga('send', 'pageview');
