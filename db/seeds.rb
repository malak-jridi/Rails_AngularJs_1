# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = User.create( email: 'malak@live.fr', password: '000000', name: 'malak jridi', username: 'malakj23', salary: 0,role:'admin',image:'', phone:50322778)

User.create( email: 'malek@live.fr', password: '000000', name: 'malak jridi', username: 'malekj23', salary: 0,role:'admin',image:'https://images.indianexpress.com/2018/02/deepika-padukone-cover-girl-759.jpg', phone:50322778)


User.create( email: 'sahar@live.fr', password: '000000', name: 'sahar', username: 'sahar3', salary: 0,role:'employee',image:'https://m.media-amazon.com/images/M/MV5BNGFlYzAyYjgtNzRjNS00NmE4LTliOGYtYzBkYzU5MzRhMDM0XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UX214_CR0,0,214,317_AL_.jpg', phone:50322778)


