[![build status](https://secure.travis-ci.org/difio/difio-dotcloud-nodejs.png)](http://travis-ci.org/difio/difio-dotcloud-nodejs)
Registration agent for Difio, preconfigured for dotCloud / Node.js
applications. 

It compiles a list of installed packages and sends it to http://www.dif.io.


Installing on your dotCloud node.js application
----------------------------------------------

- Create an account at http://www.dif.io

- Create your Node.js application and push it to dotCloud

- Configure your Difio userID. You can get it from https://difio-otb.rhcloud.com/profiles/mine/

        dotcloud var set <app name> DIFIO_USER_ID=UserID

- Generate a unique identifier for this application and save the value as environmental variable.

        dotcloud var set <app name> DIFIO_UUID=`uuidgen`

- Add a dependency in your application's package.json file

        ...
        "dependencies": {
            ...
            "difio-dotcloud-nodejs": ""
        },
        ...

- Execute the registration script in your postinstall hook. **Note:**
If you are using an "approot" your `postinstall` script should be in the 
directory pointed by the “approot” directive of your `dotcloud.yml`.
For more information about `postinstall` turn to 
[dotCloud documentation](http://docs.dotcloud.com/guides/postinstall/).

If a file named `postinstall` doesn't already exist, create it and add the following:

        #!/bin/sh
        `npm bin`/difio-dotcloud

* Make `postinstall` executable

        chmod a+x postinstall

* Commit your changes (if using git):

        git add .
        git commit -m "enable Difio registration"

- Push your application

        dotcloud push <app name>

- If everything goes well you should see something like:

        19:55:10 [www.0] Running postinstall script...
        19:55:13 [www.0] response:200
        19:55:13 [www.0] Difio: Success, registered/updated application with uuid 25d23384-46a8-48ce-83b0-01f4fa4c5987

**Note**: While testing the registration code we found out that the Node.js application in dotCloud
may not be accessible via http immediately. During that time registration to Difio may fail!
If this happens your application will register the next time you push to dotCloud!

- That's it, you can now check your application statistics at http://www.dif.io
