1. Create a new directory 
    ```
    mkdir 01-basic
    cd 01-basic
    ```

2. Initalise a new NodeJS application
    ```
    npm init
    ```

    Press enter to all the questions

3. Install express
    ```
    yarn add express
    ```
    If yarn is not found, install it with (install once
    if you are using VSC on your computer):
    ```
    npm install -g yarn
    ```
3. Note: if the `node_modules` directory is missing, reinstall it with

    ```
    yarn install
    ```

4. Install `nodemon` (node monitor) so that we don't have to
   keep restarting server

   ```
   npm install -g nodemon
   ```

   Once we have installed, we can run index.js just by yping:

   ```
   nodemon
   ```

   And each time any file changed in the directory, the
   server will restart

   