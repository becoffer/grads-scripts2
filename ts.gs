'reinit'
'grads/open.gs'
'set grads off'
'set x 15'
'set y 15'
'set z 1 8'
'define mag1=mag(uinterp,vinterp)'
'set t 1 721'
'set xaxis 0 12 1'
'set yaxis 10 305 20'
'grads/color.gs -3 2 .05 -kind rainbow'
'd mag(uinterp,vinterp)-mag1'
'/data/bricec/grads/xcbar.gs -fs 20 '
'printim windpert_ts.png'
