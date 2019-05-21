let currentSendCrypto = document.querySelector('.current-crypto');
let sendCryptoList = document.querySelector('.send-cryptocurency-list');
let personalAccountNavigation = document.querySelector('.personal-account-navigation-lists');
let withdrawNavigation = document.querySelector(".choice-withdraw-navigation");
let bankWithdrawChoise = document.querySelector('.withdraw-bank-choise');
let mobileBankWithdrawChoise = document.querySelector('.mobile-withdraw-bank-choise');
let menuBtn = document.querySelector('.navbar-toggler');
let btnIcon = document.querySelector('.navbar-toggler-icon');
let choseMobileSettingCategoryBtn = document.querySelector('#chooseSettingBtn');
let navMenu = document.querySelector('.navigation-menu');

$(menuBtn).click(function () {
    if ($(menuBtn).hasClass('collapsed')) {
        $(btnIcon).addClass('close-menu-icon')
    } else {
        $(btnIcon).removeClass('close-menu-icon');
    }
})
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
        chooseWithdrawBtn.textContent = "International Bank transfer";
    } else if ($('#sepaTransfer').is(':checked')) {
        $('#sepaTransferBlock').show();
        $('#internationalBankTransferBlock').hide();
        chooseWithdrawBtn.textContent = "SEPA transfer";
    }
});

function closeMobileMenu() {
    let navbarToggler = document.querySelector('.navbar-toggler');
    btnIcon.classList.remove('close-menu-icon');
    navMenu.classList.remove('show');
    navbarToggler.classList.add('collapsed');
    navbarToggler.setAttribute('aria-expanded', 'false');
}
// Mobile personal account
//Показать банковский деп (моб)

$('#mobileBankTransferBtn').click(function () {
    $('#mobileDepositBlock').show();
    $('#mobileCryptoBlock').hide();
    closeMobileMenu();
});

//Показать крипто деп (моб)

$('#mobileBtnDepositCrypto').click(function () {
    $('#mobileCryptoBlock').show();
    $('#mobileDepositBlock').hide();
    closeMobileMenu()
});

//выбор iban и sepa mobile
$(mobileBankWithdrawChoise).change(function () {
    if ($('#mobileInternationalBankTransferBtn').is(':checked')) {
        $('#mobileInternationalBankTransferBlock').show();
        $('#mobileSepaTransferBlock').hide();
        bankMobileChoose.textContent = 'International Bank transfer'
    } else if ($('#mobileSepaTransfer').is(':checked')) {
        $('#mobileSepaTransferBlock').show();
        $('#mobileInternationalBankTransferBlock').hide();
        bankMobileChoose.textContent = 'SEPA transfer'
    }
});
//Выбор в настройках
$('.setting-menu-lists').change(function () {
    if ($('#settingBankAccount').is(':checked')) {
        $('#bankAccountBlock').show();
        $('#changePasswordBlock').hide();
        $('#securityBlock').hide();
    } else if ($('#settingChangePassword').is(':checked')) {
        $('#bankAccountBlock').hide();
        $('#changePasswordBlock').show();
        $('#securityBlock').hide();
    } else if ($('#settingSecurity').is(':checked')) {
        $('#bankAccountBlock').hide();
        $('#changePasswordBlock').hide();
        $('#securityBlock').show();
    }
});
//Выбор в мобильных настройках
$('.mobile-setting-choise').change(function () {
    if ($('#mobileSettingBankAccount').is(':checked')) {
        choseMobileSettingCategoryBtn.textContent = 'Bank Account'
        $('#mobileBankAccountBlock').show();
        $('#mobileChangePassword').hide();
        $('#mobileSettingSecurityBlock').hide();
    } else if ($('#mobileSettingChangePassword').is(':checked')) {
        choseMobileSettingCategoryBtn.textContent = 'Change Password'
        $('#mobileBankAccountBlock').hide();
        $('#mobileChangePassword').show();
        $('#mobileSettingSecurityBlock').hide();
    } else if ($('#mobileSettingSecurity').is(':checked')) {
        choseMobileSettingCategoryBtn.textContent = 'Security'
        $('#mobileBankAccountBlock').hide();
        $('#mobileChangePassword').hide();
        $('#mobileSettingSecurityBlock').show();
    }
});





