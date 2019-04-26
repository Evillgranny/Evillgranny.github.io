
$('#modalGetLogin').change(function(){
    if($("#modalGetLogin:checked")) {
        $('#loginContent').show();
        $('#signInContent').hide();
    }
});

$('#modalGetSign').change(function(){
    if($("#modalGetSign:checked")) {
        $('#loginContent').hide();
        $('#signInContent').show();
    }
});

$('#deposit').change(function() {
   if($("#deposit:checked")) {
       $('#depositBlock').show();
       $('#withdrawBlock').hide();
   }
});
$('#withdraw').change(function() {
    if($("#withdraw:checked")) {
        $('#withdrowBlock').show();
        $('#depositBlock').hide();
    }
});