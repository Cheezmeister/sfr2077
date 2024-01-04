# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

    ["Chicken", "Pork", "Beef", "Tofu", "Venison"].each do |protein|
      Protein.find_or_create_by!(name: protein)
    end

    ["Carrot", "Broccoli", "Tomato", "Spinach", "Kale", "Potato", "Cauliflower"].each do |veg|
      Vegetable.find_or_create_by!(name: veg)
    end

    [ 'garlic',
      'cayenne',
      'habanero',
      'basil',
      'saffron',
      'salt',
      'pepper',
      'cumin',
      'cloves',
      'cinnamon',
      'ginger'].each do |spice|
      Seasoning.find_or_create_by!(name: spice)
    end
