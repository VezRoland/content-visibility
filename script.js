function addSection(imgId) {
    const section = document.createElement("section")
    const img = document.createElement("img")
    img.src = `https://picsum.photos/400/300?random=${imgId}`
    const text = document.createElement("p")
    text.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae odio expedita officia facere magnam nostrum facilis perferendis numquam itaque! Repellendus est laboriosam dicta ipsam alias numquam minus ad consequuntur sit?
    Debitis quam numquam, dolores, eum ducimus obcaecati corporis cumque non voluptatibus accusantium voluptate! Iure, id voluptatibus? Nostrum alias, corrupti velit sed soluta cumque, libero est quis, nulla dolor itaque placeat?`

    section.append(img, text)
    document.querySelector("main").appendChild(section)
}

for (let i = 0; i < 50; i++) {
    addSection(i)
}