module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'ExploreStay Dine - Find a Best place ',
        pageHeader: {
            title: 'ExploreStay Dine',
            strapline: 'Offering a seamless experience of finding the best places to visit, stay, and dine—all in one place.'
        },
        sidebar: "Discover top-rated accommodations, dining, and attractions, complete with addresses and facilities for an unforgettable journey!",
        locations: [{
            name: 'TULIPS',
            address: 'Swarnagiri colony, Pocharam, Hyderabad',
            rating: 4,
            facilities: ['Good Quality', 'live music','AC facility','offers','neatness'],
            distance: '2km'
        }, {
            name: 'charminar',
            address: 'Hyderabad',
            rating: 4,
            facilities: ['nimrah tea','street shopping','view point'],
            distance: '26km'
        }, {
            name: 'svm Lodge',
            address: 'chowdariguda, Hyderabad',
            rating: 2,
            facilities: ['ambiance', 'Premium wifi','mentanence'],
            distance: '16km'
        },  {
            name: 'Taj Falaknama Palace',
            address: 'Falaknama,hyderabad',
            rating: 5,
            facilities: ['luxurious rooms','world-class spa','fine dining options','stunning views of the city','beautiful gardens','host events'],
             distance: '34km'
        },  {
            name: 'ONE8 restaurent',
            address: 'Bengalore',
            rating: 5,
            facilities: ['diverse global menu','stylish ambiance','trendy bar'],
            distance: '436km'
        }]
    });
};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', { title: 'LocationInfo' });
};
module.exports.locationInfo1 = function (req, res) {
    res.render('locations-info1', { title: 'LocationInfo1' });
};
module.exports.locationInfo2 = function (req, res) {
    res.render('locations-info2', { title: 'LocationInfo2' });
};
module.exports.locationInfo3 = function (req, res) {
    res.render('locations-info3', { title: 'LocationInfo3' });
};
module.exports.locationInfo4 = function (req, res) {
    res.render('locations-info4', { title: 'LocationInfo4' });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
};