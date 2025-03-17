

function card(image, heading, cname, du, views, time) {


    let c = document.createElement('div')
    c.style.backgroundColor = "rgba(13, 14, 13, 0.99)";
    c.style.padding = "10px";
    c.style.width = "70vw";
    c.style.margin = "5vh auto";
    c.style.borderRadius = "5px";
    c.style.display = "flex";
    c.style.position = "relative";
    c.style. filter= 'invert(1)';



    let ctime = document.createElement('div');
    ctime.innerHTML = du;
    ctime.style.display = "flex";
    ctime.style.color = "white";
    ctime.style.fontFamily = "Arial";
    ctime.style.textAlign = "center";
    ctime.style.fontSize = ".8rem";
    ctime.style.backgroundColor = "rgba(37, 36, 36, 0.5)";
    ctime.style.position = "absolute";
    ctime.style.borderRadius = "5px";
    ctime.style.left = "110px";
    ctime.style.bottom = "12px";
    ctime.style.width = "35px";
    ctime.style.height = "15px";
    ctime.style.display = "flex";
    ctime.style.flexDirection = "column";
    ctime.style.justifyContent = "center";
    ctime.style.alignItems = "center";
    c.appendChild(ctime);




    let img = document.createElement('img');
    c.appendChild(img);
    img.src = image;
    img.style.borderRadius = "5px";
    img.style.width = "10vw";
    img.style.display = "flex";
    img.style.flexDirection = "column";
    img.style.margin = "0 5px 0 0";
    img.style.filter = "invert(1)";

    let h1 = document.createElement('h1')
    h1.innerHTML = heading;
    h1.style.color = "white";
    h1.style.fontFamily = "Arial ";
    h1.style.textAlign = "center";
    h1.style.fontSize = "1.2rem";
    h1.style.fontWeight = "700";
    h1.style.display = "flex";
    h1.style.flexDirection = "column";
    h1.style.margin = "0px 0px 0px 0px";
    h1.style.position = "relative";
    c.appendChild(h1);



    let p = document.createElement('p')
    c.appendChild(p);
    p.innerHTML = cname;
    p.style.color = "white";
    p.style.font = "lighter";
    p.style.fontFamily = "Arial";
    p.style.fontSize = ".75rem";
    p.style.display = "flex";
    p.style.flexDirection = " column";
    p.style.margin = "30px 0px 0px -800px";
    p.style.position = "relative";


    // 
    let bullet = document.createElement('img');
    bullet.src = 'data:image/svg+xml;base64,' + btoa('<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3" r="3" fill="rgb(238, 234, 234)" /></svg>');
    bullet.style.display = "flex";
    bullet.style.flexDirection = " column";
    bullet.style.position = "absolute";
    bullet.style.borderRadius = "5px";
    bullet.style.left = "6.4VW";
    bullet.style.marginRight = "5px";
    p.appendChild(bullet);




    let viwe = document.createElement('p')
    c.appendChild(viwe);
    viwe.style.color = "white";
    viwe.style.font = "lighter";
    viwe.style.fontFamily = "Arial";
    viwe.style.fontSize = ".75rem";
    viwe.style.display = "flex";
    viwe.style.flexDirection = " column";
    viwe.style.position = "absolute";
    viwe.style.left = "253px";
    viwe.style.bottom = "30px";
    let viewsNumber = Number(views);
    if (viewsNumber > 1000) {
        viwe.innerHTML = (viewsNumber / 1000).toFixed(1) + "K" + " views";
    }
    if (viewsNumber > 1000000) {
        viwe.innerHTML = (viewsNumber / 1000000).toFixed(1) + "M" + " views";
    }
    if (viewsNumber > 1000000000) {
        viwe.innerHTML = (viewsNumber / 1000000000).toFixed(1) + "B" + " views";

    }
    let bullet2 = document.createElement('img');
    bullet2.src = 'data:image/svg+xml;base64,' + btoa('<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3" r="3" fill="rgba(250, 248, 248, 0.99)" /></svg>');
    bullet2.style.position = "absolute";
    bullet2.style.borderRadius = "5px";
    bullet2.style.left = "4.5VW";
    bullet2.style.marginRight = "10px";
    viwe.appendChild(bullet2);

    let dtime = document.createElement('p')
    c.appendChild(dtime);
    dtime.innerHTML = time;
    dtime.style.color = "white";
    dtime.style.font = "lighter";
    dtime.style.fontFamily = "Arial";
    dtime.style.fontSize = ".75rem";
    dtime.style.display = "flex";
    dtime.style.flexDirection = " column";
    dtime.style.position = "absolute";
    dtime.style.left = "330px";
    dtime.style.bottom = "30px";


    document.body.appendChild(c);
    
}

async function rutik() {
    setTimeout(async () => {
    
      card('https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA', "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", "31:20", "5000000000", "1 day ago");
    }, '200');
    setTimeout(async () => {
    
      card('https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA', "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", "31:20", "5000000000", "1 day ago");
    }, '400');
    setTimeout(async () => {
    
      card('https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA', "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", "31:20", "5000000000", "1 day ago");
    }, '600');
    setTimeout(async () => {
    
      card('https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA', "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", "31:20", "5000000000", "1 day ago");
    }, '800');

}

rutik();








