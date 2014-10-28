


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
