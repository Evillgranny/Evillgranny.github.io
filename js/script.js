let currentSendCrypto = document.querySelector('.current-crypto');
let sendCryptoList = document.querySelector('.send-cryptocurency-list');
let personalAccountNavigation = document.querySelector('.personal-account-navigation-lists');
let withdrawNavigation = document.querySelector(".choice-withdraw-navigation")

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


//Способ пополнения
$(personalAccountNavigation).change(function () {
   if ($('#btnDepositBank').is(':checked')) {
       $('#bankDepositBlock').show();
       $('#cryptoDepositBlock').hide();
    } else if ($('#btnDepositCrypto').is(':checked')) {
       $('#cryptoDepositBlock').show();
       $('#bankDepositBlock').hide();
   }
});


// Mobile personal account
//Показать банковский деп (моб)

$('#mobileBankTransferBtn').click(function () {
    $('#mobileDepositBlock').show();
    $('#mobileCryptoBlock').hide();
});

//Показать крипто деп (моб)

$('#mobileBtnDepositCrypto').click(function () {
    $('#mobileCryptoBlock').show();
    $('#mobileDepositBlock').hide();
});