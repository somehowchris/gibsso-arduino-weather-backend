echo Whats the version of your db?
read version
ts-node ./node_modules/typeorm/cli.js migration:generate -n $version
npm start db.migrate
