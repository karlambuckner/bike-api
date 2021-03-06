import {Bike} from './../js/bike.js';

$(document).ready(function() {
  $('#bikeIdButton').click(function() {
    let bikeId = $("#bikeId").val();
    $('#bikeId').val("");
    $('#output').html('')
    let bike = new Bike();
    bike.bikeById(bikeId);
  });
  $('#bikeSearchButton').click(function() {
    let search = $("#search").val();
    $('#search').val();
    $('#patient').html("<h3>Please be patient, this may take a while...</h3>")
    $('#output').html('')
    setTimeout(function(){
      alert("Please continue to be patient");
    }, 5000);
    let bike = new Bike();
    bike.bikeBySearch(search);
  });
});
