const guestsList    = document.querySelector('.guestsList');
const respondedDiv  = document.querySelector('.responded-div');
const textArea      = document.querySelector('.text-area');
const submitButton  = document.querySelector('.submit-button');
const removeBT      = document.querySelector('.remove');
const buttons       = document.getElementsByTagName('button');
const submitForm    = document.querySelector('.submit-form');


function createElement(elementName, className) {

    const element = document.createElement(elementName);
    element.className = className;

    return element;

}

submitButton.addEventListener('click', () => {

    if (textArea.value === '') {

        alert('Please enter a name');

    } else {

        const guestName = textArea.value;

        const guestDiv = createElement('form', 'guestDiv');
        guestDiv.setAttribute("onsubmit", "return false;");

        // creating new element

        const span = createElement('span', 'guestName');
        span.textContent = textArea.value;
        textArea.value = ''; // cleaning textArea after inserting name in span

        const label = createElement('label', 'appeared');
        label.textContent = 'Appeared';

        const input = document.createElement('input');
        input.type = 'checkbox';
        label.appendChild(input);

        const buttons = createElement('div', 'buttons');

        const edit = createElement('button', 'edit');
        edit.textContent = 'Edit';

        const remove = createElement('button', 'remove');
        remove.textContent = 'Remove';

        buttons.appendChild(edit);
        buttons.appendChild(remove);

        guestDiv.appendChild(span);
        guestDiv.appendChild(label);
        guestDiv.appendChild(buttons);
        guestsList.appendChild(guestDiv);

        // end of creation

    }
});

guestsList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {

        const button = e.target;
        const div = button.parentElement.parentElement;

        if (button.className === 'remove') {

            div.remove();

        } else if (button.className === 'edit') {

            const span = div.firstElementChild;
            const input = document.createElement('input');

            input.type = 'text';
            input.value = span.textContent;

            div.insertBefore(input, span);

            button.className = 'save';
            button.textContent = 'Save';

            span.remove();

        } else if (button.className === 'save') {

            const input = div.firstElementChild;
            const span = document.createElement('span');

            span.className = "guestName";
            span.textContent = input.value;

            div.insertBefore(span, input);

            button.className = 'edit';
            button.textContent = "Edit";

            input.remove();

        }

    }
});

// Rewrite or find a bug ( down )

// code

respondedDiv.addEventListener('change', (e) => {

    const checkbox = e.target;
    const isCheckboxChecked = checkbox.checked;

    // console.log(isCheckboxChecked);

    if ( isCheckboxChecked ) {

        const allGuests = guestsList.querySelectorAll('.guestDiv');

        // console.log(allGuests);

        for ( let i = 0; i < allGuests.length; i += 1 ) {

            const guest = allGuests[i];
            // console.log(guest);
            const guestsLabel = guest.querySelector('.appeared');
            // console.log(guestsLabel);
            const guestsCheckbox = guestsLabel.querySelector('input');
            // console.log(guestsCheckbox);

            if ( !guestsCheckbox.checked ) {

                guest.style.display = 'none';

            }

        }

    } else {

        const allGuests = guestsList.querySelectorAll('.guestDiv');

        // console.log(allGuests);

        for ( let i = 0; i < allGuests.length; i += 1 ) {

            const guest = allGuests[i];
            // console.log(guest);
            const guestsLabel = guest.querySelector('.appeared');
            // console.log(guestsLabel);
            const guestsCheckbox = guestsLabel.querySelector('input');
            // console.log(guestsCheckbox);

            if ( !guestsCheckbox.checked ) {

                guest.style.display = 'inline-block';

            }

        }

    }

});

guestsList.addEventListener('change', (e) => {

    const checkbox = e.target;
    const isCheckboxChecked = checkbox.checked;
    const guest = checkbox.parentElement.parentElement;

    if (isCheckboxChecked) {
        guest.style.borderColor = 'rgb(73, 197, 230)';
    } else {
        guest.style.borderColor = 'rgb(232, 232, 232)';
    }

});
