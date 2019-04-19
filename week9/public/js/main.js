function isNumberPrime(value){
    // Conver input to integer
    let number = parseInt(value);

    // validate if number is prime or not
    if(number === 1){return false; }
    else if(number === 2) { return true; }
    else{
        for(let val = 2; val < number; val++){
            if(number % val === 0){ return false; }
        }
        return true;
    }
}

function doYourThing(){
    if($('#input-number').val() <= 0){
        $('#error').removeClass('hidden');
        $('#error').html("Number must be grater than 0");
    }
    else if(!$('#input-number').val() || $('#input-number').val().toString() === 'e'){
        $('#error').removeClass('hidden');
        $('#error').html("Must enter a valid number");
     } 
     else{
         $('#error').addClass('hidden');
         if(!isNumberPrime($('#input-number').val())){
             $('#attempts ol').append('<li class="not-prime">'+$('#input-number').val()+" is NOT a prime number</li>");
         }
         else{
            $('#attempts ol').append('<li class="is-prime">'+$('#input-number').val()+" is a prime number</li>");
         }
     }
}

(function($){
    $('form').on('submit', function(e){
        e.preventDefault();
        doYourThing();
    });

    $('button').on('click', function(){
        doYourThing();
    });

})(jQuery);