$('#portfolioAll').click(function() {
  portfolioBar.className = "bar state1"
  big.className = "big" 
  small_1.className = "small_1"
  small_2.className = 'small_2'
})


$('#portfolioFramework').click(function() {
  portfolioBar.className = "bar state2"
  big.className = "big" 
  small_1.className = "small_1"
  $('#small_2').addClass('hidden')
})


$('#portfolioValina').click(function() {
  portfolioBar.className = "bar state3"
  $('#small_1').addClass('hidden')
  $('#big').addClass('hidden')
  small_2.className = 'small_2'
  $('#small_2').addClass('move_small_2')
  small_2.className = 'small_2_change'
})

