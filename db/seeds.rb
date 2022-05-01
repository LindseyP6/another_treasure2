User.destroy_all
Organization.destroy_all
Item.destroy_all 

puts "seeding..."
User.create(name:"Greg", telephone:"111-111-1111", email:"treasure@gmail.com", password: "123")
User.create(name:"Lindsey", telephone:"111-111-1111", email:"lindsisradd@gmail.com", password: "123")
User.create(name:"Emily", telephone:"111-111-1111", email:"emily@gmail.com", password: "123")
User.create(name:"Nicole", telephone:"111-111-1111", email:"nicnack@gmail.com", password: "123")
User.create(name:"Jack", telephone:"111-111-1111", email:"jackattack@gmail.com", password: "123")
User.create(name:"Jenny", telephone:"111-111-1111", email:"piratejenny@gmail.com", password: "123")
User.create(name:"Ralph", telephone:"111-111-1111", email:"ralphisbad@gmail.com", password: "123")

Organization.create(name:"New Utrecht Reformed Church", telephone:"(917) 123-2334", address:"1827 84th Street, Brooklyn, NY 11218" , longitude: -74.000430 , latitude: 40.608010, needs:"furniture, toys, books", hours: "Mon - Fri 8-4" )
Organization.create(name:"The Kensington Family Shelter", telephone:"(718) 226-0425", address:"385 McDonald Ave, Brooklyn, NY 11218" , longitude: -73.979379 , latitude: 40.644562, needs:"toys, books", hours: "Hours: 24/7" )
Organization.create(name:"Marlboro Senior Center", telephone:"(718) 333-0575", address:"2298 W 8th St, Brooklyn, NY 11223" , longitude: -73.978680 , latitude: 40.591800, needs:"kitchen, clothes", hours: "Mon - Sat 9-6 " )
Organization.create(name:"CAMBA LGBT services", telephone:"(929) 305-3000", address: "1259 Flatbush Ave, Brooklyn, NY 11226" , longitude: -73.954530, latitude: 40.639760, needs:"clothes, kitchen", hours: "Sun - Sat 7-7" )
Organization.create(name:"Sunset Park Recreation Center", telephone:"(929) 305-3000", address: "4200 7th Ave, Brooklyn, NY 11232" , longitude: -74.002121, latitude: 40.646931, needs:"furniture", hours: "Mon - Sat 6-9" )
Organization.create(name:"恩泉華人浸信會 Chinese Saving Grace Baptist Church", telephone:"(917) 857-6524", address: "6822 20th Ave, Brooklyn, NY 11204" , longitude: -73.988310, latitude: 40.614490 , needs:"kitchen, furniture", hours: "Sun - Fri 10-4" )
Organization.create(name:"Father Young Shelter Services", telephone:"(718) 492-2916", address: "140 58th St, Brooklyn, NY 11220" , longitude: -74.023972, latitude: 40.645538, needs:"toys, clothes", hours: "Hours: 24/7" )


Item.create(name: "Dresser", description: "Wooden dresser", image:"https://www.used.forsale/sh-img/137579703_10159798804663475_1364652713289027237_o_solid%2Bwood%2Bdresser.jpg", category: "furniture", user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name: "Desk", description: "Wooden desk with drawers", image:"https://www.nationaloffice.com/products/UM5028ODSK_4541.jpg" , category: "furniture", user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name: "Frying Pan Set", description: "Rachel Ray frying pan set", image:"https://i.ebayimg.com/images/g/VxYAAOSwqtlhUAeM/s-l300.jpg", user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name:"Bookshelf", description: "Solid wood 3 shelf bookcase", image: "https://ofwllc.com/wp-content/uploads/2016/05/used-solid-wood-bookshelf-for-sale-05.png", category: "furniture" , user_id: User.all.sample.id, organization_id: Organization.all.sample.id) 
Item.create(name:"Red accent chair", description: "1960s Vintage Red Accent Chair", image: "https://chairish-prod.freetls.fastly.net/image/product/sized/19e8bf2b-202d-484f-8833-23ff3eb5f6f9/1960s-vintage-red-accent-chair-4320?aspect=fit&width=640&height=640", category: "furniture" , user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name: "End tables", description: "Set of two matching white end tables", image: "https://img.ksl.com/mx/mplace-classifieds.ksl.com/4102158-1648500707-964942.jpg?filter=marketplace/400x300_cropped", category: "furniture" , user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name:"Nancy Drew Hardback Collection", description: "Complete collection of Nancy Drew books", image: "https://images-na.ssl-images-amazon.com/images/I/91rrSqpvQkL.jpg", category: "books" , user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name: "Green Puffer Coat", description: "Used men’s winter coat; size medium", image: "https://image.made-in-china.com/2f0j00LkvhZWQlfjuw/Second-Hand-Used-Winter-Clothes-Thick-Coat-for-Men-Women-Children.jpg", category: "clothing" , user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name:"Snow boots", description: "Men’s snow boots size 9", image: "https://playitagainsports.imgix.net/images/11343-S000094830-1?auto=compress,format&fit=clip&w=800&orient=6", category: "clothing" , user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name:"Toy Phone", description: "Hello Kitty TOY Phone", image: "https://i.ebayimg.com/images/g/VU4AAOSwj4RfIs4j/s-l400.jpg", category: "toys" , user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name:"Children's abacus", description: "Good condition children's counting toy", image: "https://premiumjoy.com/wp-content/uploads/colorful-abacus-on-table-390x260.jpg", category: "toys" , user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name:"Dungeons & Dragons Books", description: "Dungeons & Dragons: An Endless Quest 10-Book Set by Various Authors", image: "https://cdn.shopify.com/s/files/1/0406/2511/1196/products/ACtC-3cS_-R3BdpSi_Itf05p7rQIOUH47Ur9-6TqH371qd2GOM77k_2hTdMAoCoHfuIqZaViDwPklzGH-aItRUBXngqD4nRZITpbb9mA5Kp75-mzO6fuEf6jtlPbHG5zBnMYTrZ4uDQVpOQPejsfLYncCF_D_s1024-no_900x.jpg?v=1608429664", category: "books" , user_id: User.all.sample.id, organization_id: Organization.all.sample.id)
Item.create(name:"Paddington Bear Books", description: "The Classic Adventures of Paddington Bear: The Complete 15 Book Collection", image: "https://cdn.shopify.com/s/files/1/0077/9010/0553/products/marissasbooksandgifts-9780007977178-the-classic-adventures-of-paddington-bear-the-complete-15-book-collection-22155150721223_600x.jpg?v=1628417777", category: "books" , user_id: User.all.sample.id, organization_id: Organization.all.sample.id)

puts "finished seeding!"
