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
    if ($('#internationalBankTransferBtn').is(':checked')) {
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
//Выбор в настройках
$('.setting-menu-lists').change(function () {
    if ($('#settingBankAccount').is(':checked')) {
        console.log(1);
        $('#bankAccountBlock').show();
        $('#changePasswordBlock').hide();
        $('#securityBlock').hide();
    } else if ($('#settingChangePassword').is(':checked')) {
        console.log(2)
        $('#bankAccountBlock').hide();
        $('#changePasswordBlock').show();
        $('#securityBlock').hide();
    } else if ($('#settingSecurity').is(':checked')) {
        console.log(3)
        $('#bankAccountBlock').hide();
        $('#changePasswordBlock').hide();
        $('#securityBlock').show();
    }
});
//Выбор в мобильных настройках
$('.mobile-setting-choise').change(function () {
    if ($('#mobileSettingBankAccount').is(':checked')) {
        console.log(1);
        $('#mobileBankAccountBlock').show();
        $('#mobileChangePassword').hide();
        $('#mobileSettingSecurityBlock').hide();
    } else if ($('#mobileSettingChangePassword').is(':checked')) {
        console.log(2)
        $('#mobileBankAccountBlock').hide();
        $('#mobileChangePassword').show();
        $('#mobileSettingSecurityBlock').hide();
    } else if ($('#mobileSettingSecurity').is(':checked')) {
        console.log(3)
        $('#mobileBankAccountBlock').hide();
        $('#mobileChangePassword').hide();
        $('#mobileSettingSecurityBlock').show();
    }
});