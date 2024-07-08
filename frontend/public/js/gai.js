$(
    function()
    {
        $('.search-cards').keyup(function (){
            $('.card').removeClass('d-none');
            var filter = $(this).val(); // get the value of the input, which we filter on
            $('.card-deck').find('.card .card-body h5:not(:contains("'+filter+'"))').parent().parent().parent().addClass('d-none');
        })  
    }
)