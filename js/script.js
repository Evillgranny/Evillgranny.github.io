let currentSendCrypto = document.querySelector('.current-crypto');
let sendCryptoList = document.querySelector('.send-cryptocurency-list');
let depositNavigation = document.querySelector('.choice-navigation');
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

$('#deposit').change(function() {
   if($("#deposit:checked")) {
       $('#depositBlock').show();
       $('#withdrawBlock').hide();
   }
});


// переключение на вывод денег
$('#withdraw').change(function() {
    if($("#withdraw:checked")) {
        $('#withdrawBlock').show();
        $('#depositBlock').hide();
    }
});


//выдвигается список с криптой
$(currentSendCrypto).click(function () {
    if ($(sendCryptoList).is(":hidden")) {
        $(sendCryptoList).show();
    } else if ($(sendCryptoList).is(":visible")) {
        $(sendCryptoList).hide();
    }
});


//выбор крипты для пополнения
$(sendCryptoList).click(function (e) {
    currentSendCrypto.textContent = e.target.textContent;
    $(sendCryptoList).hide();
});


//Способ пополнения
$(depositNavigation).change(function () {
   if ($('#depositBankTransaction').is(':checked')) {

       $('.bank-transfer-variant').toggleClass('choice-navigation-variant-check',true);
       $('.crypto-variant').toggleClass('choice-navigation-variant-check',false);


       $('#bankTransaction').show();
       $('#cryptocurrency').hide();
    } else if ($('#depositCrypto').is(':checked')) {
       $('.crypto-variant').toggleClass('choice-navigation-variant-check',true);
       $('.bank-transfer-variant').toggleClass('choice-navigation-variant-check',false);

       $('#bankTransaction').hide();
       $('#cryptocurrency').show();
   }
});
//Способ вывода

$(withdrawNavigation).change(function () {
   if ($('#withdrawBankTransaction').is(':checked')) {
        $('.withdraw-bank-variant').toggleClass('choice-navigation-variant-check',true);
        $('.withdraw-crypto-variant').toggleClass('choice-navigation-variant-check',false);

        $('#withdrawCryptoBlock').hide();
        $('#withdrawBankBlock').show();
    } else if ($('#withdrawCrypto').is(':checked')) {
       $('.withdraw-bank-variant').toggleClass('choice-navigation-variant-check',false);
       $('.withdraw-crypto-variant').toggleClass('choice-navigation-variant-check',true);

       $('#withdrawCryptoBlock').show();
       $('#withdrawBankBlock').hide();
   }
});
