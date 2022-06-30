// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

console.log(page)

ReactDOM.render(
    page,
    document.getElementById("root"))
