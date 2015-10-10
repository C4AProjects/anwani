define({ "api": [
  {
    "type": "put",
    "url": "/companies/:id/subscriptions?config=<enable|disable>",
    "title": "Configure Company Subscription",
    "version": "1.0.0",
    "name": "ConfigureSubscription",
    "group": "Company",
    "description": "<p>Configure subscription of a company. Use config values <code>enable</code> or <code>disable</code>.</p> ",
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"subscription\": \"enabled\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/companies.js",
    "groupTitle": "Company"
  },
  {
    "type": "delete",
    "url": "/companies/:id",
    "title": "Delete Company",
    "version": "1.0.0",
    "name": "Delete",
    "group": "Company",
    "description": "<p>Delete a company with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the company</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>company address</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email address</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "website",
            "description": "<p>company website</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>secret password</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "logo",
            "description": "<p>company logo</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>company id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  \"email\": \"company@email.com\",\n  \"name\": \"Jumia Online Shop\",\n  \"website\": \"http://www.jumia.co.ke\",\n  \"address\": \"Moi Avenue, Top House\",\n  \"logo\": \"logo_url\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/companies.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/companies",
    "title": "Get companies collection",
    "version": "1.0.0",
    "name": "FetchAll",
    "group": "Company",
    "description": "<p>Get a collection of companies</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the company</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>company address</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email address</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "website",
            "description": "<p>company website</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>secret password</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "logo",
            "description": "<p>company logo</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>company id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "[{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  \"email\": \"company@email.com\",\n  \"name\": \"Jumia Online Shop\",\n  \"website\": \"http://www.jumia.co.ke\",\n  \"address\": \"Moi Avenue, Top House\",\n  \"logo\": \"logo_url\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/companies.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/companies/:id",
    "title": "Get Company",
    "version": "1.0.0",
    "name": "Get",
    "group": "Company",
    "description": "<p>Get a company with the given id</p> ",
    "filename": "routes/companies.js",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "/companies/login",
    "title": "Login a company",
    "version": "1.0.0",
    "name": "Login",
    "group": "Company",
    "description": "<p>Log in a company. The request returns a token used to authentication of the company on subsequent requests. The token is placed as an HTTP header ie <code>Authorization: Bearer &lt;Token-here&gt;</code> otherwise requests are rejected.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>company email address</p> "
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
          "content": "{\n  \"email\": \"company@email.com\",\n  \"password\": \"password\"\n}",
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
            "field": "company",
            "description": "<p>company info</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "company._id",
            "description": "<p>company id</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "company.first_name",
            "description": "<p>first name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "company.last_name",
            "description": "<p>last name</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "company.other_name",
            "description": "<p>other names</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "company.phone_number",
            "description": "<p>phone number</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "company.addresses",
            "description": "<p>addresses</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"token\" : \"ylHUMaVrS0dpcO/+nT+6aAVVGcRJzu=\",\n  \"company\": {\n    \"_id\" : \"556e1174a8952c9521286a60\",\n    \"email\": \"company@email.com\",\n    \"name\": \"Jumia Online Shop\",\n    \"website\": \"http://www.jumia.co.ke\",\n    \"address\": \"Moi Avenue, Top House\",\n    \"logo\": \"logo_url\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/companies.js",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "/companies/logout",
    "title": "Logout a company",
    "version": "1.0.0",
    "name": "Logout",
    "group": "Company",
    "description": "<p>Invalidate a companies token</p> ",
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
    "filename": "routes/companies.js",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "/companies/signup",
    "title": "Create a company",
    "version": "1.0.0",
    "name": "Signup",
    "group": "Company",
    "description": "<p>Create a new company. This Content should be submitted as <code>multipart/form-data</code>.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the company</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>company address</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email address</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "website",
            "description": "<p>company website</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>secret password</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "logo",
            "description": "<p>company logo</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example, should be submitted as```multipart/form-data```.",
          "content": "{\n  \"email\": \"company@email.com\",\n  \"password\": \"password\",\n  \"name\": \"Jumia Online Shop\",\n  \"website\": \"http://www.jumia.co.ke\",\n  \"address\": \"Moi Avenue, Top House\",\n  \"logo\": \"<LOGO_DATA>\"\n}",
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
            "field": "name",
            "description": "<p>name of the company</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>company address</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email address</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "website",
            "description": "<p>company website</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>secret password</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "logo",
            "description": "<p>company logo</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>company id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  \"email\": \"company@email.com\",\n  \"name\": \"Jumia Online Shop\",\n  \"website\": \"http://www.jumia.co.ke\",\n  \"address\": \"Moi Avenue, Top House\",\n  \"logo\": \"logo_url\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/companies.js",
    "groupTitle": "Company"
  },
  {
    "type": "put",
    "url": "/companies/:id",
    "title": "Update Company",
    "version": "1.0.0",
    "name": "Update",
    "group": "Company",
    "description": "<p>Update a company with the given id</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>name of the company</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "address",
            "description": "<p>company address</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email address</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "website",
            "description": "<p>company website</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>secret password</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "logo",
            "description": "<p>company logo</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "_id",
            "description": "<p>company id</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"_id\" : \"556e1174a8952c9521286a60\",\n  \"email\": \"company@email.com\",\n  \"name\": \"Jumia Online Shop\",\n  \"website\": \"http://www.jumia.co.ke\",\n  \"address\": \"Moi Avenue, Top House\",\n  \"logo\": \"logo_url\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/companies.js",
    "groupTitle": "Company"
  },
  {
    "type": "put",
    "url": "/companies/:id/logos",
    "title": "Update companies logos",
    "version": "1.0.0",
    "name": "UpdateLogo",
    "group": "Company",
    "description": "<p>Update a logo of a given company. This should be submitted as <code>multipart/form-data</code> data format.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "logo",
            "description": "<p>new logo buffer</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example(submitted as ```multipart/form-data```):",
          "content": "{\n   \"logo\": \"<LOGO_BUFFER>\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"updated\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/companies.js",
    "groupTitle": "Company"
  },
  {
    "type": "put",
    "url": "/companies/:id/passwords",
    "title": "Update companies password",
    "version": "1.0.0",
    "name": "UpdatePassword",
    "group": "Company",
    "description": "<p>Update password of a given company.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>new password</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n   \"new_password\" : \"newpassword\"\n   \"old_password\" : \"oldpassword\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"updated\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/companies.js",
    "groupTitle": "Company"
  },
  {
    "type": "put",
    "url": "/users/:id/passwords",
    "title": "Update user password/pin",
    "version": "1.0.0",
    "name": "UpdatePassword",
    "group": "Company",
    "description": "<p>Update password of a given user.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "security_question_answer",
            "description": "<p>security question answer</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "new_password",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n   \"security_answer\" : \"john doey\",\n   \"new_password\" : 4567\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"updated\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Company"
  },
  {
    "type": "put",
    "url": "/companies/:id/plans",
    "title": "Update companies subscription plans",
    "version": "1.0.0",
    "name": "UpdateSubscriptionPlan",
    "group": "Company",
    "description": "<p>Update subscription of a given company</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "plan",
            "description": "<p>subscription plan</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n   \"plan\" : \"pro\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"updated\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/companies.js",
    "groupTitle": "Company"
  },
  {
    "type": "post",
    "url": "/companies/verify/:token",
    "title": "Verify a user/company",
    "version": "1.0.0",
    "name": "Verify",
    "group": "Company",
    "description": "<p>Verify a user/company</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "verified",
            "description": "<p>verified or not</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": "{\n  \"verified\" : true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/companies.js",
    "groupTitle": "Company"
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
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "security_pass",
            "description": "<p>security question and answer</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "security_pass.question",
            "description": "<p>security question</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "security_pass.answer",
            "description": "<p>security answer</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"phone_number\": \"254711223344\",\n  \"password\": \"password\",\n  \"last_name\": \"smith\",\n  \"first_name\": \"john\",\n  \"other_name\": \"cole\",\n  \"security_pass\": {\n    \"question\": \"what was your first ever nickname\",\n    \"answer\": \"none\"\n  }\n}",
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
    "type": "put",
    "url": "/addresses/:id/archive",
    "title": "Archive an address",
    "version": "1.0.0",
    "name": "Archive",
    "group": "address",
    "description": "<p>Archive an address with the given id</p> ",
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
    "url": "/addresses",
    "title": "Create Address(Logged In users);",
    "version": "1.0.0",
    "name": "Create",
    "group": "address",
    "description": "<p>Create an Address. Data should be submitted as <strong>multipart/form-data</strong>.</p> ",
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
          "title": "Request Example(this is not json data but listing of request fields, all fields should be placed",
          "content": "as part of the multipart/form-data data):\n{\n     user: \"556e1174a8952c9521286a60\",\n     location_pic: \"image file\",\n     short_virtual_code: \"MP7H+E2\",\n     long_virtual_code: \"6E9AEFMP7H+E2FH\",\n     latitude: 4.567889,\n     longitude: -12.098,\n     street_address: \"\",\n     city: \"nairobi\",\n     country: \"kenya\"\n}",
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
    "description": "<p>Create an Address. Data should be submitted as <strong>multipart/form-data</strong>.</p> ",
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
          "title": "Request Example",
          "content": "(this is not json data but listing of request fields, all fields should be placed\nas part of the multipart/form-data data):\n{\n     phone_number: \"254787898989\",\n     first_name: \"Mary\",\n     last_name: \"Jane\",\n     other_name: \"Doe\",\n     password: \"mypin\" // Send once when the user is new\n     location_pic: \"image file\"\n     short_virtual_code: \"MP7H+E2\",\n     long_virtual_code: \"6E9AEFMP7H+E2FH\",\n     latitude: 4.567889,\n     longitude: -12.098,\n     street_address: \"\",\n     city: \"nairobi\",\n     country: \"kenya\"\n   }\n}",
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