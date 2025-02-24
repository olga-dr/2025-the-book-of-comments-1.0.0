const {expect} = require('chai')
const User = require ('../../models/User')
const gqlRequest = require('../gqlRequest')
const {user ,userCreateQ } = require('./data')

let postData = null
let respData = null

before('DELETE MANY',()=>{
           User.deleteMany({})
           console.log ('users are deleted');
    })

describe ('USER CREATE',()=>{
    describe('USER CREATE -POSITIVE TESTS',()=>{
        it('user create' ,(done)=>{
            postData = {
                query: userCreateQ,
                variables: user
            }
           
            gqlRequest(postData)
            .expect(200)
            .end((err,res) =>{
                if (err) return done(err)
                   respData = res.body.data.userCreate
                   console.log(respData) 
                   expect(respData.firstName).eq('firstName')
                   expect(respData.lastName).eq('lastName')
               console.log(respData);
                done();
            })
        })
    })

    describe.skip ('USER CREATE -NEGATIVE TESTS',()=>{

        })

    }
)



