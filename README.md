# Sopekocko

Mongoose test project
https://mongoosejs.com/docs/populate.html

POST
\_id
userId : \_id, ref: USER

USER
\_id
nom

post.findOne({\_id:1}).populate(USER)
