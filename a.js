async function stuff(number){
    let thing = await fetch(`https://jsonplaceholder.typicode.com/users/${number}`)
    let things = await thing.json();
    let words = document.getElementById(`name${number}`);
    words.innerText = JSON.stringify(things.name);
}
stuff(1);
stuff(2);
stuff(3);

async function desc(number){
    let thing2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${number}`)
    let things2 = await thing2.json();
    let descs = document.getElementById(`desc${number}`);
    descs.innerText = JSON.stringify(things2.body);
}
desc(1);
desc(2);
desc(3);

async function pfp(number){
    const thing = await fetch(`https://jsonplaceholder.typicode.com/photos/${number}`);
    const things = await thing.json();
    let img = document.getElementById(`pfp${number}`);
    img.src = things.url;

}
pfp(1)
pfp(2);
pfp(3);