let currentSendCrypto = document.querySelector('.current-crypto');
let sendCryptoList = document.querySelector('.send-cryptocurency-list');
let personalAccountNavigation = document.querySelector('.personal-account-navigation-lists');
let withdrawNavigation = document.querySelector(".choice-withdraw-navigation");
let bankWithdrawChoise = document.querySelector('.withdraw-bank-choise');
let mobileBankWithdrawChoise = document.querySelector('.mobole-withdraw-bank-choise');

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

$(bankWithdrawChoise).change(function () {
    if ($('#InternationalBankTransferBtn').is(':checked')) {
        $('#internationalBankTransferBlock').show();
        $('#sepaTransferBlock').hide();
    } else if ($('#sepaTransfer').is(':checked')) {
        $('#sepaTransferBlock').show();
        $('#internationalBankTransferBlock').hide();
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

//выбор iban и sepa mobile
$(mobileBankWithdrawChoise).change(function () {
    if ($('#mobileInternationalBankTransferBtn').is(':checked')) {
        $('#mobileInternationalBankTransferBlock').show();
        $('#mobileSepaTransferBlock').hide();
    } else if ($('#MobileSepaTransfer').is(':checked')) {
        $('#mobileSepaTransferBlock').show();
        $('#mobileInternationalBankTransferBlock').hide();
    }
});