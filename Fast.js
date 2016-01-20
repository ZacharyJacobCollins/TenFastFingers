setInterval(function(){
  let word = $(".highlight").text();
  $("#inputfield").val(word).trigger({
    type:"keyup",
    which: 32
  });
},1);
Status API Training Shop Blog About Pricing
