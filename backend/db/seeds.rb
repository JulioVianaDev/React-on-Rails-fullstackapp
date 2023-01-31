# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Car.delete_all
20.times do 
  Car.create(
    title: Faker::Mountain.name,
    desc: Faker::DcComics.title,
    ano: '2022' ,
  )

end

Car.all.each do |carro|
  puts "nome do carro: #{carro.title}" 
  puts "desc do carro: #{carro.desc}" 
  puts "ano do carro: #{carro.ano}" 
end