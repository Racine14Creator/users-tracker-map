| const conn = async () => {
4 | try {

> 5 | const db = await mongoose.connect(`${process.env.MONGODB_URI}`);

    |               ^

6 | /_ eslint-disable _/console.log(...oo*oo(`662218790_6_4_6_62_4`,"Connected to mongodb...", db.connection.host));
7 | } catch (error) {
8 | /* eslint-disable \_/console.log(...oo_oo(`662218790_8_4_8_22_4`,error)); {
reason: [TopologyDescription],
code: undefined
}
MongooseError: Operation `users.find()` buffering timed out after 10000ms

connect ECONNREFUSED 127.0.0.1:27017, connect ECONNREFUSED ::1:27017

There was a problem connecting to localhost:27017
