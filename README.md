Node.js client side agent for monupco.com preconfigured for dotCloud.


Installing on your dotCloud node.js application
----------------------------------------------

- Create an account at http://monupco.com

- Create your node.js application in dotCloud

- Add a dependency in your application's package.json file

        ...
        "dependencies": {
            ...
            "monupco-dotcloud-nodejs": ""
        },
        ...

- Execute the registration script in your postinstall hook. **Note:**
If you are using an "approot" your `postinstall` script should be in the 
directory pointed by the “approot” directive of your `dotcloud.yml`.
For more information about `postinstall` turn to 
[dotCloud documentation](http://docs.dotcloud.com/guides/postinstall/).

If a file named `postinstall` doesn't already exist, create it and add the following:

        #!/bin/sh
        `npm bin`/monupco-dotcloud



* Make `postinstall` executable

        chmod a+x postinstall

* Commit your changes (if using git):

        git add .
        git commit -m "enable monupco registration"

- Set your monupco user id. You can get it from <https://monupco-otb.rhcloud.com/profiles/mine/>.

        dotcloud var set <app name> MONUPCO_USER_ID=UserID


- Push your application

        dotcloud push <app name>

- That's it, you can now check your application statistics at <http://monupco.com>
