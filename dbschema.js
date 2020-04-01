let db = {
    users: [{
        userId: "2ko9K0EOi2dlKGIsgyGnYmxSSxj2",
        email: "user@gmail.com",
        createdAt: "2020-02-14T05:15:36.130Z",
        imageUrl: "image/dsfsdkfghskdfgs/dgfdhfgdh",
        bio: "Hello, my name is user, nice to meet you",
        website: "https://user.com",
        location: "London, UKs"
    }],
    screams: [{
        userHandle: "New",
        body: "New Scream",
        createdAt: "2020-02-13T05:13:06.130Z",
        likeCount: 5,
        commentCount: 2
    }],
    comments: [{
        userHandle: "New",
        screamId: "6zFEIkzq1LS2rUUhtrwP",
        body: "nice scream",
        createdAt: "2020-02-14T05:15:36.130Z"
    }]
};
const userDetails = {
    // Redux data
    credentials: {
        userId: "2ko9K0EOi2dlKGIsgyGnYmxSSxj2",
        email: "user@gmail.com",
        handle: "user",
        createdAt: "2020-02-14T05:15:36.130Z",
        imageUrl: "image/dsfsdkfghskdfgs/dgfdhfgdh",
        bio: "Hello, my nameis user, nice to meet you",
        website: "https://user.com",
        location: "London, UK"
    },
    likes: [{
            userHandle: "user",
            screamId: "C7ZGC339R4jetNRsgedG"
        },
        {
            userHandle: "user",
            screamId: "VZ8GUSVZhSdxXIKnnwKS"
        }
    ]
};