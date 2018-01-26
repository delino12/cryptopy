// on document load
$(document).ready(function() {
    // get current ticker
    $.get('/api/tickers', function(data) {
        /*optional stuff to do after success */
        console.log(data)
        $('.list-prices').html('');
        var sn = 0;
        $.each(data, function(index, val) {
            sn++;
             // var fiftheen = ToPrimitive(val.15m)
            $('.list-prices').append(`
                <tr>
                    <td>`+index+`</td>
                    <td>`+val['15m']+`</td>
                    <td>`+val.last+`</td>
                    <td>`+val.buy+`</td>
                    <td>`+val.sell+`</td>
                    <td>`+val.symbol+`</td>
                </tr>
            `)
        });
    });
});


// every 20 secs new updates
window.setInterval(function (){
    // get current ticker
    $.get('/api/tickers', function(data) {
        /*optional stuff to do after success */
        console.log(data)
        $('.list-prices').html('');
        var sn = 0;
        $.each(data, function(index, val) {
            sn++;
             // var fiftheen = ToPrimitive(val.15m)
            $('.list-prices').append(`
                <tr>
                    <td>`+index+`</td>
                    <td>`+val['15m']+`</td>
                    <td>`+val.last+`</td>
                    <td>`+val.buy+`</td>
                    <td>`+val.sell+`</td>
                    <td>`+val.symbol+`</td>
                </tr>
            `)
        });
    });
}, 1000 * 20);