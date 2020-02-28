$('#enter_card').on('click', function(){
    $.ajax({
        url:'check_card.html',
        success: function(page){
            $('#root').html(page);
        }
    })
});


$(document).on('click', '#check-form', function(e){
    e.preventDefault();
    
    var postData = {
        "cart_number": $('#card_number').val(),
        "password": $('#card_password').val()
    }
    var string='';
    $.ajax({
        url: 'http://34.70.181.209/check/',
        method: "POST",
        data: postData,
        success: function(result){
            console.log(result)
            // if(result.hasOwnProperty( 'full_name' )) {
                    $.ajax({
                        url:'user_balance.html',
                        success: function(page){
                            $('#form').html(page);
                            // responses = result.responseJSON;
                            document.querySelector('#owner').innerText = result.full_name;
                            document.querySelector('#balance').innerText = result.balance;
                            $('#withdraw').on('click', function(){
                                postData.cash = $('#amount').val();

                                $.ajax({
                                    url: 'http://34.70.181.209/cash-out/',
                                    method: "POST",
                                    data: postData,
                                    success: function(result1) {
                                
                                    $.ajax({
                                        url:'check_out_info.html',
                                        success: function(page){
                                            $('#user_balance').html(page);
                                            document.querySelector('#card_amount').innerText = result1.balance;
                                            document.querySelector('#amount_taken').innerText = postData.cash;
                                            $(document).on('click', '#go_back', function(){
                                                $.ajax({
                                                    url:'enter_card.html',
                                                    success: function(page){
                                                        $('#check_out').html(page);
                                                    }
                                                })
                                            });
                                        }
                                    })
                                },
                                
                                error: function(result){
                                    responses = result.responseJSON;
                                    
                                    for(var i in responses){
                                        string+=responses[i];
                                    }
                                    document.querySelector('#balance_error').innerText = string;
                                }
                            })
                        } ); 
                        }
                    })
                    
                   
            // }
            // else{
            //     for(var i in result){
            //         string+=result[i];
            //     }
            //     document.querySelector('#error').innerText = string;
            // }
    },
    error: function(result){
        response = result.responseJSON;
        
        for(var i in response){
            string+=response[i];
        }
        document.querySelector('#error').innerText = string;
    }
});
});