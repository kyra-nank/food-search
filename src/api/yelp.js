import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer kjQ8gQ4BZys1ll6bmWO3EZcKaD8E0SI7Jt5S05G9lXjpHkcwa4Oe_uU_NIgHu0hWwEUSxwVJ-MWV3Esirasga4plswYN7o1XqGb67jc7iiiExip0lmBsErHj3c2WYXYx'
    }
});