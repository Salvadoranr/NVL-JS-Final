"use strict";
var selectElement = document.querySelector("#creator_input");
selectElement.addEventListener("blur", function () {

    var element = selectElement.options[selectElement.options.selectedIndex]
    var section = document.querySelector("section");
    var div = document.querySelector("#content_option");

    if (element.value === "select" && !div) {

        var parent = document.createElement('div');
        parent.setAttribute("id", "content_option")
        section.appendChild(parent)
        createButton("+", parent);

        var childInputMulti = document.createElement("input");
        var childInputSingle = document.createElement("input");

        var childLabelSingle = document.createElement("label");
        var childLabelMulti = document.createElement("label")

        childInputMulti.type = "radio"
        childInputMulti.name = "selection"

        childInputSingle.type = "radio"
        childInputSingle.name = "selection"

        childLabelSingle.textContent = "Selección simple";
        childLabelMulti.textContent = "Selección Multiple";

        parent.appendChild(childLabelMulti).appendChild(childInputMulti);
        parent.appendChild(childLabelSingle).appendChild(childInputSingle);
        createText("Opción", "text", parent);
        document.querySelector(".add").addEventListener("click", createElement);


    } else if (element.value !== "select" && div) {

        div.parentNode.removeChild(div)


    }
})
document.querySelector("#create").addEventListener("click", createElement);

function createElement() {
    var typeSelected = selectElement.options[selectElement.options.selectedIndex].value
    var desc = document.querySelector("#desc").value;
    console.log(this.id)
    if (desc && this.id !== "+") {
        var parent = document.querySelector('#form');
        switch (typeSelected) {
            case 'text': createText(desc, typeSelected, parent);
                break;
            case 'number': createNumber(desc, typeSelected, parent);
                break;
            case 'email': createEmail(desc, typeSelected, parent);
                break;
            case 'submit': createSubmit(desc, parent);
                break;
            case 'select': createSelect(desc, parent);
                break;

        }
    } else if (this.id === "+") {
        createText("Opción", "text", document.querySelector("#content_option"));
    }
}




function createText(desc, typeSelected, referenceParent) {
    var childInput = document.createElement("input");
    var childLabel = document.createElement("label");
    childInput.type = typeSelected
    childInput.placeholder = "Introduce " + desc.toLowerCase();
    childLabel.textContent = desc + ": ";
    referenceParent.appendChild(childLabel).appendChild(childInput);
    if (desc !== "Opción") {
        document.querySelector("#desc").value = "";
    }

}
function createNumber(desc, typeSelected, referenceParent) {
    var childInput = document.createElement("input");
    var childLabel = document.createElement("label");
    childInput.type = typeSelected
    childInput.placeholder = "Introduce " + desc.toLowerCase();
    childLabel.textContent = desc + ": ";
    referenceParent.appendChild(childLabel).appendChild(childInput);

    document.querySelector("#desc").value = "";
}
function createEmail(desc, typeSelected, referenceParent) {
    var childInput = document.createElement("input");
    var childLabel = document.createElement("label");
    childInput.type = typeSelected
    childInput.placeholder = "Introduce " + desc.toLowerCase();
    childLabel.textContent = desc + ": ";
    referenceParent.appendChild(childLabel).appendChild(childInput);

    document.querySelector("#desc").value = "";
}
function createSubmit(desc, referenceParent) {
    var childInput = document.createElement("button");
    childInput.textContent= desc
    referenceParent.appendChild(childInput);

    document.querySelector("#desc").value = "";
}
function createSelect(desc, referenceParent) {
    var childSelect = document.createElement("select");
    createOptions(childSelect)
    var childLabel = document.createElement("label");
    childLabel.textContent = desc
    var checked = document.querySelector("#content_option").children[1].children[0].checked
    if (checked) {
        childSelect.setAttribute("multiple", "");
        childSelect.setAttribute("size", "1")
    }

    referenceParent.appendChild(childLabel).appendChild(childSelect);


    document.querySelector("#desc").value = "";
}
function createButton(text, referenceParent) {
    var button = document.createElement("button");
    button.id = text;
    button.textContent = text;
    button.className = "add"
    referenceParent.appendChild(button);

}
function createOptions(father) {
    var numberOfChildrens = document.querySelector("#content_option").children
    for (let index = 3; index < numberOfChildrens.length; index++) {
        var value = numberOfChildrens[index].children[0].value
        var option = document.createElement("option")
        option.value = value.toLowerCase();
        option.textContent = value;
        father.appendChild(option);

    }

}


