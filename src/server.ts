import express from "express";

const port = 3000;

let app: express.Application;

app = express();

app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.listen(port, () => {
    // console.log(`Server running at http://localhost:${port}`);
})

export default app;