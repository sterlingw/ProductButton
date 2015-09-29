/***
 *
 */
app.constant('config', (function(){
    var BASE_URL = 'https://api.producthunt.com/v1/';

    return {
        API: {
            TOKEN: '495cb37c8825d3bc9062f21c9078047c00b307fb9bbd24a01ebb4a28734cfa1c',
            BASE_URL: BASE_URL,
            POSTS: BASE_URL + 'posts/'
        }
    };
})());