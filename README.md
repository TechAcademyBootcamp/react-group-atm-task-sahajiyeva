# react_group_atm_task
### ATM Proyekti Yaradin
1. `enter_card.html` `check_card.html` `user_balance.html` `check_out_info.html` sehifelerini yaradin
2. `enter_card.html` sehifesine enter card button-u yerlesdirin. Hansi ki, uzerine click edende sehife reload olmadan (ajax vasitesi ile) sehifeye `check_card.html` yuklensin.
3. `check_card.html`-de bir form yaradin. Card number-i ve card_password-u daxil etmek ucun iki input yerlesdirin. Daxil edilen melumatlari ajax vasitesi ile back-end-e post edib, daxil edilen card melumatlarinin dogrulugunu yoxlayin.Eger melumatlar dogrudursa istifadecini sehife reload olmadan sehifeni temizleyin  ve ajax vasitesi ile `user_balance.html` html-i sehifeye yukleyin. Eger melumatlar dogru deyilen back-endden gelen xeberdarligi istifadeciye gosterin.
Yazilan melumatlarin dogrulugunu yoxlama ucun API
``` 
url: http://34.70.181.209/check/
method:POST,
data: 
    {     
      cart_number:(16 characters)
      password:(4 characters)
    }
```
4. `user_balance.html`-de istifadecinin backendden gelen melumatlarini (`kartin sahibi`, `kartin balansi` kimi melumatlari) gosterin ve istifadeciden ne qeder pul cixarmaq istediyini daxil etmesi ucun input elave edin. Istifadeci cixarmaq istediyi meblegi daxil etdikden ve cixar duymesine basdiqdan sonra back-end-den cixarmaq istediyi meblegi post edin. Eger muveffeqiyyetle neticelerse, sehife reload olmadan sehifeye `check_out_info.html`-i yukleyin. Eger cash out prosesi muveffeqiyyetle neticelenmezse (meselen daxil edilen mebleg balansdan coxdursa), o zaman back-endden gelen xeberdarligi istifadeciye gosterin.
Cash Out ucun API
```
url: http://34.70.181.209/cash-out/
method:POST,
data: 
    {
        cart_number:(16 characters),
        password:(4 characters),
        cash: (4 digits before the decimal point.,  2 decimal places.)
    }
```
5. `check_out_info.html`-de istifadeciye cixarilan mebleg haqqinda ve balansdaki cari mebleg haqqinda melumat verin. Ve Prosesi yeniden davam etmesi ucun duyme yerlesdirin. Duymeye sixdiqda istifadecini yeniden `enter_card.html`-e yonlendirin.
