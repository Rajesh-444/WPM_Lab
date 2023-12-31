/* GET 'home' page */
const homelist = function(req, res){
    res.render('location-list', {
      title: 'Super Market',
      pageHeader: {
        title: 'Super Market',
        strapline: 'Find places to work with wifi near you!'
      },
      sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
      locations: [{
          name: 'More',
          address: '125 High Street, Reading, RG6 1PS',
          imgurl:'https://www.searchhyderabad.com/wp-content/uploads/listing-uploads/cover/2020/04/More-Stores-List-in-Hyderabad-19.jpg',
          rating: 3,
          facilities: ['Hot drinks', 'Food', 'Premium wifi'],
          distance: '100m'
      }, {
          name: 'D-Mart',
          address: '125 High Street, Reading, RG6 1PS',
          imgurl:'https://cdn.telanganatoday.com/wp-content/uploads/2021/12/DMART-HYD.jpg',
          rating: 4,
          facilities: ['Hot drinks', 'Food', 'Premium wifi'],
          distance: '200m'
      }, {
          name: 'Smart',
          address: '125 High Street, Reading, RG6 1PS',
          imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDSGDqK5Nf93c5igTZWnMOFh6Y6ldbgJmE5NJT_-kzASuAFKJUARg2x24fa7yzUZoFNk&usqp=CAU',
          rating: 2,
          facilities: ['Food', 'Premium wifi'],
          distance: '250m'
      }]
    });
  };
  
  /* GET 'Location info' page */
  const locationInfo = function(req, res){
    res.render('location-info', {
      title: 'More',
      pageHeader: {
        title: 'More'
      },
      sidebar: {
        context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
        callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
      },
      location: {
        name: 'More',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        coords: {
          lat: 17.401810,
          lng: 78.560188
        },
        openingTimes: [{
          days: 'Monday - Friday',
          opening: '7:00am',
          closing: '7:00pm',
          closed: false
        }, {
          days: 'Saturday',
          opening: '8:00am',
          closing: '5:00pm',
          closed: false
        }, {
          days: 'Sunday',
          closed: true
        }],
        reviews: [{
          author: 'Simon Holmes',
          rating: 5,
          timestamp: '16 July 2013',
          reviewText: 'What a great place. I can\'t say enough good things about it.'
        }, {
          author: 'Charlie Chaplin',
          rating: 3,
          timestamp: '16 June 2013',
          reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
        }]
      }
    });
  };
  
  /* GET 'Add review' page */
  const addReview = function(req, res){
    res.render('location-info-form', {
      title: 'Review Starcups on Loc8r',
      pageHeader: { title: 'Review Starcups' }
    });
  };
  
  module.exports = {
    homelist,
    locationInfo,
    addReview
  };