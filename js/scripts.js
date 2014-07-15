$(document).ready(function(){

  $("form#contact-info").submit(function(event) {
    event.preventDefault();
    var newFirstName = $("input#first-name").val();
    var newLastName = $("input#last-name").val();
    var newStreet = $("input#street").val();
    var newCity = $("input#city").val();
    var newState = $("input#state").val();

    var newPerson = { firstName: newFirstName,
                       lastName: newLastName,
                       addresses: []
                     }

    $('ul#contacts').append("<li>"+newPerson.firstName +
                                 " " + newPerson.lastName +"</li>");
    $("input#first-name").val('');
    $("input#last-name").val('');

    $(".new-addresses").each(function(){
        var tempStreet = $(this).find(".newStreet").val();
        var tempCity = $(this).find(".newCity").val();
        var tempState = $(this).find(".newState").val();
        var newAddress = {  street: tempStreet,
                            city: tempCity,
                            state: tempState
                        };
        newPerson.addresses.push(newAddress);
    });

    console.log(newPerson);

    $('ul#contacts').click(function() {
      $('#contact-details p').text('');
      var addressInfo = newPerson.addresses.forEach(function(address){
      $('#contact-details p').append(address.street+" "+address.city+" "+ address.state +"<br />");
      });
    });
  });


  // $("button#another-address").click(function(){
  //   alert("click worked");
  //     $("div#address-append").append("<input type='text' placeholder='Enter a street'>
  //         <input id='city' type='text' placeholder='Enter a city'>
  //         <input id='state' type='text' placeholder='Enter a state'>");
  // });
    var anotherStreet = "<input class='newStreet' type='text' placeholder='Enter a street'>"
    var anotherCity = "<input class='newCity' type='text' placeholder='Enter a city'>"
    var anotherState = "<input class='newState' type='text' placeholder='Enter a state'>"
    $("div#form-container").append("<div class='new-addresses'> <form>" + anotherStreet + anotherCity + anotherState + "</form> </div>");

  $('#another-address').click(function() {
    $("div#form-container").append("<div class='new-addresses'> <form>" + anotherStreet + anotherCity + anotherState + "</form> </div>");
  });


});
