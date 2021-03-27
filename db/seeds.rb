# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'

User.destroy_all

user1 = User.create(email: 'user1@goo.com', password:'gooman')
user2 = User.create(email: 'user2@goo.com', password:'gooman', friends:[user1.id] ) 
user3 = User.create(email: 'user3@goo.com', password:'gooman')


10.times do
  user1.posts.create(body: Faker::ChuckNorris.fact)
  user2.posts.create(body: Faker::ChuckNorris.fact)
  user3.posts.create(body: Faker::ChuckNorris.fact)
end 

puts "#{User.all.size} Users seeded" 
puts "#{Post.all.size} Posts seeded"
puts "#{user1.posts.all.size} user1 Posts seeded"
