# Create Your Has-Many app

<img src="https://travis-ci.org/HIROSN/create-your-has-many-app.svg" alt="Travis CI Badge"></img>

```
server *-> router *-> root_handler
                  +-> post_handler
                  +-> get_handler
```

Router has many request handlers. Application continues running when a handler as a module is decoupled from the application.
