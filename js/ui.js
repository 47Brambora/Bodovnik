// Render tabulek, vstupních polí a přepínání záložek

const btnEditMembers = document.getElementById('welc-msg-but-edit-mem');
const welcomeMsg = document.getElementById('welcome-msg');
const editMembers = document.getElementById('edit-members');
const btnToWelcomePage = document.getElementById('to-welcome-page');

btnEditMembers.addEventListener('click', () => {
    welcomeMsg.classList.add('hidden');
    editMembers.classList.remove('hidden');
});

btnToWelcomePage.addEventListener('click', () => {
    welcomeMsg.classList.remove('hidden');
    editMembers.classList.add('hidden');
})
