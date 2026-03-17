const Post = require("../Database/post")

async function addPost(model) {
    let post = new Post({
        name: model.name
    })
    await post.save()
    return post.toObject()
}

async function getPosts() {
    return await Post.find()
}

module.exports = { addPost, getPosts }