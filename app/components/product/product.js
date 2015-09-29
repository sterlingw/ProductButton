/**
 *
 */
app.controller('productCtrl', function($stateParams, api){
    var id = $stateParams.id;

    api.getProductById(id).then(function(res){
        console.log(res);
    }, 
    function(err){
        throw err;
    });
    
});