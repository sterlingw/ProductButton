/***
 *
 */
app.factory('Product', function(){

    /**
     *
     */
    function Product(args) {
        if (angular.isUndefined(args)) throw new Error('missing args');

        this.voteCount      = args.voteCount;
        this.name           = args.name;
        this.tagline        = args.tagline;
        this.datePosted     = args.datePosted;
        this.productHuntUrl = args.productHuntUrl;
        this.comments       = args.comments;
        this.commentCount   = args.commentCount;
    }

    return Product;
});