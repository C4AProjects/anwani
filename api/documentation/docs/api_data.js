define({ "api": [
  {
    "version": "1.0.0",
    "name": "Delete",
    "group": "Token",
    "description": "<p>Delete a token with the given id</p> ",
    "type": "",
    "url": "",
    "filename": "routes/tokens.js",
    "groupTitle": "Token"
  },
  {
    "version": "1.0.0",
    "name": "FetchAll",
    "group": "Token",
    "description": "<p>Get a collection of tokens</p> ",
    "type": "",
    "url": "",
    "filename": "routes/tokens.js",
    "groupTitle": "Token"
  },
  {
    "version": "1.0.0",
    "name": "Get",
    "group": "Token",
    "description": "<p>Get a token with the given id</p> ",
    "type": "",
    "url": "",
    "filename": "routes/tokens.js",
    "groupTitle": "Token"
  },
  {
    "version": "1.0.0",
    "name": "Update",
    "group": "Token",
    "description": "<p>Update a token with the given id</p> ",
    "type": "",
    "url": "",
    "filename": "routes/tokens.js",
    "groupTitle": "Token"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete User",
    "version": "1.0.0",
    "name": "Delete",
    "group": "User",
    "description": "<p>Delete a user with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>user id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "other_name",
            "description": "<p>other names</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "addresses",
            "description": "<p>addresses</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  \"last_name\": \"smith\",\n  \"first_name\": \"john\",\n  \"other_name\": \"cole\",\n  \"phone_number\": \"254711223344\",\n  \"addresses\" : []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get users collection",
    "version": "1.0.0",
    "name": "FetchAll",
    "group": "User",
    "description": "<p>Get a collection of users</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>user id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "other_name",
            "description": "<p>other names</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "addresses",
            "description": "<p>addresses</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "[{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  \"last_name\": \"smith\",\n  \"first_name\": \"john\",\n  \"other_name\": \"cole\",\n  \"phone_number\": \"254711223344\",\n  \"addresses\" : []\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id/addresses",
    "title": "Get user's address collection",
    "version": "1.0.0",
    "name": "FetchUserAddresses",
    "group": "User",
    "description": "<p>Get a collection of user's addresses</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>address id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "virtual_code",
            "description": "<p>virtual code</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location_pic",
            "description": "<p>location photo</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude coordinate</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude coordinate</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "street_address",
            "description": "<p>street address</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>city name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "[{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  user: \"556e1174a8952c9521286a60\",\n  short_virtual_code: \"MP7H+E2\",\n  long_virtual_code: \"6EAEMMP7H+E2\",\n  location_pic: \"/media/a8952c9521286a60.jpeg\",\n  latitude: 4.567889,\n  longitude: -12.098,\n  street_address: \"\",\n  city: \"nairobi\",\n  country: \"kenya\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get User",
    "version": "1.0.0",
    "name": "Get",
    "group": "User",
    "description": "<p>Get a user with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>user id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "other_name",
            "description": "<p>other names</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "addresses",
            "description": "<p>addresses</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  \"last_name\": \"smith\",\n  \"first_name\": \"john\",\n  \"other_name\": \"cole\",\n  \"phone_number\": \"254711223344\",\n  \"addresses\" : []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Login a user",
    "version": "1.0.0",
    "name": "Login",
    "group": "User",
    "description": "<p>Log in a user. The request returns a token used to authentication of the user on subsequent requests. The token is placed as an HTTP header ie <code>Authorization: Bearer &lt;Token-here&gt;</code> otherwise requests are rejected.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>user phoner number</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>Password/Pin</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"phone_number\": \"245757565\",\n  \"password\": \"mypin\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "token",
            "description": "<p>auth token</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>user info</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user._id",
            "description": "<p>user id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user.first_name",
            "description": "<p>first name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user.last_name",
            "description": "<p>last name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user.other_name",
            "description": "<p>other names</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user.phone_number",
            "description": "<p>phone number</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "user.addresses",
            "description": "<p>addresses</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"token\" : \"ylHUMaVrS0dpcO/+nT+6aAVVGcRJzu=\",\n  \"user\": {\n    \"_id\" : \"556e1174a8952c9521286a60\",\n    \"last_name\": \"smith\",\n    \"first_name\": \"john\",\n    \"other_name\": \"cole\",\n    \"phone_number\": \"254711223344\",\n    \"addresses\" : []\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/logout",
    "title": "Logout a user",
    "version": "1.0.0",
    "name": "Logout",
    "group": "User",
    "description": "<p>Invalidate a users token</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "logged_out",
            "description": "<p>message</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"logged_out\" : true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/:id/addresses/:addrId",
    "title": "Delete User Address",
    "version": "1.0.0",
    "name": "RemoveUserAddress",
    "group": "User",
    "description": "<p>Delete a user address with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>address id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>user id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "virtual_code",
            "description": "<p>virtual code</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location_pic",
            "description": "<p>location photo</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude coordinate</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude coordinate</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "street_address",
            "description": "<p>street address</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>city name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  user: \"556e1174a8952c9521286a60\",\n  short_virtual_code: \"MP7H+E2\",\n  long_virtual_code: \"6EAEMMP7H+E2\",\n  location_pic: \"/media/a8952c9521286a60.jpeg\",\n  latitude: 4.567889,\n  longitude: -12.098,\n  street_address: \"\",\n  city: \"nairobi\",\n  country: \"kenya\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/signup",
    "title": "Create a user",
    "version": "1.0.0",
    "name": "Signup",
    "group": "User",
    "description": "<p>Create a new user</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone_number",
            "description": "<p>Phone number</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "other_name",
            "description": "<p>other names</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"phone_number\": \"254711223344\",\n  \"password\": \"password\",\n  \"last_name\": \"smith\",\n  \"first_name\": \"john\",\n  \"other_name\": \"cole\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>user id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "other_name",
            "description": "<p>other names</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "addresses",
            "description": "<p>addresses</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  \"last_name\": \"smith\",\n  \"first_name\": \"john\",\n  \"other_name\": \"cole\",\n  \"addresses\" : []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update User",
    "version": "1.0.0",
    "name": "Update",
    "group": "User",
    "description": "<p>Update a user with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>user id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "other_name",
            "description": "<p>other names</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "addresses",
            "description": "<p>addresses</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  \"last_name\": \"smith\",\n  \"first_name\": \"john\",\n  \"other_name\": \"cole\",\n  \"phone_number\": \"254711223344\",\n  \"addresses\" : []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/addresses",
    "title": "Create Address(Web Endpoint)",
    "version": "1.0.0",
    "name": "Create",
    "group": "address",
    "description": "<p>Create an Address and get back the Open Location Code</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location_pic",
            "description": "<p>location photo</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>user id</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude coordinate</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude coordinate</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "long_virtual_code",
            "description": "<p>long virtual code</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "short_virtual_code",
            "description": "<p>short virtual code</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "street_address",
            "description": "<p>street address</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>city name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n     user: \"556e1174a8952c9521286a60\",\n     location_pic: \"base64 image string\",\n     short_virtual_code: \"MP7H+E2\",\n     long_virtual_code: \"6E9AEFMP7H+E2FH\",\n     latitude: 4.567889,\n     longitude: -12.098,\n     street_address: \"\",\n     city: \"nairobi\",\n     country: \"kenya\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>address id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>user id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "long_virtual_code",
            "description": "<p>long virtual code</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "short_virtual_code",
            "description": "<p>short virtual code</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location_pic",
            "description": "<p>location photo</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude coordinate</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude coordinate</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "street_address",
            "description": "<p>street address</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>city name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  user: \"556e1174a8952c9521286a60\",\n  short_virtual_code: \"MP7H+E2\",\n  long_virtual_code: \"6E9AEFMP7H+E2FH\",\n  location_pic: \"/media/a8952c9521286a60.jpeg\",\n  latitude: 4.567889,\n  longitude: -12.098,\n  street_address: \"\",\n  city: \"nairobi\",\n  country: \"kenya\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/addresses.js",
    "groupTitle": "address"
  },
  {
    "type": "post",
    "url": "/addresses/create",
    "title": "Create Address(Mobile Endpoint)",
    "version": "1.0.0",
    "name": "CreateNew",
    "group": "address",
    "description": "<p>Create an Address and get back the Open Location Code</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>user data</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location_pic",
            "description": "<p>location photo</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude coordinate</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude coordinate</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "long_virtual_code",
            "description": "<p>long virtual code</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "short_virtual_code",
            "description": "<p>short virtual code</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "street_address",
            "description": "<p>street address</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>city name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n   user: {\n     phone_number: \"254787898989\",\n     first_name: \"Mary\",\n     last_name: \"Jane\",\n     other_name: \"Doe\",\n     password: \"mypin\" // Send once when the user is new\n   },\n   address: {\n     location_pic: \"base64 image string\",\n     short_virtual_code: \"MP7H+E2\",\n     long_virtual_code: \"6E9AEFMP7H+E2FH\",\n     latitude: 4.567889,\n     longitude: -12.098,\n     street_address: \"\",\n     city: \"nairobi\",\n     country: \"kenya\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>address id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>user id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "long_virtual_code",
            "description": "<p>long virtual code</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "short_virtual_code",
            "description": "<p>short virtual code</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location_pic",
            "description": "<p>location photo</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude coordinate</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude coordinate</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "street_address",
            "description": "<p>street address</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>city name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  user: \"556e1174a8952c9521286a60\",\n  short_virtual_code: \"MP7H+E2\",\n  long_virtual_code: \"6E9AEFMP7H+E2FH\",\n  location_pic: \"/media/a8952c9521286a60.jpeg\",\n  latitude: 4.567889,\n  longitude: -12.098,\n  street_address: \"\",\n  city: \"nairobi\",\n  country: \"kenya\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/addresses.js",
    "groupTitle": "address"
  },
  {
    "type": "delete",
    "url": "/addresses/:id",
    "title": "Delete address",
    "version": "1.0.0",
    "name": "Delete",
    "group": "address",
    "description": "<p>Delete a address with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>address id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>user id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "long_virtual_code",
            "description": "<p>long virtual code</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "short_virtual_code",
            "description": "<p>short virtual code</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location_pic",
            "description": "<p>location photo</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude coordinate</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude coordinate</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "street_address",
            "description": "<p>street address</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>city name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  user: \"556e1174a8952c9521286a60\",\n  short_virtual_code: \"MP7H+E2\",\n  long_virtual_code: \"6E9AEFMP7H+E2FH\",\n  location_pic: \"/media/a8952c9521286a60.jpeg\",\n  latitude: 4.567889,\n  longitude: -12.098,\n  street_address: \"\",\n  city: \"nairobi\",\n  country: \"kenya\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/addresses.js",
    "groupTitle": "address"
  },
  {
    "type": "get",
    "url": "/addresses",
    "title": "Get addresses collection",
    "version": "1.0.0",
    "name": "FetchAll",
    "group": "address",
    "description": "<p>Get a collection of addresses</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>address id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>user id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "long_virtual_code",
            "description": "<p>long virtual code</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "short_virtual_code",
            "description": "<p>short virtual code</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location_pic",
            "description": "<p>location photo</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude coordinate</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude coordinate</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "street_address",
            "description": "<p>street address</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>city name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "[{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  user: \"556e1174a8952c9521286a60\",\n  short_virtual_code: \"MP7H+E2\",\n  long_virtual_code: \"6E9AEFMP7H+E2FH\",\n  location_pic: \"/media/a8952c9521286a60.jpeg\",\n  latitude: 4.567889,\n  longitude: -12.098,\n  street_address: \"\",\n  city: \"nairobi\",\n  country: \"kenya\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/addresses.js",
    "groupTitle": "address"
  },
  {
    "type": "get",
    "url": "/addresses/:id",
    "title": "Get address",
    "version": "1.0.0",
    "name": "Get",
    "group": "address",
    "description": "<p>Get a address with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>address id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>user id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "long_virtual_code",
            "description": "<p>long virtual code</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "short_virtual_code",
            "description": "<p>short virtual code</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location_pic",
            "description": "<p>location photo</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude coordinate</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude coordinate</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "street_address",
            "description": "<p>street address</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>city name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  user: \"556e1174a8952c9521286a60\",\n  short_virtual_code: \"MP7H+E2\",\n  long_virtual_code: \"6E9AEFMP7H+E2FH\",\n  location_pic: \"/media/a8952c9521286a60.jpeg\",\n  latitude: 4.567889,\n  longitude: -12.098,\n  street_address: \"\",\n  city: \"nairobi\",\n  country: \"kenya\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/addresses.js",
    "groupTitle": "address"
  },
  {
    "type": "put",
    "url": "/addresses/:id",
    "title": "Update address",
    "version": "1.0.0",
    "name": "Update",
    "group": "address",
    "description": "<p>Update a address with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>address id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "user",
            "description": "<p>user id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "long_virtual_code",
            "description": "<p>long virtual code</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "short_virtual_code",
            "description": "<p>short virtual code</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location_pic",
            "description": "<p>location photo</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude coordinate</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "longitude",
            "description": "<p>longitude coordinate</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "street_address",
            "description": "<p>street address</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>city name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>country name</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  user: \"556e1174a8952c9521286a60\",\n  short_virtual_code: \"MP7H+E2\",\n  long_virtual_code: \"6E9AEFMP7H+E2FH\",\n  location_pic: \"/media/a8952c9521286a60.jpeg\",\n  latitude: 4.567889,\n  longitude: -12.098,\n  street_address: \"\",\n  city: \"nairobi\",\n  country: \"kenya\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/addresses.js",
    "groupTitle": "address"
  }
] });