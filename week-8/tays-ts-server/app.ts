import * as express from "express";

const app = express();
interface Composer{
    id: number,
    firstName: string,
    lastName: string,
}

const composers: Composer[] = [
    { id: 1, firstName: "Johann", lastName: "Bach"},
    { id: 2, firstName: "Wolfgang", lastName: "Mozart"},
    { id: 3, firstName: "Ludwig", lastName: "Beethoven"},
    { id: 4, firstName: "Giuseppe", lastName: "Verdi"},
    { id: 5, firstName: "Frederic", lastName: "Chopin"},
];

function getComposers(): Composer[]{
    return composers;
}

app.get('/', (req, res) => {
    res.send('The Url for composers is http://localhost:3000/api/composers');
});

app.get('/api/composers', (req, res) => {
    res.json(getComposers());
});

function getComposerById(composerId: number): Composer {
    return composers.find(c => c.id == composerId);
}

app.get('/api/composer/:id', (req, res) => {
    res.json(getComposerById(req.params.id));
});

const server = app.listen(3000, "localhost", () => {
    console.log("Listening on port 3000");
});