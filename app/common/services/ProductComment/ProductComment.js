/***
 *
 */
app.factory('ProductComment', function(){

    /**
     * @class
     */
    function ProductComment(args) {
        if (angular.isUndefined(args)) throw new Error('missing args');

        this.body          = args.body;
        this.childComments = args.childComments;
        this.postedAt      = args.postedAt;
        this.upvotes       = args.upvotes;
        this.postedBy      = args.postedBy;
    }

    return ProductComment;
});