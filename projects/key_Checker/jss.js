const main = document.getElementById("Main");
window.addEventListener("keydown",(e) =>
{
    main.innerHTML = `
        <div>
            <table>
                <tr>
                    <th>
                        Keys
                    </th>
                    <th>
                        Keys Code
                    </th>
                <tr>
                    <th>
                        ${e.key==" "?"Space":e.key}
                    </th>
                    <th>
                        ${e.keyCode}
                    </th>
                </tr>   
                </tr>
            </table>
        </div>             
    
    `;
});
