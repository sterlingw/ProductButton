app.factory('apiResponsePosts', function() {
    return {
        build: function() {
            return {
                posts: [
                    {
                        id: 1,
                        comments: [
                            {
                                id: 4,
                                parent_comment_id: 2300,
                                body: 'This is also a comment.',
                                child_comments: [],
                                created_at: new Date(),
                                votes: 345,
                                user: {
                                    name: 'Jane Doe'
                                }
                            }
                        ],
                        created_at: new Date(),
                        votes: 36,
                        user: {
                            name: 'John Smith'
                        }
                    },
                    {
                        id: 2,
                        comments: [
                            {
                                id: 53,
                                parent_comment_id: 2300,
                                body: 'This is also a comment.',
                                child_comments: [],
                                created_at: new Date(),
                                votes: 345,
                                user: {
                                    name: 'Jane Doe'
                                }
                            }
                        ],
                        created_at: new Date(),
                        votes: 36,
                        user: {
                            name: 'John Smith'
                        }
                    }
                ]
            }
        }
    };
});