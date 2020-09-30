# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

# Reset All Data First
User.delete_all
Coach.delete_all
Review.delete_all
Appointment.delete_all

coaches = Coach.create([
    {
        name: "Maya Nicole",
        image_url: "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        age: 31,
        tagline: "The Shadow Dancer",
        likes: 5,
        price: 175
    },
    {
        name: "John Dow",
        image_url: "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        age: 33,
        tagline: "The Dancer",
        likes: 0,
        price: 75

    },
    {
        name: "Nic Grab",
        image_url: "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        age: 32,
        tagline: "The Lonely Dancer",
        likes: 5,
        price: 55

    }
])

users = User.create([
    {
        name: 'Tom Brad',
        email: 'tom@tom.com',
        password: 123456
    },
    {
        name: 'Brad Pitt',
        email: 'brad@brad.com',
        password: 123456
    },
    {
        name: 'Texas Wild',
        email: 'texas@texas.com',
        password: 123456
    }
])

appoitnments = Appointment.create([
    {
        user: users.first,
        coach: coaches.first,
        appointment_time: Time.now.to_datetime
    },
    {
        user: users.second,
        coach: coaches.first,
        appointment_time: Time.now.to_datetime
    },
    {
        user: users.third,
        coach: coaches.first,
        appointment_time: Time.now.to_datetime
    },
])

reviews = Review.create([
    {
      title: "Great coach",
      description: "great advise",
      score:  5,
      coach: coaches.first,
      user: users.first
    },
    {
      title: "Bad coach",
      description: "bad advice",
      score:  1,
      coach: coaches.first,
      user: users.first
    }
  ])