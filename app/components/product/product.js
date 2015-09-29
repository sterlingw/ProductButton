/**
 *
 */
app.controller('productCtrl', function($stateParams, api, Product){
    var self = this;
    var id = $stateParams.id;

    api.getProductById(id).then(function(data){

        self.product = new Product({
            voteCount:      data.votes_count,
            name:           data.name,
            tagline:        data.tagline,
            productHuntUrl: data.discussion_url,
            datePosted:     data.created_at,
            commentCount:   data.comments_count,
            comments:       data.comments
        });

    }, 
    function(err){
        throw err;
    });
    
});